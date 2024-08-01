
"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { desVariants, tagVariants, titleVariants } from '@/utils/animation'
const AboutComponent = () => {
  return (
    <div className='container py-12 xl:py-24 h-[auto]'>
      <div className='grid lg:grid-cols-2 place-items-center'>
        <motion.div
             initial="offscreen"
             whileInView={"onscreen"}
             variants={titleVariants}
        >
          <Image
          src='/image/aboutfront.png'
          width={900}
          height={500}
          alt='About'
          className='max-md:hidden'
          />
        </motion.div>
        <div className='items-center'>
           <motion.h2
                initial="offscreen"
                whileInView={"onscreen"}
                variants={titleVariants}
            className='px-12 py-4 text-3xl font-extrabold leading0tight lg:text-5xl'>
            We are order winning Company</motion.h2>
           <motion.p
                initial="offscreen"
                whileInView={"onscreen"}
                variants={desVariants} 
           className='px-12 tracking-wider uppercase text-gray-400 mt-3'>World Award

           </motion.p>
           <motion.p 
                initial="offscreen"
                whileInView={"onscreen"}
                variants={tagVariants}
           className='px-12 pb-4 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing e
            lit. Animi illum est ipsum similique. Possimus ratione
            , illum est assumenda tenetur recusandae autem
             deserunt, molestiae, quasi non veritatis reprehenderit doloremque vel asperiores.

           </motion.p>
           <motion.p
                initial="offscreen"
                whileInView={"onscreen"}
                variants={tagVariants}
            className='px-12 pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing
             elit. Optio aliquid porro iure voluptatem vitae 
             facere minus quia eum, ab quos ex enim doloremque
              eveniet suscipit molestiae aperiam sequi odio nihil?

           </motion.p>
        </div>
      </div>
    </div>
  )
}

export default AboutComponent
