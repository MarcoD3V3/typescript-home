/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-misused-promises */
"use client";
import React from "react";
import styles from "./Contact.module.scss";
import { useForm, type SubmitHandler } from "react-hook-form";
// import { FileUploader } from "./Z-components/FileUploader";
import { Footer, NavBar } from "@/components";
// import { ContactForm, ContactInfo } from "./Z-components";
import Link from "next/link";
import Image from "next/image";

type Inputs = {
  allCamp: string;
  allCampRequired: string;
};

export default function ContactPage() {
  const inputCss =
    "w-full bg-transparent text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };
  console.log(watch("allCamp"));

  return (
    <>
      <NavBar />
      <div className={styles.contact}>
        <div className="flex justify-center items-center w-screen h-900 ">
          <div className="container mx-auto my-4 px-4 lg:px-20">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl"
            >
              <div className="flex">
                <h1 className="font-bold uppercase text-5xl">
                  Send us a <br /> message
                </h1>
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <input
                  {...register("allCampRequired", { required: true })}
                  className={inputCss}
                  type="text"
                  placeholder="First Name*"
                />
                <input
                  {...register("allCampRequired", { required: true })}
                  className={inputCss}
                  type="text"
                  placeholder="Last Name*"
                />
                <input
                  className={inputCss}
                  type="email"
                  placeholder="Email*"
                  {...register("allCampRequired", { required: true })}
                />
                <input
                  {...register("allCampRequired", { required: true })}
                  className={inputCss}
                  type="number"
                  placeholder="Phone*"
                />
              </div>
              <div className="my-4">
                <textarea
                  {...register("allCampRequired", { required: true })}
                  placeholder="Message*"
                  className="h-30 resize-none w-full h-32 bg-transparent text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                ></textarea>
              </div>
              {errors.allCampRequired && <span>This field is required</span>}
              <div className="my-2 w-1/2 lg:w-1/4">
                <button
                  type="submit"
                  className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                >
                  Send Message
                </button>
              </div>
            </form>

            <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-blue-900 rounded-2xl">
              <div className="flex flex-col text-white">
                <h1 className="font-bold uppercase text-4xl my-4">
                  Drop in our office
                </h1>
                <p className="text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam tincidunt arcu diam, eu feugiat felis fermentum id.
                  Curabitur vitae nibh viverra, auctor turpis sed, scelerisque
                  ex.
                </p>

                <div className="flex my-4 w-2/3 lg:w-1/2">
                  <div className="flex flex-col">
                    <i className="fas fa-map-marker-alt pt-2 pr-2" />
                  </div>
                  <div className="flex flex-col">
                    <h2 className="text-2xl">Main Office</h2>
                    <p className="text-gray-400">
                      5555 Tailwind RD, Pleasant Grove, UT 73533
                    </p>
                  </div>
                </div>
                <div className="flex my-4 w-2/3 lg:w-1/2">
                  <div className="flex flex-col">
                    <i className="fas fa-phone-alt pt-2 pr-2" />
                  </div>
                  <div className="flex flex-col">
                    <h2 className="text-2xl">Call Us</h2>
                    <p className="text-gray-400">Tel: xxx-xxx-xxx</p>
                    <p className="text-gray-400">Fax: xxx-xxx-xxx</p>
                  </div>
                </div>
                <div className="flex my-4 w-2/3 lg:w-1/2">
                  <a
                    href="https://www.facebook.com/ENLIGHTENEERING/"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1"
                  >
                    <i className="fab fa-facebook-f text-blue-900" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/enlighteneering-inc-"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1"
                  >
                    <i className="fab fa-linkedin-in text-blue-900" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
          <div>
            <Link
              title="Buy me a pizza"
              href="https://www.buymeacoffee.com/Dekartmc"
              target="_blank"
              className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
            >
              <Image
                width={100}
                height={100}
                className="object-cover object-center w-full h-full rounded-full"
                src="/logo.png"
                alt="veroblend"
              />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
