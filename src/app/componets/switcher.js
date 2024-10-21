"use client"
import React,{useEffect , useState} from 'react'
import Link from 'next/link';
import { animateScroll as scroll } from 'react-scroll';

import {HiOutlineMoon,HiOutlineSun,HiArrowSmUp} from 'react-icons/hi'

export default function Switcher() {
    const [scrollToTops, setScrollToTops] = useState(false); 
    useEffect(()=>{
        function scrollHandler() {
            setScrollToTops(window.scrollY >= 500)
          }
      if (typeof window !== "undefined") {
        window.addEventListener('scroll', scrollHandler);
        }
        window.scrollTo(0, 0)

        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    },[])
      
      const scrollToTop = () => {
          scroll.scrollToTop({
              duration: 500,
              smooth: true,
          });
      }

    function changeMode(mode, event) {
        switch (mode) {
            case 'mode':
                if (document.documentElement.className.includes("dark")) {
                    document.documentElement.className = 'light'
                } else {
                    document.documentElement.className = 'dark'
                }
                break;
            case 'layout':
                if (event.target?.innerText === "LTR") {
                    document.documentElement.dir = "ltr"
                }
                else {
                    document.documentElement.dir = "rtl"
                }
                break;
            default:
                break;
        }
    }
    return (
        <>
        


            <Link href="#" onClick={scrollToTop}
                id="back-to-top" className={`${!scrollToTops ? "hidden":"back-to-top fixed  text-lg rounded-full z-10 bottom-5 end-2 size-9 text-center bg-indigo-600 text-white leading-9 flex items-center justify-center"}`}><HiArrowSmUp /></Link>
         
        </>
    )
};
