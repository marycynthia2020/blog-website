import React from 'react'
import Logo from '../atoms/Logo'

const Footer = () => {
  return (
    <footer className='w-full bg-gray-100 mt-8 lg:mt-12 '>
        <div className=" cursor-pointer px-4  max-w-[1440px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5  text-[#767676] items-center mt-16">
            <div>
                <Logo />
                <ul className=" mr-4 mt-4">
                <li className="mb-4">
                    Condimentum adipiscing vel neque dis nam parturient orci at
                    scelerisque neque dis nam parturient.
                </li>
                <li className="flex gap-3 items-center mb-4">
                    <img src="/direction-svgrepo-com.svg" alt="" className="w-4" />
                    <span>451 Wall Street, UK, London</span>
                </li>
                <li className="flex gap-3 items-center mb-4">
                    <img src="/smart-phone-svgrepo-com.svg" alt="" className="w-4" />
                    <span>Phone: (064) 332-1233</span>
                </li>
                <li className="flex gap-3 items-center mb-8">
                    <img src="/message-square-lines-alt-svgrepo-com.svg" alt="" className="w-4" />
                    <span>
                    Fax: (099) 453-1357</span>
                </li>
                
                </ul>
            </div>
            <ul>
                <li className="text-black font-medium mb-4">Our Stores</li>
                <li className=" mb-4">New York</li>
                <li className=" mb-4">London SF</li>
                <li className=" mb-4">Cockfosters BP</li>
                <li className=" mb-4">Los Angeles</li>
                <li className=" mb-4">Chicago</li>
                <li className=" mb-8">Las Vegas</li>
            </ul>

            <ul>
                <li className="text-black font-medium mb-4">Useful Links</li>
                <li className=" mb-4">Privacy Policy</li>
                <li className=" mb-4">About Us</li>
                <li className=" mb-4">Promotions</li>
                <li className=" mb-4">Servicess</li>
                <li className=" mb-4">About Us</li>
                <li className=" mb-8">Contact Us</li>
            </ul>

            
            <ul>
                <li className="text-black font-medium mb-4">Footer menu</li>
                <li className=" mb-4">LinkedIn profile</li>
                <li className=" mb-4">Learn More</li>
                <li className=" mb-4">Other Services</li>
                <li className=" mb-4">Contact Us</li>
                <li className=" mb-4">Latest News</li>
                <li className=" mb-8">Twitter</li>
            </ul>
            <div>
                <p className="mb-4 font-medium text-black">Available On:</p>
                <img src="/googleplay1.svg" alt="google playstore" className="mb-4" />
                <img src="/applestore1.svg" alt="Apple store"  className="mb-4"/>
                <p className="mb-4 font-medium text-black">Social Links:</p>
                <div className="flex  items-center gap-3 text-4xl">
                    <img src="/facebook-svgrepo-com (1).svg" alt="" className="w-9" />
                    <img src="/twitter-2-svgrepo-com.svg" alt="" className="w-9" />
                    <img src="/instagram-svgrepo-com.svg" alt="" className="w-9" />
                   <img src="/youtube-svgrepo-com.svg" alt="" className="w-9" />
                </div>
            </div>
        </div>
         {/* second footer */}
        <div className="max-w-[1440px] mx-auto text-[#767676] flex  ">
            <hr />
            <div className="px-2 w-full 2xl:w-[80vw] mx-auto py-4 flex  items-center justify-between gap-4">
                <p className="m-auto text-sm lg:text-[16px] "> CODED BY <a href='https://www.linkedin.com/in/chinemeremugbaja?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank' className="font-bold text-blue-400">CHINEMEREM UGABJA</a>.</p>
            </div>
            
        </div>
     </footer>
  )
}

export default Footer