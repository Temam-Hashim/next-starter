import React from "react";
import  ImageLists,{ImageType} from "../wonder";
import Image from "next/image";


function PhotoModal({ params: { id } }: { params: { id: string } }) {
  const photo: ImageType = ImageLists.find((p) => p.id === id);
  return (
    <div className="container mx-aut my-10">
      <div className="w-1/2 mx-auto">
        <div>
          <h1 className="text-center text-3xl font-bold my-4">{photo.name}</h1>
        </div>
        <Image
          className="w-full aspect-square object-cover"
          src={photo.src}
          alt={photo.name}
        />
        <div className="bg-white py-4">
          <h3>{photo.photographer}</h3>
          <h3>{photo.location}</h3>
        </div>
      </div>
    </div>
  );
}

export default PhotoModal;
