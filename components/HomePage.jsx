import React from "react";
import heroImage from "../public/assets/heroImage.png";
import { MdExpandMore } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <div
      id="home"
      className="h-screen w-full text-center bg-gradient-to-br from-indigo-500 via-purple-700 to-pink-500"
    >
      <div className="max-w-screen-xl mx-auto w-full h-full pt-12 sm:pt-24 p-4 flex flex-col justify-around items-center">
        <div className="w-64 h-64 sm:w-96 sm:h-96 mx-auto overflow-hidden rounded-xl">
          <Image
            src={heroImage}
            alt="me"
            layout="responsive"
            width={400}
            height={400}
          />
        </div>

        <h1 className="uppercase font-bold text-white text-4xl sm:text-6xl">
          Full Stack Developer
        </h1>

        <p className="text-gray-300 text-lg sm:text-xl max-w-sm sm:max-w-lg mx-auto">
          I have 1 year of experience building and designing software.
          Currently, I love to work on web applications using technologies like
          React, Tailwind, Next.js, and MongoDB.
        </p>

        <Link href="/#me">
          <div className="group flex items-center justify-center my-8 bg-blue-700 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
            know more
            <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
              <MdExpandMore size={25} />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
