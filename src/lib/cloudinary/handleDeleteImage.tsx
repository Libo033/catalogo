export const handleDeleteImageFromCld = (
  img: string,
  upload_preset: string
): boolean | Error => {
  const public_id: string = img.slice(
    img.indexOf(upload_preset) + upload_preset.length,
    img.length - 4
  );

  fetch(`/api/v1/image/${public_id}`, { method: "DELETE" })
    .then((res) => res.json())
    .then((data) => {
      if (data.code === 200) {
        return true;
      } else {
        throw new Error("Error al borrar la imagen");
      }
    })
    .catch((err) => {
      if (err instanceof Error) {
        return err;
      } else {
        return new Error("Algo salio mal");
      }
    });

  return false;
};
