
'use client'
import { useEffect, useState } from "react"
import Logo from "./Logo"
import Mobilenavigation from "./Mobilenavigation"
import Nav from "./Nav"
import ThemeToggler from "./ThemeToggler"
import { usePathname } from "next/navigation"

const Header = () => {
    const  [header, setHeader] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
       
        const scrollYPos = window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setHeader(true) : setHeader(false);
        });

        return() => window.removeEventListener('scroll' , scrollYPos)
    });
  return (
    <header
    className={`${
        header
         ? 'py-4  bg-[#F8EDED] shadow-lg  dark:bg-[#191e38]'
         : 'py-6 dark:bg-transparent'
    } sticky top-0 z-30 transition-all `}
    >
        <div className="container mx-auto">
            <div className="flex items-center justify-between">
                <Logo/>
                <div className="flex items-center gap-x-6">
                    <Nav
                     containerStyles='hidden xl:flex gap-x-8 items-center'
                     linkStyles='relative hover:text-primary transition-all '
                     underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'/>
                <ThemeToggler/>
                <div className="xl:hidden">
                    <Mobilenavigation/>
                </div>
                </div>

            </div>  
        </div>
     
    </header>
  )
}

export default Header

// [#1F2544]
// dark:bg-[#2a325c]