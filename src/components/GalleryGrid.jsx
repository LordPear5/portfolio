import GalleryItem from "./GalleryItem";

export default function GalleryGrid({ items }) {
  return (
    <div className="grid">
      {items.map((item) => (
        <GalleryItem key={item.id} {...item} />
      ))}
    </div>
  );
}
