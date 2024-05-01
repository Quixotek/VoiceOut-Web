/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { CardContent } from "@/components/ui/card";
import { useState } from "react";

const schema = z.object({
  email: z.string().optional(),
  password: z.string().min(8, { message: "Minimum of 8 characters" }),
});

type SigninFormData = z.infer<typeof schema>;

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormData>({
    resolver: zodResolver(schema),
  });
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const onSubmit = (data: SigninFormData) => {
    console.log(data);
  };

  return (
    <section>
      <div className="min-h-screen lg:flex lg:justify-between">
        <div className="flex flex-col justify-center flex-1 px-4 py-12  sm:px-6 lg:px-20 xl:px-24">
          <div className="flex-1 max-w-sm mx-auto lg:max-w-md">
            <h1 className="mt-10 text-3xl font-bold text-center  lg:mt-20 xl:mt-32 sm:text-4xl xl:text-5xl font-pj lg:text-center">
              Welcome back to VoiceOut
            </h1>

            <CardContent>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid gap-8 mt-10 lg:mt-16"
              >
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
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link
                      href="/forgot-password"
                      className="inline-block text-sm underline"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                  <div className="relative">
                    <Input
                      id="password"
                      type={passwordShown ? "text" : "password"}
                      {...register("password")}
                    />
                    <div
                      onClick={togglePasswordVisibility}
                      className="absolute top-3 right-0 pr-3 flex items-center "
                    >
                      {passwordShown ? <EyeOff size={20} /> : <Eye size={20} />}
                    </div>
                    {errors.password && (
                      <p className="text-red-500 text-xs">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <Button
                    type="submit"
                    className="w-full"
                    // onClick={() => handleSubmit(onSubmit)}
                  >
                    Login
                  </Button>
                  {/* <Button
                    type="button"
                    variant="outline"
                    className="w-full"
                    // onClick={() => handleGoogleLogin()}
                    // disabled={loading}
                  >
                    Login with Google
                  </Button> */}
                </div>
              </form>
              <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link href="/signup" className="underline">
                  Sign up
                </Link>
              </div>
            </CardContent>
          </div>
        </div>

        <div className="relative grid flex-1 w-full px-4 py-12 overflow-hidden bg-gray-900 lg:max-w-3xl lg:px-20 xl:px-24 sm:px-6 place-items-center">
          <div className="absolute inset-0">
            <img
              className="object-cover object-top w-full h-full scale-150 -rotate-90 opacity-10 "
              src="https://cdn.rareblocks.xyz/collection/clarity/images/sign-up/4/background-pattern.png"
              alt=""
            />
          </div>

          <div className="relative max-w-md mx-auto">
            {/* <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-800 rounded-xl">
              <svg
                className="w-auto h-5 text-white"
                viewBox="0 0 33 23"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M32.0011 4.7203L30.9745 0C23.5828 0.33861 18.459 3.41404 18.459 12.4583V22.8687H31.3725V9.78438H26.4818C26.4819 6.88236 28.3027 5.17551 32.0011 4.7203Z" />
                <path d="M13.5421 4.7203L12.5155 0C5.12386 0.33861 0 3.41413 0 12.4584V22.8687H12.914V9.78438H8.02029C8.02029 6.88236 9.84111 5.17551 13.5421 4.7203Z" />
              </svg>
            </div> */}

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

export default LoginPage;
