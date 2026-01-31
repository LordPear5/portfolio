import GalleryGrid from "../components/GalleryGrid";

export default function Gallery() {
  const paintings = [
    {
      id: 1,
      image: "./Alfons_Mucha_-_F._Champenois_Imprimeur-Éditeur.jpg",
      title: "Painting 1",
    },
    { id: 2, image: "./Gustav_Klimt_046.jpg", title: "Painting 2" },
    { id: 3, image: "./impression-sunrise.jpg", title: "Painting 3" },
  ];

  return (
    <section className="gallery">
      <h2>The paintings that inspire me</h2>
      <GalleryGrid items={paintings} />
    </section>
  );
}
