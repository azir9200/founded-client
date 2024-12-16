"use client";

import LightGallery from "lightgallery/react";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  images: string[];
}

export default function ImageGallery({ images }: IProps) {
  return (
    <LightGallery
      elementClassNames={` mt-2 gap-2 grid place-items-center ${images.length === 1 ? "grid-cols-1" : "grid-cols-2"} `}
      plugins={[lgThumbnail, lgZoom]}
      speed={500}
    >
      {images?.map((image, index) => (
        <Link key={index} href={image}>
          <Image
            alt={`image-${index}`}
            className="h-[400px] w-full object-cover"
            height={500}
            src={image}
            width={500}
          />
        </Link>
      ))}
    </LightGallery>
  );
}
