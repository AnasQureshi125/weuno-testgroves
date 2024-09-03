import Image from "next/image";
import {
  FaTiktok,
  FaInstagram,
  FaTwitter,
  FaSnapchat,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="border-t text-white py-10">
      <div className="container mx-auto px-6 md:px-24 lg:px-32">
        {/* Upper section with call to action */}
        <div className="md:hidden flex items-center mb-4 md:mb-0">
          <Image src="/logo.svg" alt="The Groves" width={240} height={90} />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl md:text-5xl font-serif tracking-wide text-left space-x-3 pr-9 md:pr-0">
            Join us for an unforgettable experience
          </h2>
          {/* App download buttons */}
          <div className="md:w-96 w-full mt-9 md:mt-0">
            <h3 className="uppercase text-xs mb-3 tracking-widest md:tracking-normal">
              Download the Groves app
            </h3>
            <div className="flex space-x-4 mt-6 md:mt-0">
              {/* Apple App Store Button */}
              <button className="flex items-center space-x-2 bg-white text-black py-2 px-4 rounded-lg hover:bg-gray-200 transition ease-in-out duration-300">
                <FaApple className="text-2xl" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">Apple</div>
                </div>
              </button>
              {/* Google Play Store Button */}
              <button className="flex items-center space-x-2 bg-white text-black py-2 px-4 rounded-lg hover:bg-gray-200 transition ease-in-out duration-300">
                <FaGooglePlay className="text-2xl" />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Middle section with information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Location */}
          <div>
            <h3 className="mb-4 text-sm tracking-widest">LOCATION</h3>
            <p>
              Al-Hizam Park <br />
              Al-Semairi, Yanbu Al Bahr 46455 <br />
              Riyadh, Saudi Arabia
            </p>
          </div>
          {/* Working Hours */}
          <div>
            <h3 className="mb-4 text-sm tracking-widest">WORKING HOURS</h3>
            <p>
              Sun until Thurs: 4:00PM <br />
              Fri & Sat: 2:30PM <br />
              <br />
              Gates Close at: <br />
              Sat until Wed: 12:00AM <br />
              Thu & Fri: 12:30AM
            </p>
          </div>
          {/* Guest Service Call */}
          <div>
            <h3 className="mb-4 text-sm tracking-widest">GUEST SERVICE CALL</h3>
            <p>
              cc@thegroves-sa.com <br />
              920001672 <br />
              +9665556631309
            </p>
          </div>
        </div>

        {/* Logo and social icons */}
        <div className="flex flex-col md:flex-row justify-between md:items-center items-start pt-8">
          <div className="md:flex hidden items-center mb-4 md:mb-0">
            <Image src="/logo.svg" alt="The Groves" width={240} height={90} />
          </div>
          {/* Social Icons */}
          <div className="flex space-x-4">
            <FaTiktok className="text-white text-2xl cursor-pointer" />
            <FaInstagram className="text-white text-2xl cursor-pointer" />
            <FaTwitter className="text-white text-2xl cursor-pointer" />
            <FaSnapchat className="text-white text-2xl cursor-pointer" />
          </div>
        </div>

        {/* Bottom section with terms and conditions */}
        <div className="flex flex-col md:flex-row justify-between md:items-center items-start mt-8">
          <div className="text-sm text-gray-200 mb-4 md:mb-0 flex flex-col md:flex-row md:items-center items-start justify-around gap-9">
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>{" "}
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <div className="text-sm text-gray-20">
              &copy; 2023 The Groves for Entertainment
            </div>
          </div>
          {/* Payment methods */}
          <div className="flex space-x-2 mt-4 md:mt-0">
            <Image src="/visa.svg" alt="Visa" width={40} height={25} />
            <Image
              src="/mastercard.png"
              alt="MasterCard"
              width={40}
              height={25}
            />
            <SiAmericanexpress className="text-3xl my-auto" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
