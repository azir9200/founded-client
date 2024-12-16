"use server";

import axiosInstance from "@/src/lib/AxiosInstance";

export const getCategories = async () => {
  try {
    const { data } = await axiosInstance.get("/item-categories");
    // console.log("categories", data);

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
