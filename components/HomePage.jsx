import React from "react";
import heroImage from "../public/assets/heroImage.png";
import { MdExpandMore } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <div id="home" className="h-screen w-full text-center bg-gray-900">
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-4 flex flex-col justify-around items-center">
        <div className="w-64 h-64 mx-auto overflow-hidden rounded-xl">
          <Image src={heroImage} alt="me" />
        </div>

        <h1 className="uppercase font-bold text-white text-6xl">
          Full Stack Developer
        </h1>

        <p className="text-gray-300 text-xl max-w-sm mx-auto">
          I have 1 year of experience building and desgining software.
          Currently, I love to work on web application using technologies like
          React, Tailwind, Next JS and MongoDB.
        </p>

        <Link href="/#me">
          <div className="group flex items-center justify-center my-8 bg-blue-600 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
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
