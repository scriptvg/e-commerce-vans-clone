export function ProductColorSelector({ product, selectedColorIndex, onSelectColor }) {
  return (
    <div>
      <p className="font-medium mb-3">{product.color}</p>
      <div className="flex gap-2">
        {product.colors.map((color, index) => (
          <button
            key={index}
            onClick={() => onSelectColor?.(index)}
            className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${
              selectedColorIndex === index
                ? "border-black dark:border-white"
                : "border-gray-300 hover:border-gray-400"
            }`}
          >
            <img
              src={product.colorImages?.[index] ?? product.images[0]}
              alt={color.name}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
        <button className="w-12 h-12 rounded-lg border-2 border-gray-300 hover:border-gray-400 flex items-center justify-center text-sm font-medium">
          +1
        </button>
      </div>
    </div>
  );
}
