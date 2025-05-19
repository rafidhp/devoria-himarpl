export function CardBeritaSmall({ image, title, tag }) {
  return (
    <div className="bg-white rounded-lg shadow p-3 flex flex-col gap-2">
      <img src={image} alt={title} className="rounded-md w-full h-[130px] object-cover" />
      <span className="text-xs text-green-600 font-medium">{tag}</span>
      <h4 className="text-sm font-semibold text-gray-800">{title}</h4>
    </div>
  );
}
