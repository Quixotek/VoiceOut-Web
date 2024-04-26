/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CardContent } from "@/components/ui/card";
import { useState } from "react";
import { EyeOff, Eye } from "lucide-react";

const schema = z.object({
  firstName: z.string().min(1, "Must contain atleast one character"),
  lastName: z.string().min(1, "Must contain atleast one character"),
  email: z.string().email(),
  password: z.string().min(6, "Must contain atleast six (6) characters"),
});

type SignUpFormData = z.infer<typeof schema>;

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(schema),
  });
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const onSubmit = (data: SignUpFormData) => {
    console.log(data);
  };

  return (
    <section>
      <div className="min-h-screen lg:flex lg:justify-between">
        <div className="flex flex-col justify-center flex-1 px-4 py-12  sm:px-6 lg:px-20 xl:px-24">
          <div className="flex-1 max-w-sm mx-auto lg:max-w-md">
            <h1 className="mt-10 text-3xl font-bold text-center  lg:mt-20 xl:mt-28 sm:text-4xl xl:text-5xl font-pj lg:text-center">
              Create your account
            </h1>
            <CardContent>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid gap-6 mt-10 lg:mt-16"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input
                      id="first-name"
                      placeholder="Max"
                      {...register("firstName")}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-xs">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input
                      id="last-name"
                      placeholder="Robinson"
                      {...register("lastName")}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-xs">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="grid gap-2 relative">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type={passwordShown ? "text" : "password"}
                    {...register("password")}
                  />
                  <div
                    onClick={togglePasswordVisibility}
                    className="absolute top-8  right-0 pr-3 flex items-center "
                  >
                    {passwordShown ? <EyeOff size={20} /> : <Eye size={20} />}
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-xs">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-4">
                  <Button type="submit" className="w-full">
                    Create an account
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full"
                    // onClick={() => {
                    //   if (window && typeof window !== "undefined") {
                    //     window.location.href = `${constant.restUri}/auth/google`;
                    //   }
                    // }}
                  >
                    Sign up with Google
                  </Button>
                </div>
              </form>
              <div className="mt-4 text-center text-sm">
                Already have an account?{" "}
                <Link href="/signin" className="underline">
                  Sign in
                </Link>
              </div>
            </CardContent>
          </div>
        </div>
        <div className="relative grid flex-1 w-full px-4 py-12 overflow-hidden bg-gray-900 lg:max-w-3xl lg:px-20 xl:px-24 sm:px-6 place-items-center">
          <div className="absolute inset-0">
            <img
              className="object-cover object-top w-full h-full scale-150 -rotate-90 opacity-10"
              src="https://cdn.rareblocks.xyz/collection/clarity/images/sign-up/4/background-pattern.png"
              alt=""
            />
          </div>

          <div className="relative max-w-md mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-800 rounded-xl">
              <svg
                className="w-auto h-5 text-white"
                viewBox="0 0 33 23"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M32.0011 4.7203L30.9745 0C23.5828 0.33861 18.459 3.41404 18.459 12.4583V22.8687H31.3725V9.78438H26.4818C26.4819 6.88236 28.3027 5.17551 32.0011 4.7203Z" />
                <path d="M13.5421 4.7203L12.5155 0C5.12386 0.33861 0 3.41413 0 12.4584V22.8687H12.914V9.78438H8.02029C8.02029 6.88236 9.84111 5.17551 13.5421 4.7203Z" />
              </svg>
            </div>

            <blockquote className="mt-14">
              <p className="text-2xl font-medium leading-relaxed text-white lg:text-3xl font-pj">
                “You are not defined by the cruelty of others. You are defined
                by the courage you show in the face of adversity.”
              </p>
            </blockquote>

            <div className="flex items-center mt-12">
              <div className="ml-4">
                <p className="mt-px text-lg font-normal text-gray-400 font-pj">
                  - Unknown
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
