import React from "react";

import urban from "../../public/assets/portfolio/urban.png";
import blog from "../../public/assets/portfolio/blog-post .png";
import calculator from "../../public/assets/portfolio/calculator.png";
import demo from "../../public/assets/portfolio/demo-portfolio.png";
import dice from "../../public/assets/portfolio/dice-roll.png";
import erp from "../../public/assets/portfolio/erp.png";
import note from "../../public/assets/portfolio/keeper-app.png";
import news from "../../public/assets/portfolio/newsletter.png";
import orchestra from "../../public/assets/portfolio/orchestra.png";
import stopwatch from "../../public/assets/portfolio/stopwatch.png";
import tindog from "../../public/assets/portfolio/tindog.png";
import weather from "../../public/assets/portfolio/weatherapp.png";
import bubble from "../../public/assets/portfolio/bubble-game.png";

import Link from "next/link";
import Image from "next/image";

export const getStaticProps = async () => {
  const portfolios = [
    {
      id: 1,
      title: "Urban Interiors",
      imageSrc: urban,
      url: "urban-interiors",
    },
    {
      id: 2,
      title: "Blog Post",
      imageSrc: blog,
      url: "blog-post",
    },
    {
      id: 3,
      title: "Calculator App",
      imageSrc: calculator,
      url: "calculator-app",
    },
    {
      id: 4,
      title: "Demo Portfolio",
      imageSrc: demo,
      url: "demo-portfolio",
    },
    {
      id: 5,
      title: "Dice Roll App",
      imageSrc: dice,
      url: "dice-roll-app",
    },
    {
      id: 6,
      title: "ERP System",
      imageSrc: erp,
      url: "erp-system",
    },
    {
      id: 7,
      title: "Keeper App",
      imageSrc: note,
      url: "keeper-app",
    },
    {
      id: 8,
      title: "Newsletter Website",
      imageSrc: news,
      url: "newsletter-website",
    },
    {
      id: 9,
      title: "Orchestra Website",
      imageSrc: orchestra,
      url: "orchestra-website",
    },
    {
      id: 10,
      title: "Stopwatch App",
      imageSrc: stopwatch,
      url: "stopwatch-app",
    },
    {
      id: 11,
      title: "Tindog Website",
      imageSrc: tindog,
      url: "tindog-website",
    },
    {
      id: 12,
      title: "Weather App",
      imageSrc: weather,
      url: "weather-app",
    },
    {
      id: 13,
      title: "Bubble Game",
      imageSrc: bubble,
      url: "bubble-game",
    },
  ];

  return {
    props: { portfolios },
  };
};

const PortfoliosRoute = ({ portfolios }) => {
  return (
    <div id="portfolio" className="w-full bg-gray-900 text-white">
      <div className="max-w-screen-xl mx-auto pt-24 p-4 text-center md:text-left ">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold pb-16">
          portfolio
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {portfolios.map(({ id, title, imageSrc, url }) => (
            <Link key={id} href={`/portfolio/${url}`}>
              <div className="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md">
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
      </div>
    </div>
  );
};

export default PortfoliosRoute;
