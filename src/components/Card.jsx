function Card({ title, items }) {
  return (
    <div className="bg-white p-5 shadow-md rounded-lg">
      <h2 className="text-lg font-bold mb-4">{title}</h2>

      <div className="grid grid-cols-2 gap-4">
        {items.map((item, index) => (
          <div key={index} className="cursor-pointer">
            <img
              src={item.image}
              alt={item.name}
              className="h-28 w-full object-cover rounded-md"
            />
            <p className="text-sm mt-1">{item.name}</p>
          </div>
        ))}
      </div>

      <p className="text-blue-600 mt-4 text-sm cursor-pointer hover:underline">
        Explore all
      </p>
    </div>
  );
}

export default Card;
