import React from "react";
import Image from "next/image";
import ImageLists, { ImageType } from "../../../wonder";
import Modal from "@/custom/modal/Modal";

function ModalPhoto({ params: { id } }: { params: { id: string } }) {
  const photo: ImageType = ImageLists.find((p) => p.id === id);
  return (
    <Modal>
      <div className="container mx-aut my-10">
        <div className="w-1/2 mx-auto">
          <Image
            className="w-full aspect-square object-cover"
            src={photo.src}
            alt={photo.name}
          />

          <div className="bg-white py-4">
            <h1 className="text-center text-3xl font-bold my-4">
              {photo.name}
            </h1>
            <h3>{photo.photographer}</h3>
            <h3>{photo.location}</h3>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ModalPhoto;
