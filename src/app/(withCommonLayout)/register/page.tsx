/* eslint-disable prettier/prettier */
"use client";

// import { useUserRegistration } from "@/src/hooks/auth.hook";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
// import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { FieldValues, SubmitHandler } from "react-hook-form";

import { registerUser } from "@/src/services/AuthService";
import registerValidationSchema from "@/src/schemas/register.schema";
import FXInput from "@/src/components/form/FXInput";
import FXForm from "@/src/components/form/FXForm";
import { useUserRegistration } from "@/src/hooks/auth.hook";

export default function RegisterPage() {
  const { mutate: handleUserRegistration, isPending } = useUserRegistration();

  //   useEffect(() => {
  //     if (isPending) {
  //       // Handle Loading satate
  //     }
  //   }, [isPending]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const userData = {
      ...data,
      profilePhoto: "https://i.ibb.co/7rXf7FY/azir.jpg",
    };

    console.log("Inside form user data: ", userData);

    registerUser(userData);
  };

  // if (isPending) {
  //   //  handle loading state
  // }

  return (
    <div className="flex h-[calc(100vh-100px)] flex-col items-center justify-center">
      <h3 className="my-2 text-xl font-bold">Register with FoundX</h3>
      <p className="mb-4">Help Lost Items Find Their Way Home</p>
      <div className="w-[35%]">
        <FXForm
          //! Only for development
          defaultValues={{
            name: "Zaif Uddin",
            email: "zaif@gmail.com",
            mobileNumber: "01711223344",
            password: "123456",
            profilePhoto: "https://i.ibb.co/7rXf7FY/azir.jpg",
          }}
          resolver={zodResolver(registerValidationSchema)}
          onSubmit={onSubmit}
        >
          <div className="py-3">
            <FXInput label="Name" name="name" size="sm" />
          </div>
          <div className="py-3">
            <FXInput label="Email" name="email" size="sm" />
          </div>
          <div className="py-3">
            <FXInput label="Mobile Number" name="mobileNumber" size="sm" />
          </div>
          <div className="py-3">
            <FXInput
              label="Password"
              name="password"
              size="sm"
              type="password"
            />
          </div>

          <Button
            className="my-3 w-full rounded-md bg-default-900 text-default"
            size="lg"
            type="submit"
          >
            Registration
          </Button>
        </FXForm>
        <div className="text-center">
          Already have an account ? <Link href={"/login"}>Login</Link>
        </div>
      </div>
    </div>
  );
}