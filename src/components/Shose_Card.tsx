import Image from "next/image";
interface shopCard {
  image: string;
  name: string;
  description: string;
  discount: string;
}

export default function ShopCard({
  image,
  name,
  description,
  discount,
}: shopCard) {
  return (
    <div className="flex flex-col gap-4 bg-white shadow-lg rounded-lg p-5 w-full max-w-sm mx-auto">
      {/* Centered Image */}
      <div className="flex justify-center items-center w-full overflow-hidden rounded-t-lg">
        <Image
          src={image}
          alt="showimage"
          width={441}
          height={441}
          className="w-full max-w-md rounded-lg shadow-xl transition-transform transform hover:scale-110 object-cover"
        />
      </div>
      {/* Text Section */}
      <div className="flex flex-col text-center gap-2">
        <h4 className="text-xl font-bold text-gray-800">{name}</h4>
        <p className="text-black text-sm font-medium">{discount}</p>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
