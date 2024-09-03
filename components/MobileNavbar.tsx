"use client";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Link from "next/link"; // Import Next.js Link
import { useSelector, useDispatch } from "react-redux";
import { toggleUpdate } from "@/statemanage/controllers/updatestate";
import Image from "next/image";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleState = useSelector((state: any) => state.toggle);
  const dispatch = useDispatch();

  // Function to toggle the mobile navbar
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden">
      {/* Sliding mobile navbar */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#293914] text-white z-40 transform transition-transform duration-300 ease-in-out cursor-pointer ${
          toggleState === true ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="p-5 flex items-center justify-between">
          <Image src="/logo.svg" alt="The Groves" width={240} height={90} />
          <button
            className="text-yellow-600"
            onClick={() => dispatch(toggleUpdate(false))}
          >
            <FaTimes className="text-4xl" />
          </button>
        </div>

        {/* Navigation links */}
        <nav className="flex flex-col mt-10">
          <Link href="/" passHref className="border-t p-6">
            <span className="text-md space-x-4 tracking-widest cursor-pointer hover:text-gray-300 transition">
              DINE WITH US
            </span>
          </Link>
          <Link href="/visitplan" passHref className="border-t p-6">
            <span className="text-md space-x-4 tracking-widest cursor-pointer hover:text-gray-300 transition">
              PLAN YOUR VISIT
            </span>
          </Link>
          <Link href="/events" passHref className="border-t p-6">
            <span className="text-md space-x-4 tracking-widest cursor-pointer hover:text-gray-300 transition">
              EVENTS
            </span>
          </Link>
          <Link href="/viewgrovesmap" passHref className="border-t p-6">
            <span className="text-md space-x-4 tracking-widest cursor-pointer hover:text-gray-300 transition">
              VIEW GROVES MAP
            </span>
          </Link>
          <Link href="/ourstory" passHref className="border-t p-6">
            <span className="text-md space-x-4 tracking-widest cursor-pointer hover:text-gray-300 transition">
              OUR STORY
            </span>
          </Link>
          <Link href="/contact" passHref className="border-t p-6">
            <span className="text-md space-x-4 tracking-widest cursor-pointer hover:text-gray-300 transition">
              CONTACT US
            </span>
          </Link>
          <Link href="/login" passHref className="border-t p-6">
            <div className="sm:flex sm:gap-4 mb-6 md:mb-0">
              <button className="text-gray-100 px-12 py-3.5 border">
                English
              </button>
            </div>
            <div>
              <button className="rounded-2xl bg-gradient-to-t from-[#cfb37b] to-[#B28C4E] px-12 py-3.5 text-md text-gray-100 hover:from-[#c8a55f] hover:to-[#a37935]">
                Log in
              </button>
            </div>
          </Link>
        </nav>
      </div>

      {/* Background overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={toggleNavbar}
        />
      )}
    </div>
  );
};

export default MobileNavbar;
