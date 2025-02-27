import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"


const Footer = () => {
  return (
   <footer className="max-container">
    <div className="flex justify-between items-start gap-20 flex-wrap
    max-lg:flex-col">
      <div className="flex flex-col items-start ">
        <a href="/">
          <img
          src={footerLogo}
          alt="footerLogo"
          width={150}
          height={46}
          />
        </a>
        <p className="mt-6 text-base leading-7 font-montserrat text-white-400
        sm:max-w-sm">At Nike, we believe in the power of sport to move the world forward. Our innovative designs, cutting-edge technology, and commitment to performance ensure that every step you take in our shoes is a step towards your goals</p>
        <div className="flex items-center gap-5 mt-8">
          {socialMedia.map((item)=>(
            <div key={item.alt} className="flex justify-center items-center w-12 h-12 rounded-full bg-white">
              <img
              src={item.src}
              alt={item.alt}
              width={24}
              height={24}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap ">
          {footerLinks.map((section)=>(
            <div key={section.title}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">{section.title}</h4>
              <ul>
                {section.links.map((link)=>(
                  <li key={link.name} className="mt-3 text-white-400 font-montserrat
                  text-base leading-normal hover:text-slate-gray cursor-pointer"><a>{link.name}</a></li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </div>
    <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
            <img
            src={copyrightSign}
            alt="copyright"
            width={20}
            height={20}
            />
            <p>
              Copyright. All rights reserved.
            </p>
      </div>
    <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
    </div>
   </footer>
  )
}

export default Footer