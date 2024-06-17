import Button from "../components/Button"
import { arrowRight } from "../assets/icons"
import { shoes, statistics } from "../constants"
import { bigShoe1 } from "../assets/images"
import ShoeCard from "../components/ShoeCard"
import { useState } from "react";

const Hero = () => {
const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)

  return (
    <section
    id="home"
    className="w-full flex xl:flex-row flex-col justify-center min-h-screen
    gap-10 max-container">
      <div className="realtive flex flex-col xl:w-2/5 justify-center items-start
      w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red pb-5">Lifestyle Running Shoes</p>
        <h1 className="mt-4 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[70px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">EXTRA ORDINARY</span>
          <br/>
           <span className="inline-block mt-3 text-coral-red">Nike</span> shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg
        leading-8 mt-6 mb-14 sm:max-w-sm">
        Through our collections we blur the 
        borders between high fashion and high performance. 
        </p>
        <Button label="shop now" 
        icon={arrowRight} />
        <div className="flex justify-start items-start flex-wrap
        w-full mt-20 gap-14">
          {statistics.map((item)=>(
            <div key={item.label}>
              <p className="font-palanquin text-4xl font-bold">{item.value}</p>
              <p className="leading-7 font-palanquin text-slate-gray">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen
      max-xl:py-40 bg-primary bg-hero bg-center">
          <img
          src={bigShoeImg} 
          alt="bigshoe"
          width={610}
          height={500}
          className="object-contain relative z-10 "/>
        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={shoe}
                changebigShoe={
                  (shoe1) => setBigShoeImg(shoe1)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
          </div>
      </div>
    </section>
  )

}

export default Hero