import Image from 'next/image';
import { Inter } from 'next/font/google';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import pic from '../../public/pngfind.com-anime-png-gif-6822199.png';
import pacimage from '../../public/Pacman-Game-Wall-Mural.jpg';
import bloompic from '../../public/0_X8V9OosecAyGjb97.jpg';
import audiopic from '../../public/maxresdefault.jpg';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900"
      >
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-lg text-transparent bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text font-extrabold">developedbysGHugz</h1>
            <ul className="flex items-center px-2">
              <li><BsFillMoonStarsFill  onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl dark:text-gray-300"/></li>
              <li><a className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8">Resume</a></li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Yabdiel Ocasio</h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-300">College Software Engineer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-lg dark:text-gray-300">
              Hi, my name is<br></br>Yabdiel A. Ocasio Cese<br></br>I am a Programmer
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 pb-10 pt-3 text-gray-600 dark:text-gray-300">
            <AiFillGithub/>
            <AiFillLinkedin/>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full h-80 w-80 overflow-hidden md:h-96 md:w-96">
            <Image src={pic} layout="fill" objectFit="cover" alt={''}/>
          </div>
        </section>
        <section className="min-h-screen">
          <div className="text-center py-10 md:py-20">
            <h2 className="text-2xl md:text-5xl py-2 md:py-4 font-extrabold dark:text-gray-300">Projects</h2>
            <h3 className="dark:text-gray-300">Things I've built so far</h3>
          </div>
          <div className="lg:flex gap-10">
            <div className="max-w-sm rounded-md overflow-hidden shadow-lg mx-auto my-10 max-xl dark:bg-gray-800">
              <Image className="w-full" src={pacimage} alt='Pacman game'/>
              <div className="px-6 py-4">
                <h2 className="text-lg font-medium pt-2 pb-2 dark:text-gray-300">Pacman Game</h2>
                <p className="py-2 dark:text-gray-300">
                  Constructed Pac-man game, given by a template. The goal of the project was to add functionality to the game by implementing varios features like: GPS, powerups, etc.
                </p>
              </div>
              <div className="px-6 pt-1 pb-2">
                <h3 className="pb-2 text-teal-600">Language Used:</h3>
                <p className="text-gray-800 py-2 dark:text-gray-300">C++</p>
              </div>
            </div>
            <div className="max-w-sm rounded-md overflow-hidden shadow-lg mx-auto my-10 dark:bg-gray-800">
              <Image className="w-full" src={bloompic} alt='Bloomfilter'/>
              <div className="px-6 py-4">
                <h2 className="text-lg font-medium pt-2 pb-2 dark:text-gray-300">Audio Visualizer</h2>
                <p className="py-2 dark:text-gray-300">
                Implemented a class which measured the wavelength of the wav files to produce different
                size of the rectangles to simulate the sound.
                </p>
              </div>
              <div className="px-6 pt-1 pb-2">
                <h3 className="pb-2 text-teal-600">Language Used:</h3>
                <p className="text-gray-800 py-2 dark:text-gray-300">C++</p>
              </div>
            </div>
            <div className="max-w-sm rounded-md overflow-hidden shadow-lg mx-auto my-10 dark:bg-gray-800">
              <Image className="w-full" src={audiopic} alt='Audio Visualizer'/>
              <div className="px-6 py-4">
                <h2 className="text-lg font-medium pt-2 pb-2 dark:text-gray-300">Bloom Filter</h2>
                <p className="py-2 dark:text-gray-300">
                  A Bloom Filter is a compact data structure used for quick and approximate membership
                  queries. It hashes elements to a bit array, initially set to 0. By applying multiple hash
                  functions, elements are added to the filter at various positions. When checking for
                  membership, the same hashes are used, and if corresponding bits are set to 1, the element
                  is likely part of the set.
                </p>
              </div>
              <div className="px-6 pt-1 pb-2">
                <h3 className="pb-2 text-teal-600">Language Used:</h3>
                <p className="text-gray-800 py-2 dark:text-gray-300">Python</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
