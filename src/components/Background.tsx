import Image from "next/image"
import bg from '../../public/bg.jpg'
const Background = () => {
  return (
    <div className="relative  before:content-[''] before:bg-slate-400 before:absolute before:inset-0 before:opacity-60 before:-z-10 h-screen">
        <Image src={bg} alt="background" className="h-full blur-[px] w-full absolute inset-0 -z-20 object-cover"/>

        <div className="relative z-0 max-w-xl mx-auto text-center flex flex-col gap-5 h-full justify-center items-center">
            <h2 className="text-5xl text-[#2bdcffee] font-bold">Try To Add Background</h2>
            <p className="text-base text-teal-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aliquid voluptatem sint ab ullam veritatis dolorem! Tempora commodi</p>
        </div>
    </div>
  )
}
export default Background