import { useState } from "react";
import { content } from "../Content";
import { HiMenuAlt2 } from "react-icons/hi";
import { createElement } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import me from "../../../public/me.png"

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const { nav } = content;
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);

  return (
    <div className={darkMode ? "dark" : ""}>
      <section className="min-h-screen" >
          <nav className="pt-10 mb-10 flex justify-between dark:text-white">
            <ul className="flex items-center">
              <li>
                <div 
                  onClick={() => setShowMenu(!showMenu)}
                  style={{ color: "#936EAF" }}
                >
                  <HiMenuAlt2 size={34} />
                </div>
              </li>
              <li>
                <h1 className="ml-4 font-poppins text-xl">Diana Kusuma</h1>
              </li>
            </ul>
            <div className="w-6/12 md:w-fit sm:w-center sm:px-5 sm:left-0 flex items-center justify-center">
              <div
                className={`fixed  z-[999] flex items-center justify-center gap-5 bg-[#c9b6d7]/60 px-6 py-3 sm:w-center backdrop-blur-md rounded-full text-dark_primary duration-300 ${
                  showMenu ? "bottom-10" : "bottom-[-100%]"
                }`}
              >
                {nav.map((item, i) => (
                  <a
                    href={item.link}
                    onClick={() => setActive(i)}
                    className={`text-xl p-2.5 rounded-full sm:cursor-pointer 
                    ${i === active && "bg-black dark:bg-[#c9b6d7] text-white dark:text-black"} `}
                  >
                    {createElement(item.icon)}
                  </a>
                ))}
              </div>
            </div>
          
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-[#c9b6d7] text- to-[#775194] text-white px-4 py-2 border-none rounded-md ml-6"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center ">
            <h2 className="text-5xl py-2 text-[#775194] font-large dark:text-[#c9b6d7] md:text-6xl">
              Diana kusuma
            </h2>
            <h5 className="text-2xl py-2 dark:text-white md:text-3xl">
              Front End  Developer | Mobile Developer
            </h5>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Freelancer providing services for programming and design content
              needs. Join me down below and let's get cracking!
            </p>
            <div className="flex-center max-sm mx-auto bg-gradient-to-b from-[#c9b6d7] rounded-full h-96 w-96  relative overflow-hidden mt-5 md:h-80 md:w-80 sm:h-64 sm:w-64">
                <img src={me} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
      </div>
  );
};

export default Navbar;
