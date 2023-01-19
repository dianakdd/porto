import { useState } from "react";
import { content } from "../Content";
import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import deved from "../../../public/dev-ed-wave.png";

const Hero = () => {
  const { hero } = content;
  const [darkMode, setDarkMode] = useState(false);

  return (
    <section className="min-h-screen">
          <nav className="pt-10 mb-0 flex justify-between dark:text-white">
            <h1 className="font-poppins text-xl">Diana Kusuma</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-[#c9b6d7] text- to-[#775194] text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-4" >
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Dimitri Marco
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Developer and designer.
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Freelancer providing services for programming and design content
              needs. Join me down below and let's get cracking!
            </p>
            {/* <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillYoutube />
            </div> */}
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-50 h-50 relative overflow-hidden mt-5 md:h-96 md:w-96">
              <img src={deved} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
  );
};

export default Hero;
