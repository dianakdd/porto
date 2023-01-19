import react from "react";
import Image from "next/image";
import { content } from "../Content";
import me from "../../../public/diana.png";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";


const About = () => {

  const { bios } = content;

  return (
    <section className="overflow-hidden min-h-screen"  id="about">
      <p class="mt-10 text-base  font-semibold text-center tracking-wider text-[#936EAF]">
        WHO AM I?
      </p>
      <p class="mb-12 text-3xl font-bold text-center text-gray-800 dark:text-white">
        About Me
      </p>
      <div class="container mx-auto flex px-5 py-18 md:flex-row columns-2 sm:flex-col items-center">
        <div class="lg:max-w-2/4 lg:w-full md:w-w-2/4 w-5/6 mb-10 md:mb-0 ">
          <Image class="object-cover object-center rounded-lg shadow-lg" alt="hero" src={me} />
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col mx-24  md:items-start md:text-left place-items-start text-center">

          <div className="flex flex-row">
            <h1 class="title-font sm:text-4xl text-3xl text-left place-items-start mb-4 font-poppins font-semibold text-[#936EAF]">
              Diana
            </h1>
            <h1 class="title-font sm:text-4xl text-3xl text-left place-items-start mb-4 ml-2 font-poppins font-medium text-gray-900 dark:text-white">
              Kusuma
            </h1>
          </div>
          
          
          <p class="mb-8 leading-relaxed text-left place-items-start dark:text-white">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
          <div className="flex-row m-2">
            <div class="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
            
            </div>
          </div>
          <div class="flex justify-center">
            <button class="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">Button</button>
            <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
          </div>
        </div>
      </div>
      {/* <div className="container px-5 py-24 mx-auto items-center">
        <div class="grid grid-rows-3 grid-flow-col gap-4  justify-center items-center m-auto">
          <div class="row-span-3">
            <Image alt="ecommerce" className="max-w-sm object-cover object-center rounded" src={me} />
          </div>
          <div class="col-span-2 mx-10">
            <p className="leading-relaxed font-poppins">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
            
          </div>
          <div class="row-span-2 col-span-2 mx-10">
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0" >
              <h2 className="text-sm title-font font-poppins text-gray-500 tracking-widest">BRAND NAME</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">The Catcher in the Rye</h1>
              <div className="flex mb-4">
                
                <span className="flex ml-3 pl-3 py-2  border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              
              
            </div>
          </div>
        </div>
        
      </div> */}
    </section>
 
  )
}

export default About