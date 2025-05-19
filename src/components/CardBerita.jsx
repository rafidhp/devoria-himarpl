export function CardBerita({ image, title, tag, author }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col gap-3">
      <img src={image} alt={title} className="rounded-md w-full h-[160px] object-cover" />
      <span className="text-xs text-blue-600 font-medium">{tag}</span>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      {author && <span className="text-sm text-gray-500">By {author}</span>}
    </div>
  );
}
