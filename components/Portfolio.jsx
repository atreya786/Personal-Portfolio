import React from "react";

import { MdExpandMore } from "react-icons/md";

import urban from "../public/assets/portfolio/urban.png";
import erp from "../public/assets/portfolio/erp.png";
import note from "../public/assets/portfolio/keeper-app.png";
import blog from "../public/assets/portfolio/blog-post .png";
import calculator from "../public/assets/portfolio/calculator.png";
import demo from "../public/assets/portfolio/demo-portfolio.png";
import dice from "../public/assets/portfolio/dice-roll.png";
import news from "../public/assets/portfolio/newsletter.png";
import orchestra from "../public/assets/portfolio/orchestra.png";
import stopwatch from "../public/assets/portfolio/stopwatch.png";
import tindog from "../public/assets/portfolio/tindog.png";
import weather from "../public/assets/portfolio/weatherapp.png";
import bubble from "../public/assets/portfolio/bubble-game.png";

import Link from "next/link";
import Image from "next/image";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "Urban Interiors",
      imageSrc: urban,
      url: "Urban Interiors",
    },
    {
      id: 2,
      title: "ERP System",
      imageSrc: erp,
      url: "ERP System",
    },
    {
      id: 3,
      title: "Pens and Pixels",
      imageSrc: blog,
      url: "Pens and Pixels",
    },
    {
      id: 4,
      title: "Note Keeper",
      imageSrc: note,
      url: "Note Keeper",
    },
  ];

  return (
    <div id="portfolio" className="w-full bg-gray-900 text-white">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold">
          portfolio
        </h2>
        <p className="py-4 max-w-lg">
          While only that hauntedtell many purple no lent cushions more heart.
          Soul cushions the still if i, hath lamplight mortals the rapping have
          me and.
        </p>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {portfolios.map(({ id, title, imageSrc, url }) => (
            <Link key={id} href={`/portfolio/${url}`}>
              <div className="cursor-pointer group shadow-md shadow-blue-400 overflow-hidden rounded-md">
                <Image
                  src={imageSrc}
                  alt={title}
                  className="rounded-md duration-200 
                  hover:scale-110"
                />
                <h2 className="text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4">
                  {title}
                </h2>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-center">
          <Link href="/portfolio">
            <div className="group flex items-center justify-center my-8 bg-blue-600 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              all projects
              <span className="-rotate-90 duration-100 ease-in group-hover:translate-x-5">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;