import React from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'
import { Button } from '../ui/button';

const Cta = () => {
  return (
    <MaxWidthWrapper className='flex flex-col items-center w-full fixed max-h-screen h-fit inset-0 align-bottom mt-[15rem] gap-7 mb-7 max-md:px-12'>

      <div className='max-w-[50rem] text-white text-[4rem] max-md:text-[2.5rem] font-semibold leading-[112%] -mb-2 text-center'>
      Rediscover Defi on <br/>Flare with Randel
      </div>

      <span className='max-w-[40rem] text-white text-center text-[1.1rem] max-md:text-base font-normal leading-[1.5rem] tracking-[-0.467px] max-md:w-full max-md:max-w-[28rem]'>
      Experience DeFi like never before with Randel Finance. <br className='max-md:hidden'/> Revolutionizing the world of decentralized finance, we&apos;re your <br className='max-md:hidden'/> gateway to a new era of possibilities. Explore the future of finance <br className='max-md:hidden'/> through our innovative Flare native protocol
      </span>

      <div className='flex gap-4 max-md:flex-col max-md:w-[30rem] max-sm:w-full justify-center'>
        <Button className='btn-gradient'>Launching soon</Button>
        <Button className='btn-norm'>View Docs</Button>
      </div>


    </MaxWidthWrapper>
  )
}

export default Cta;