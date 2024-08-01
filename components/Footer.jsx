'use client'

import Link from "next/link";
import { motion } from "framer-motion";
import { desVariants, tagVariants, titleVariants } from "@/utils/animation";

export default function Footer() {
  return (
    <div className="bg-[#F8EDED] dark:bg-[#191e38]">
      <div className="container lg:grid lg:grid-cols-2 py-14">
        <div className="grid gap-4 pb-4 text-left lg:pb-0 lg:grid-cols-3">
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
          >
            <h2 className="pb-4 text-xl font-semibold uppercase text-orange-600">
              Company</h2>
              <div className="flex flex-col">
                <Link href='/' className="py-1 hover:underline">About Us</Link>
                <Link href='/' className="py-1 hover:underline">Press</Link>
                <Link href='/' className="py-1 hover:underline">Careers</Link>
                <Link href='/' className="py-1 hover:underline">Contact</Link>

              </div>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
          >
            <h2 className="pb-4 text-xl font-semibold uppercase text-orange-600">
              Development</h2>
              <div className="flex flex-col">
                <Link href='/' className="py-1 hover:underline">Decumentaion</Link>
                <Link href='/' className="py-1 hover:underline">Refrence</Link>
                <Link href='/' className="py-1 hover:underline">Changelog</Link>
                <Link href='/' className="py-1 hover:underline">Status</Link>

              </div>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
          >
            <h2 className="pb-4 text-xl font-semibold uppercase text-orange-600">
              Conect</h2>
              <div className="flex flex-col">
                <Link href='/' className="py-1 hover:underline">Instgram</Link>
                <Link href='/' className="py-1 hover:underline">Facebook</Link>
                <Link href='/' className="py-1 hover:underline">Linkedin</Link>
                <Link href='/' className="py-1 hover:underline">Twitter</Link>

              </div>
          </motion.div>
          
        </div>
        <div>
          <p className="pb-4 text-xl font-semibold text-orange-600">Stay Updated
             </p>
             <div className="relative lg:max-w-sm">
              <input type="name" id="first name" placeholder="Email Adreess" 
              className="flex h-[55px] w-full rounded-full border border-input dark:bg-[#1F2544] bg-background px-3  text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"/>
              <button className="absolute bg-black text-white rounded-full h-12 px-3 text-sm
                top-1 right-0 hover:border-2 hover:border-black w-35  hover:bg-white hover:text-black">
                Subscribe
              </button>
             </div>
             <p className="pt-4 text-gra">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores similique quae incidunt, autem et eveniet sit fuga vero eaque, id adipisci quis, repudiandae odio sint 
              asperiores porro quasi amet magni!</p>
        </div>
      </div>
      <hr color="white"/>
      <div>
        <p className="text-center mt-6 pb-8 font-semibold">&copy; 2024 Interior. All Rights Reserved</p>
      </div>
    </div>
  )
}
