"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { HiMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import { useState } from 'react';

const Navbar = () => {
  const [navbar, setNavbar] = useState(true);

  return (
    <nav className='flex-center bg-blackPearl fixed top-0 z-20 w-full py-6 text-white'>
      <div className={`${!navbar ? "flex justify-between max-md:flex-between max-md:flex-wrap mx-auto w-full max-w-screen-2xl lg:px-20 xs:px-8 sm:px-10 max-xs:px-3" : "flex-between mx-auto w-full transition-all max-w-screen-2xl lg:px-20 xs:px-8 sm:px-10 max-xs:px-3"}`}>
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="logo"
            width={120}
            height={35}
            className="max-md:hidden"
          />
          <Image
            src="/Union.svg"
            alt="logo"
            width={55}
            height={55}
            className="block md:hidden order-1"
          />
        </Link>

        {navbar ? (<ul className='flex-center gap-x-3 md:gap-x-6 -mr-12 max-md:hidden'>
          <li className='!font-bold flex justify-center items-center px-4 py-[1.1rem] rounded-2xl bg-secondary'>
            <Link
              href=""
              target=""
            >
              <Image
                src="/docs.svg"
                alt="docs"
                width={20}
                height={20}
                className=""
              />
            </Link>
          </li>
          <li className='!font-bold flex justify-center items-center px-4 py-[0.9rem] rounded-2xl bg-secondary'>
            <Link
              href=""
              target=""
            >
              <Image
                src="/discord.svg"
                alt="discord"
                width={20}
                height={20}
                className=""
              />
            </Link>
          </li>
          <li className='!font-bold flex px-4 py-[0.95rem] rounded-2xl bg-secondary'>
            <Link
              href=""
              target=""
            >
              <Image
                src="/X.svg"
                alt="twitter"
                width={18}
                height={18}
                className=""
              />
            </Link>
          </li>
          <li className='!font-bold flex p-4 rounded-2xl bg-secondary'>
            <Link
              href=""
              target=""
            >
              <Image
                src="/telegram.svg"
                alt="telegram"
                width={18}
                height={18}
                className=""
              />
            </Link>
          </li>
        </ul>)
          :
        (<ul className='flex-center gap-x-10 max-md:order-3 max-md:h-screen max-md:flex-col max-md:gap-10 max-md:w-full max-md:justify-start max-md:pt-[5rem] max-md:flex-start relative'>
          <li className='!font-bold flex justify-center items-center px-5 py-[1.35rem] rounded-2xl bg-secondary md:hidden'>
            <Link
              href=""
              target=""
            >
              <Image
                src="/docs.svg"
                alt="docs"
                width={25}
                height={25}
                className=""
              />
            </Link>
          </li>
          <li className='!font-bold flex justify-center items-center px-5 py-[1.1rem] rounded-2xl bg-secondary md:hidden'>
            <Link
              href=""
              target=""
            >
              <Image
                src="/discord.svg"
                alt="discord"
                width={25}
                height={25}
                className=""
              />
            </Link>
          </li>
          <li className='!font-bold flex px-5 py-[1.15rem] rounded-2xl bg-secondary md:hidden'>
            <Link
              href=""
              target=""
            >
              <Image
                src="/X.svg"
                alt="twitter"
                width={23}
                height={23}
                className=""
              />
            </Link>
          </li>
          <li className='!font-bold flex px-5 py-[1.2rem] rounded-2xl bg-secondary md:hidden'>
            <Link
              href=""
              target=""
            >
              <Image
                src="/telegram.svg"
                alt="telegram"
                width={23}
                height={23}
                className=""
              />
            </Link>
          </li>
        </ul>)
        }

        <div className='flex flex-row gap-[16px]'>  
          <Button 
            className={`${!navbar ? "p-button max-md:hidden" : "btn-gradient"}`}>
              Join Community
          </Button>

          {navbar ? (<HiMenu 
            className="block md:hidden bg-ebonyClay p-1 font-semibold rounded-[8px] text-[40px] cursor-pointer"
            onClick={() => setNavbar(!navbar)}
          /> ) : ( <HiX className="block md:hidden bg-ebonyClay p-1 font-semibold rounded-[8px] transition-all text-[40px] order-2 cursor-pointer"
            onClick={() => setNavbar(!navbar)}
          />) }
        </div>
      </div>
    </nav>
  )
}

export default Navbar