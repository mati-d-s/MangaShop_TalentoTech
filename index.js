import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const productos = [
  {
    "createdAt": "2025-07-14T15:07:04.000Z",
    "name": "Attack on Titan Vol. 1",
    "imagen": "https://acdn-us.mitiendanube.com/stores/001/184/069/products/aot_01_6ta-edicion-cov1-b5d8482395dd56a46016306213884430-640-0.jpg",
    "price": "9.99",
    "description": "¡El primer volumen del aclamado manga de Hajime Isayama! La humanidad vive dentro de ciudades amuralladas para protegerse de los gigantes devoradores de hombres.",
    "id": "1"
  },
  {
    "createdAt": "2025-07-14T15:07:04.000Z",
    "name": "My Hero Academia Vol. 1",
    "imagen": "https://acdn-us.mitiendanube.com/stores/399/159/products/myheroacademia011-4546fbebf409fcfdee15379061162949-640-0.jpg",
    "price": "9.99",
    "description": "En un mundo donde la mayoría de la población tiene superpoderes, Izuku Midoriya nace sin uno. Aun así, sueña con convertirse en un héroe.",
    "id": "2"
  },
  {
    "createdAt": "2025-07-14T15:07:04.000Z",
    "name": "Jujutsu Kaisen Vol. 1",
    "imagen": "https://images.cdn3.buscalibre.com/fit-in/360x360/c3/04/c3040c764d43cfafc9ed4f574382f392.jpg",
    "price": "9.99",
    "description": "Yuji Itadori es un estudiante de secundaria con una fuerza física inmensa que se ve envuelto en el mundo de las maldiciones.",
    "id": "3"
  },
  {
    "createdAt": "2025-07-14T15:07:04.000Z",
    "name": "Chainsaw Man Vol. 1",
    "imagen": "https://acdn-us.mitiendanube.com/stores/399/159/products/chainsawman11-07e31b2e9f1f5eeab716057116136380-640-0.jpg",
    "price": "10.99",
    "description": "Denji, un joven empobrecido, hace un contrato con un demonio perro llamado Pochita para vivir. Tras un incidente, se convierte en el Hombre Motosierra.",
    "id": "4"
  },
  {
    "createdAt": "2025-07-14T15:07:04.000Z",
    "name": "Spy x Family Vol. 1",
    "imagen": "https://images.cdn2.buscalibre.com/fit-in/360x360/81/9d/819d7e1d65c47f6a91cc3bfda8c0415c.jpg",
    "price": "9.99",
    "description": "Un espía debe formar una familia falsa para llevar a cabo una misión. Lo que no sabe es que su 'esposa' es una asesina y su 'hija' una telépata.",
    "id": "5"
  },
  {
    "createdAt": "2025-07-14T15:07:04.000Z",
    "name": "Berserk Vol. 1 (Deluxe Edition)",
    "imagen": "https://images.cdn1.buscalibre.com/fit-in/360x360/24/e9/24e94a2bf598461343415bd45a5e188b.jpg",
    "price": "49.99",
    "description": "La edición de lujo del manga de fantasía oscura más influyente. Sigue a Guts, el espadachín negro, en su viaje de venganza.",
    "id": "6"
  },
  {
    "createdAt": "2025-07-14T15:07:04.000Z",
    "name": "One Piece Vol. 1",
    "imagen": "https://acdn-us.mitiendanube.com/stores/399/159/products/onepiece011-778bcfffc7d1f6acd115684066763694-640-0.jpg",
    "price": "9.99",
    "description": "Monkey D. Luffy y su tripulación de piratas, los Piratas de Sombrero de Paja, buscan el tesoro definitivo, el One Piece.",
    "id": "7"
  },
  {
    "createdAt": "2025-07-14T15:07:04.000Z",
    "name": "Demon Slayer: Kimetsu no Yaiba Vol. 1",
    "imagen": "https://acdn-us.mitiendanube.com/stores/399/159/products/demonslayer011-e7ac34b342e2c2344015749600681393-640-0.jpg",
    "price": "9.99",
    "description": "Tanjiro Kamado se embarca en un viaje para vengar a su familia y curar a su hermana, que ha sido convertida en demonio.",
    "id": "8"
  },
  {
    "createdAt": "2025-07-14T15:07:04.000Z",
    "name": "Fullmetal Alchemist Vol. 1",
    "imagen": "https://acdn-us.mitiendanube.com/stores/399/159/products/fullmetalalchemist011-6b0e9b36f786dcde8015681730416000-640-0.jpg",
    "price": "12.99",
    "description": "Los hermanos Edward y Alphonse Elric buscan la Piedra Filosofal para restaurar sus cuerpos tras un fallido intento de resurrección.",
    "id": "9"
  },
  {
    "createdAt": "2025-07-14T15:07:04.000Z",
    "name": "Death Note Vol. 1",
    "imagen": "https://upload.wikimedia.org/wikipedia/en/6/6f/Death_Note_Vol_1.jpg",
    "price": "8.99",
    "description": "Light Yagami encuentra un cuaderno sobrenatural que le permite matar a cualquiera con solo escribir su nombre.",
    "id": "10"
  },
  {
  "createdAt": "2025-07-14T15:07:04.000Z",
  "name": "Tokyo Revengers Vol. 1",
  "imagen": "https://images.penguinrandomhouse.com/cover/9781646512485",
  "price": "11.99",
  "description": "Takemichi Hanagaki viaja al pasado para evitar la muerte de su exnovia y cambiar el futuro de una peligrosa pandilla.",
  "id": "11"
},
{
  "createdAt": "2025-07-14T15:07:04.000Z",
  "name": "Blue Lock Vol. 1",
  "imagen": "https://http2.mlstatic.com/D_NQ_NP_779509-MLA49707437522_042022-O.webp",
  "price": "10.50",
  "description": "Después de una decepcionante eliminación de la Copa Mundial, Japón crea un programa radical para encontrar al mejor delantero: el Blue Lock.",
  "id": "12"
}


];

app.get("/api/productos", (req, res) => {
  res.json(productos);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API escuchando en puerto ${PORT}`);
});
