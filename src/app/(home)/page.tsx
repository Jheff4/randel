import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import Image from 'next/image'

const Home = () => {
  return (
    <MaxWidthWrapper className="mb-12 mt-[7.1rem] w-full ">
      <main className="">
        <section className="mx-auto flex w-full mb-[4rem]">
          <Image
            src="/bg-texture.svg"
            alt="background"
            width={100}
            height={100}
            className="max-md:hidden w-full -ml-3"
          />
          
          <Image
            src="/bg-mob.svg"
            alt="background"
            width={100}
            height={100}
            className="md:hidden w-full"
          />
        </section>
        
        <section className="mx-auto w-full">
          <Image
            src="/bg-texture.svg"
            alt="background"
            width={100}
            height={100}
            className="max-md:hidden w-full -ml-3"
          />

          <Image
            src="/bg-mob.svg"
            alt="background"
            width={100}
            height={100}
            className="md:hidden w-full"
          />
        </section>
        
      </main>
    </MaxWidthWrapper>
  )
}

export default Home