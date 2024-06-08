import Image from "next/image";
import Link from "next/link";
import React from "react";
import ImageLists from "./wonder";

function PhotoFeed() {
  return (
    <main className="container mx-auto">
      <h1 className="text-center text-3xl font-bold my-4">Photo Feeds</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-5">
        {ImageLists.map((image) => (
          <Link href={`/photo-feed/${image.id}`} key={image.id}>
            <Image
              className="w-full aspect-square object-cover"
              src={image.src}
              alt={image.name}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}

export default PhotoFeed;
