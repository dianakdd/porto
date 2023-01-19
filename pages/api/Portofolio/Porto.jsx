import react from "react";
import Image from "next/image";
import { content } from "../Content";
import me from "../../../public/me.png";
import web1 from "../../../public/web1.png";
import web2 from "../../../public/web2.png";
import web3 from "../../../public/web3.png";
import web4 from "../../../public/web4.png";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";


const Porto = () => {

  return (
    <section className="overflow-hidden  min-h-screen"  id="porto">
        
        
        <div class="p-4 mt-8">
            <p class=" text-base  font-semibold text-center tracking-wider text-[#936EAF]">
                MY WORK
            </p>
            <p class="mb-10 text-3xl font-bold text-center text-gray-800 dark:text-white">
                Awesome Project
            </p>
            <div class="container my-12 mx-auto px-4 md:px-12 items-center">
                <div class="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:-mx-4 justify-center sm:grid-rows-1">
                    <div class="w-fit  mx-5 overflow-hidden shadow-lg rounded-2xl h-90 mb-5">
                        <Image alt="eggs" src={web1} class="rounded-t-lg"  />
                        <div class="relative w-full p-4 bg-white dark:bg-white">
                            <button aria-label="Go to article" type="button" class="absolute w-12 h-12 text-white bg-[#936EAF] rounded-full right-8 -top-6">
                                <FaExternalLinkAlt size={20} className="m-auto" />
                            </button>
                            <p class="mb-2 text-xl font-medium text-gray-800">
                                Templates
                            </p>
                            <p class="text-xs text-gray-600">
                                Improve UI with beautiful templates and components for Tailwind css.
                            </p>
                            <div class="flex flex-wrap items-center mt-6 justify-starts">
                                <div class="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">
                                    #css
                                </div>
                                <div class="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">
                                    #tailwind
                                </div>
                                <div class="text-xs mb-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">
                                    #components
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-fit mx-5 overflow-hidden shadow-lg rounded-2xl h-90 mb-5">
                        <Image alt="eggs" src={web1} class="rounded-t-lg"  />
                        <div class="relative w-full p-4 bg-white dark:bg-white">
                            <button aria-label="Go to article" type="button" class="absolute w-12 h-12 text-white bg-[#936EAF] rounded-full right-8 -top-6">
                                <FaExternalLinkAlt size={20} className="m-auto" />
                            </button>
                            <p class="mb-2 text-xl font-medium text-gray-800">
                                Templates
                            </p>
                            <p class="text-xs text-gray-600">
                                Improve UI with beautiful templates and components for Tailwind css.
                            </p>
                            <div class="flex flex-wrap items-center mt-6 justify-starts">
                                <div class="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">
                                    #css
                                </div>
                                <div class="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">
                                    #tailwind
                                </div>
                                <div class="text-xs mb-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">
                                    #components
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-fit mx-5 overflow-hidden shadow-lg rounded-2xl h-90 mb-5">
                        <Image alt="eggs" src={web1} class="rounded-t-lg"  />
                        <div class="relative w-full p-4 bg-white dark:bg-white">
                            <button aria-label="Go to article" type="button" class="absolute w-12 h-12 text-white bg-[#936EAF] rounded-full right-8 -top-6">
                                <FaExternalLinkAlt size={20} className="m-auto" />
                            </button>
                            <p class="mb-2 text-xl font-medium text-gray-800">
                                Templates
                            </p>
                            <p class="text-xs text-gray-600">
                                Improve UI with beautiful templates and components for Tailwind css.
                            </p>
                            <div class="flex flex-wrap items-center mt-6 justify-starts">
                                <div class="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">
                                    #css
                                </div>
                                <div class="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">
                                    #tailwind
                                </div>
                                <div class="text-xs mb-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">
                                    #components
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div class="grid grid-flow-col auto-cols-max  items-center justify-center md:space-y-0 md:flex-row justify evenly ">
                <div class="w-64 mx-5 overflow-hidden shadow-lg rounded-2xl h-90">
                    <Image alt="eggs" src={web1} class="rounded-t-lg"  />
                    <div class="relative w-full p-4 bg-white dark:bg-white">
                        <button aria-label="Go to article" type="button" class="absolute w-12 h-12 text-white bg-[#936EAF] rounded-full right-8 -top-6">
                            <FaExternalLinkAlt size={20} className="m-auto" />
                        </button>
                        <p class="mb-2 text-xl font-medium text-gray-800">
                            Templates
                        </p>
                        <p class="text-xs text-gray-600">
                            Improve UI with beautiful templates and components for Tailwind css.
                        </p>
                        <div class="flex flex-wrap items-center mt-6 justify-starts">
                            <div class="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">
                                #css
                            </div>
                            <div class="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">
                                #tailwind
                            </div>
                            <div class="text-xs mb-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">
                                #components
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-64 mx-5 overflow-hidden shadow-lg rounded-2xl h-90">
                    <Image alt="eggs" src={web1} class="rounded-t-lg"  />
                    <div class="relative w-full p-4 bg-white dark:bg-white">
                        <button aria-label="Go to article" type="button" class="absolute w-12 h-12 text-white bg-[#936EAF] rounded-full right-8 -top-6">
                            <FaExternalLinkAlt size={20} className="m-auto" />
                        </button>
                        <p class="mb-2 text-xl font-medium text-gray-800">
                            Templates
                        </p>
                        <p class="text-xs text-gray-600">
                            Improve UI with beautiful templates and components for Tailwind css.
                        </p>
                        <div class="flex flex-wrap items-center mt-6 justify-starts">
                            <div class="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">
                                #css
                            </div>
                            <div class="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">
                                #tailwind
                            </div>
                            <div class="text-xs mb-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">
                                #components
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-64 mx-5 overflow-hidden shadow-lg rounded-2xl h-90">
                    <Image alt="eggs" src={web1} class="rounded-t-lg"  />
                    <div class="relative w-full p-4 bg-white dark:bg-white">
                        <button aria-label="Go to article" type="button" class="absolute w-12 h-12 text-white bg-[#936EAF] rounded-full right-8 -top-6">
                            <FaExternalLinkAlt size={20} className="m-auto" />
                        </button>
                        <p class="mb-2 text-xl font-medium text-gray-800">
                            Templates
                        </p>
                        <p class="text-xs text-gray-600">
                            Improve UI with beautiful templates and components for Tailwind css.
                        </p>
                        <div class="flex flex-wrap items-center mt-6 justify-starts">
                            <div class="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">
                                #css
                            </div>
                            <div class="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">
                                #tailwind
                            </div>
                            <div class="text-xs mb-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">
                                #components
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>


    </section>
 
  )
}

export default Porto