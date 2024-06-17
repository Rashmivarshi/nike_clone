import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section
    id="about-us"
    className="flex justify-between items-center max-lg:flex-col
    gap-10 w-full max-container"
    >
      <div className="flex flex-col">
      <h2 className="mt-4 font-palanquin capitalize text-4xl font-bold lg:max-w-lg">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">Discover Our</span>
          <br/>
           <span className="inline-block mt-3 text-coral-red">Qaulity</span> shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
        Experience the fusion of comfort and style with our latest collection, where every step is a 
        statement of quality and design 
        </p>
        <div className="mt-11"><Button label="shop now"/>
        </div>     
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img 
        src={shoe8}
        alt="shoe8"
        width={570}
        height={522}
        />
      </div>
    </section>
  )
}

export default SuperQuality