/* eslint-disable prettier/prettier */
import { ReactNode } from "react";

export default function layout({
  children,
}: {
  children: ReactNode;
  posts: ReactNode;
}) {
  return (
    <div className="size-[300px] flex  bg-emerald-800">
      <h1 className="text-red-800 ">This is served from inside layout.</h1>
      {children}
    </div>
  );
}
