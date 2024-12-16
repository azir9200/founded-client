"use client";

import { useUser } from "@/src/context/user.provider";
import { IPost, IUser } from "@/src/types";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import ImageGallery from "./ImageGallery";
import { Image } from "@nextui-org/image";
import ClaimRequestModal from "../../modals/ClaimRequestModal";
import AuthenticationModal from "../../modals/AuthenticationModal";

interface IProps {
  post: IPost;
}

export default function Post({ post }: IProps) {
  const {
    title,
    dateFound,
    description,
    location,
    city,
    _id,
    image,
    user,
    questions,
  } = post || {};

  const { name, email, profilePhoto } = (user as IUser) || {};
  const { user: loggedInUser } = useUser();

  return (
    <div className="mb-2 rounded-md bg-default-100 p-4">
      <div className="border-b border-default-200 pb-2">
        <div className="flex items-center justify-between border-b border-default-200 pb-4">
          <div className="flex items-center gap-3">
            <Avatar isBordered name={name} radius="sm" src={profilePhoto} />
            <div>
              <p>{name}</p>
              <p className="text-xs">{email}</p>
            </div>
          </div>
        </div>
        <div className="border-b border-default-200 py-4">
          <div className="mb-4 flex items-start justify-between">
            <div>
              <Link href={`/found-items/${_id}`}>
                <h1 className="cursor-pointer text-2xl">{title}</h1>
              </Link>
              <p className="flex items-center gap-1 text-xs">
                Found on
                {/* Found on: <Calendar width={14} />
                {format(new Date(dateFound), "dd MMM, yyyy")} */}
              </p>
            </div>
            <div>
              <p className="flex items-center gap-1">
                {/* <MapPin width={18} /> */}
                {location}, {city}
              </p>
            </div>
          </div>
          <p>{description}</p>
        </div>

        {/* <ImageGallery images={images} /> */}
        <div className="heigh={300} width={300}">
          {/* <Image
            className=" heigh={300} width={300}-translate-y-6"
            src={image}
          /> */}
          <Image
            width={200}
            height={100}
            src={image}
            fallbackSrc="https://via.placeholder.com/200x100"
            alt="NextUI Image with fallback"
          />
        </div>
        <div className="mt-4 flex gap-5">
          {email !== loggedInUser?.email && (
            <>
              {loggedInUser?.email && (
                <ClaimRequestModal id={_id} questions={questions} />
              )}
              {!loggedInUser?.email && <AuthenticationModal id={_id} />}
            </>
          )}
          {email !== loggedInUser?.email && (
            <div className="w-[1px] bg-default-200" />
          )}
          <Button className="flex-1" variant="light">
            Share
          </Button>
        </div>
      </div>
    </div>
  );
}
