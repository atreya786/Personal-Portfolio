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
import nike from "../../public/assets/portfolio/nike.png";
import book from "../../public/assets/portfolio/book.png";
import promptVue from "../../public/assets/portfolio/promptVue.png";
import weather from "../../public/assets/portfolio/weatherapp.png";
import reactTube from "../../public/assets/portfolio/tube.png";
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
      title: "Nike",
      imageSrc: nike,
      url: "nike",
    },
    {
      id: 4,
      title: "PromptVue",
      imageSrc: promptVue,
      url: "promptvue",
    },
    {
      id: 5,
      title: "ReactTube",
      imageSrc: reactTube,
      url: "reacttube",
    },
    {
      id: 6,
      title: "Demo Portfolio",
      imageSrc: demo,
      url: "demo-portfolio",
    },
    {
      id: 7,
      title: "Dice Roll App",
      imageSrc: dice,
      url: "dice-roll-app",
    },
    {
      id: 8,
      title: "ERP System",
      imageSrc: erp,
      url: "erp-system",
    },
    {
      id: 9,
      title: "Keeper App",
      imageSrc: note,
      url: "keeper-app",
    },
    {
      id: 10,
      title: "Newsletter Website",
      imageSrc: news,
      url: "newsletter-website",
    },
    {
      id: 11,
      title: "Orchestra Website",
      imageSrc: orchestra,
      url: "orchestra-website",
    },
    {
      id: 12,
      title: "Stopwatch App",
      imageSrc: stopwatch,
      url: "stopwatch-app",
    },
    {
      id: 13,
      title: "Tindog Website",
      imageSrc: tindog,
      url: "tindog-website",
    },
    {
      id: 14,
      title: "Weather App",
      imageSrc: weather,
      url: "weather-app",
    },
    {
      id: 15,
      title: "Bubble Game",
      imageSrc: bubble,
      url: "bubble-game",
    },
    {
      id: 16,
      title: "Calculator App",
      imageSrc: calculator,
      url: "calculator-app",
    },
    {
      id: 17,
      title: "Book Hub",
      imageSrc: book,
      url: "book-hub",
    },
  ];

  return {
    props: { portfolios },
  };
};

const PortfoliosRoute = ({ portfolios }) => {
  return (
    <div id="portfolio" className="w-full bg-gradient-to-br from-red-500 via-orange-600 to-amber-500 text-white">
      <div className="max-w-screen-xl mx-auto pt-24 p-4 text-center md:text-left ">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-white font-bold pb-16">
          portfolio
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {portfolios.map(({ id, title, imageSrc, url }) => (
            <Link key={id} href={`/portfolio/${url}`}>
              <div className="cursor-pointer group shadow-md shadow-white overflow-hidden rounded-md">
                <Image
                  src={imageSrc}
                  alt={title}
                  className="rounded-md duration-200 
              hover:scale-110"
                  loading="lazy"
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
