import {offer} from "../assets/images"
import Button from "../components/Button"
import { arrowRight } from "../assets/icons"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap
    items-center max-xl:flex-col-reverse max-xl:gap-10">
      <div className="flex-1">
        <img src={offer}
        alt="offer"
        width={773}
        height={687}
        className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
      <h2 className="mt-4 font-palanquin capitalize text-4xl font-bold lg:max-w-lg">
           <span className="inline-block mt-3 text-coral-red">Special</span> offers
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
        Experience the fusion of comfort and style with our latest collection, where every step is a 
        statement of quality and design 
        </p>
        <p className="mt-4 lg:max-w-lg info-text">Meet the latest collection of retro running inspired shoes.The unlikely heroes of your easiest styling hack.</p>
        <div className='mt-11 flex flex-wrap gap-4'>
        <Button label="shop now" 
        icon={arrowRight} />
          <Button
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
            />
        </div>     
      </div>
    </section>
  )
}

export default SpecialOffer