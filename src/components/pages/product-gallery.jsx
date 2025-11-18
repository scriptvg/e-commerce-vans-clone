export function ProductGallery({ images, productName }) {
  return (
    <div className="flex-1 grid grid-cols-2 gap-1 mr-1">
      {images.map((image, index) => (
        <div key={index} className="bg-gray-100 dark:bg-gray-800">
          <img
            src={image}
            alt={`${productName} ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  )
}
