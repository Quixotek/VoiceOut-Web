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
  username: z.string().min(1, "Username is required!"),
  email: z.string().optional(),
  password: z.string().min(6, "Must contain atleast eight (8) characters"),
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
                <div className="grid gap-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    type="username"
                    {...register("username")}
                  />
                  {errors.username && (
                    <p className="text-red-500 text-xs">
                      {errors.username.message}
                    </p>
                  )}
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email">Email (Optional)</Label>
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
                  {/* <Button
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
                  </Button> */}
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
            <section className="py-12 bg-gray-900 sm:py-16 lg:py-20 xl:py-20">
              <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-xs">
                  <h2 className="text-3xl font-semibold tracking-tight text-white ">
                    Benefits of Signing up
                  </h2>
                </div>

                <div className="grid max-w-md grid-cols-1 gap-12 mt-12 lg:max-w-none ">
                  <div className="relative flex flex-start lg:flex-col">
                    <span
                      className="absolute top-7 left-1.5 h-full w-px lg:w-full lg:h-px -ml-px bg-gray-700 lg:top-1.5 lg:left-7"
                      aria-hidden="true"
                    ></span>

                    <div className="w-3 h-3 bg-blue-600 rounded-full shrink-0"></div>
                    <div className="ml-6 lg:ml-0 lg:mt-4">
                      <h3 className="text-2xl font-semibold text-gray-300">
                        Community
                      </h3>
                      <p className="mt-4 text-base font-normal text-gray-400">
                        Connect with like-minded individuals and share insights
                        in specialized communities.
                      </p>
                    </div>
                  </div>

                  <div className="relative flex flex-start lg:flex-col">
                    <span
                      className="absolute top-7 left-1.5 h-full w-px lg:w-full lg:h-px -ml-px bg-gray-700 lg:top-1.5 lg:left-7"
                      aria-hidden="true"
                    ></span>

                    <div className="w-3 h-3 bg-gray-700 rounded-full shrink-0"></div>
                    <div className="ml-6 lg:ml-0 lg:mt-4">
                      <h3 className="text-2xl font-semibold text-gray-300">
                        Legal Advices
                      </h3>
                      <p className="mt-4 text-base font-normal text-gray-400">
                        Get access to professional legal advice to protect
                        yourself and your business.
                      </p>
                    </div>
                  </div>

                  <div className="relative flex flex-start lg:flex-col">
                    <span
                      className="absolute top-7 left-1.5 h-full w-px lg:w-full lg:h-px -ml-px bg-gray-700 lg:top-1.5 lg:left-7"
                      aria-hidden="true"
                    ></span>

                    <div className="w-3 h-3 bg-gray-700 rounded-full shrink-0"></div>
                    <div className="ml-6 lg:ml-0 lg:mt-4">
                      <h3 className="text-2xl font-semibold text-gray-300">
                        Profile Customization
                      </h3>
                      <p className="mt-4 text-base font-normal text-gray-400">
                        Customize your profile to distinguish yourself or
                        maintain anonymity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
