import Container from "@/src/components/UI/Container";
import axiosInstance from "@/src/lib/AxiosInstance";
import { IPost } from "@/src/types";
import Post from "@/src/components/UI/Posts/post";

export default async function page() {
  const { data } = await axiosInstance.get(`/items`);

  return (
    <Container>
      <div className="mx-auto my-3 max-w-[720px]">
        <h1 className="text-center justify-center items-center text-3xl mb-6">
          {" "}
          All Found items will display here.{" "}
        </h1>
        {data?.data?.map((post: IPost) => <Post key={post?._id} post={post} />)}
      </div>
    </Container>
  );
}
