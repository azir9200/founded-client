/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { Skeleton } from "@nextui-org/skeleton";

import Card from "@/src/components/UI/Card";
import Container from "@/src/components/UI/Container";
import { getRecentPosts } from "@/src/services/RecentPosts";
import { IPost } from "@/src/types";

export default async function RecentPosts() {
  const { data: posts } = await getRecentPosts();
  // console.log("object", posts);

  return (
    <Container>
      <div className="section-title my-8">
        <h2 className="mb-2 text-center text-2xl">Recently Found Items azir</h2>

        <Skeleton className="rounded-lg">
          <div className="h-24 rounded-lg bg-default-300">
            <p className="p-8">Home in ..</p>
          </div>
        </Skeleton>

        <p className="text-center">
          A list of items that have been recently found and reported.
        </p>
      </div>
      <div className="my-8 grid justify-center gap-10 sm:grid-cols-1 md:grid-cols-4">
        {posts.map((item: any) => (
          <p>{item.title}</p>
        ))}
        {posts.map((post: IPost) => (
          <Card key={post?._id} post={post} />
        ))}
      </div>
      <div className="flex justify-center">
        <Button className="rounded-md bg-default-900 text-default" size="md">
          <Link href="/found-items">See All</Link>
        </Button>
      </div>
    </Container>
  );
}
