import { ProductCardProps } from "@/lib/interfaces";
import clientPromise from "@/lib/mongodb/mongodb";
import { Db, InsertOneResult, MongoClient } from "mongodb";

export async function GET(req: Request) {
  try {
    const client: MongoClient = await clientPromise;

    const db: Db = client.db("catalogo-gri");
    const productos = await db.collection("productos").find().toArray();

    return Response.json({ code: 200, productos }, { status: 200 });
  } catch (error) {
    return Response.json({ Error: error, code: 500 }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data: Partial<ProductCardProps> = await req.json();
    const client: MongoClient = await clientPromise;
    const db: Db = client.db("catalogo-gri");

    const nuevo_producto = {
      image: data.image,
      category: data.category,
      description: data.description,
      price: data.price,
      sale: data.sale,
      various: data.various,
    };

    const producto_creado: InsertOneResult<Document> = await db
      .collection("productos")
      .insertOne(nuevo_producto);

    return Response.json(
      { code: 201, nuevo: producto_creado },
      { status: 201 }
    );
  } catch (error) {
    return Response.json({ Error: error, code: 500 }, { status: 500 });
  }
}
