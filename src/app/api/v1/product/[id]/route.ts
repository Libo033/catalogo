import { getPublicId } from "@/lib/cloudinary/getPublicId";
import { ProductCardProps } from "@/lib/interfaces";
import clientPromise from "@/lib/mongodb/mongodb";
import { Db, DeleteResult, MongoClient, ObjectId, UpdateResult } from "mongodb";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const client: MongoClient = await clientPromise;
    const db: Db = client.db("catalogo-gri");

    const producto = await db
      .collection("productos")
      .find({ _id: new ObjectId(params.id) })
      .toArray();

    return Response.json({ code: 200, producto: producto[0] }, { status: 200 });
  } catch (error) {
    return Response.json({ Error: error, code: 500 }, { status: 500 });
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const data: Partial<ProductCardProps> = await req.json();
    const client: MongoClient = await clientPromise;
    const db: Db = client.db("catalogo-gri");

    const modificar_producto = {
      image: data.image,
      category: data.category,
      description: data.description,
      price: data.price,
      sale: data.sale,
      various: data.various,
    };

    const producto_modificado: UpdateResult<Document> = await db
      .collection("productos")
      .updateOne(
        { _id: new ObjectId(params.id) },
        { $set: modificar_producto }
      );

    return Response.json(
      { code: 200, modificado: producto_modificado.acknowledged },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ Error: error, code: 500 }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const client: MongoClient = await clientPromise;
    const db: Db = client.db("catalogo-gri");

    const producto = await db
      .collection("productos")
      .findOne({ _id: new ObjectId(params.id) });

    if (producto) {
      const public_id: string = getPublicId(producto.image, "07-catalogo-gri");
      const res = await fetch(`/api/v1/cld${public_id}`, { method: "DELETE" });
      const isDeleted = await res.json();

      if (!isDeleted.deleted) {
        throw new Error("No se pudo eliminar la imagen de cloudinary");
      }
    } else {
      return Response.json(
        { Error: new Error("No se pudo eliminar la imagen"), code: 500 },
        { status: 500 }
      );
    }

    const producto_borrado: DeleteResult = await db
      .collection("productos")
      .deleteOne({ _id: new ObjectId(params.id) });

    return Response.json(
      { code: 200, borrado: producto_borrado.acknowledged },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ Error: error, code: 500 }, { status: 500 });
  }
}
