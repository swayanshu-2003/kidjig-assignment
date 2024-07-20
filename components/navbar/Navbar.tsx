import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`z-50 bg-[#00000033] h-20 flex backdrop-blur-md text-white px-6 sm:px-16 md:px-24 lg:px-40 xl:px-72 transition duration-300 ease-in-out sticky top-0 left-0 ${isScrolled ? 'backdrop-blur-md' : ''}`}>
            <ul className="w-full flex items-center justify-between">
                <li className="w-fit hover:-rotate-12 transition-all duration-200">
                    <Link href="/">
                        <Image src="/assets/logo.png" alt="K" width="60" height="60" className="w-16 md:w-20 " />
                    </Link>
                </li>
                <li className="hidden md:inline">
                    <div className="flex items-center gap-3 font-outfit text-sm ">
                        <Link className='hover:scale-110 py-0 px-2 hover:text-white text-gray-300 hover:bg-indigo-500 rounded-full transition-all duration-150' href="#">About</Link>
                        <Link className='hover:scale-110 py-0 px-2 hover:text-white text-gray-300 hover:bg-indigo-500 rounded-full transition-all duration-150' href="#">Services</Link>
                        <Link className='hover:scale-110 py-0 px-2 hover:text-white text-gray-300 hover:bg-indigo-500 rounded-full transition-all duration-150' href="#">Process</Link>
                        <Link className='hover:scale-110 py-0 px-2 hover:text-white text-gray-300 hover:bg-indigo-500 rounded-full transition-all duration-150' href="#">Work</Link>
                        <Link className='hover:scale-110 py-0 px-2 hover:text-white text-gray-300 hover:bg-indigo-500 rounded-full transition-all duration-150' href="#">Pricing</Link>
                        <Link className='hover:scale-110 py-0 px-2 hover:text-white text-gray-300 hover:bg-indigo-500 rounded-full transition-all duration-150' href="#">FAQs</Link>
                    </div>
                </li>
                <li className="w-fit">
                    <button className="rounded-xl hover:bg-[#6881FF] transition-colors duration-200 px-5 py-1 md:py-3 border-2 border-[#6881FF] text-sm ml-36 md:ml-0 mt-[2px] md:mt-0)">Book a call</button>
                </li>
                <li className="md:hidden inline">
                    <div className="flex items-center gap-6 font-outfit text-sm ">
                        <Sheet>
                            <SheetTrigger asChild>
                                <button type="submit" className='text-2xl'><FaBars />
                                </button>
                            </SheetTrigger>
                            <SheetContent>
                                <div className="flex flex-col items-start gap-6 font-outfit text-lg">
                                    <Link href="#">About</Link>
                                    <Link href="#">Services</Link>
                                    <Link href="#">Process</Link>
                                    <Link href="#">Work</Link>
                                    <Link href="#">Pricing</Link>
                                    <Link href="#">FAQs</Link>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
