"use client";
import Image from "next/image";
import { PiInstagramLogoFill } from "react-icons/pi";
import { SiTiktok, SiSnapchat } from "react-icons/si";
import { RiTwitterXLine } from "react-icons/ri";
import MobileNavbar from "./MobileNavbar";
import { useSelector, useDispatch } from "react-redux";
import { toggleUpdate } from "@/statemanage/controllers/updatestate";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Link from "next/link";
import { navData } from "@/lib/data";

const Navbar = () => {
  const toggleState = useSelector((state: any) => state.toggle);
  const dispatch = useDispatch();
  return (
    <header className="bg-[#000000a2] absolute w-full top-0 left-0 h-auto z-50">
      <div className="relative mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-auto items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12 my-4">
            <Image
              src="/logo.svg"
              alt="Groves Logo"
              width={220}
              height={100}
              className=""
            />
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <div className="hidden lg:flex items-center justify-between w-48">
              <div className="text-gray-400 transition hover:text-gray-500/75 cursor-pointer text-2xl">
                <SiTiktok />
              </div>
              <div className="text-gray-400 transition hover:text-gray-500/75 cursor-pointer text-3xl">
                <PiInstagramLogoFill />
              </div>
              <div className="text-gray-400 transition hover:text-gray-500/75 text-3xl">
                <RiTwitterXLine />
              </div>
              <div className="text-gray-400 transition hover:text-gray-500/75 cursor-pointer text-2xl">
                <SiSnapchat />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden lg:flex">
                <button className="rounded-2xl bg-gradient-to-t from-[#cfb37b] to-[#B28C4E] px-12 py-3.5 text-md text-gray-100 hover:from-[#c8a55f] hover:to-[#a37935]">
                  Log in
                </button>

                <div className="sm:flex sm:gap-4">
                  <button className="text-gray-100 px-12 py-3.5 flex items-center justify-center">
                    <MdOutlineKeyboardArrowDown /> &nbsp; 🇬🇧 English
                  </button>
                </div>
              </div>

              <div
                className="block lg:hidden cursor-pointer"
                onClick={() => dispatch(toggleUpdate(!toggleState))}
              >
                <span className="text-2xl rounded p-2 text-gray-200 transition hover:text-gray-600/75">
                  &#9776;
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mx-auto hidden md:block md:max-w-screen-2xl border-t border-b">
        <nav className="lg:flex items-center justify-center xl:gap-9 lg:gap-6 px-4 sm:px-6 xl:px-8 lg:px-6 hidden">
          {navData.map((navigation) => (
            <Link
              key={navigation.id}
              href={navigation.navigationUrl}
              className="xl:p-6 lg:p-3 hover:text-yellow-500 transition lg:text-sm"
            >
              {navigation.navigationName}
            </Link>
          ))}
        </nav>
      </div>
      <MobileNavbar />
    </header>
  );
};

export default Navbar;
