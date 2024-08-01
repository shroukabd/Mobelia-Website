
"use client"

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useRef } from 'react'
import {TbArrowUpRight} from "react-icons/tb"
import { motion, useTransform, useScroll } from 'framer-motion'
import { desVariants, tagVariants, titleVariants } from '@/utils/animation'
const page = () => {
  const ref = useRef(null);

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  })
  const scale = useTransform(scrollYProgress, [0,1], [.6, 1])
  return (
    <div>
      <div className="bg-[url('/image/whoweare.jpg')] bg-center bg-cover h-[85vh]">
        <motion.h1     initial="offscreen"
        whileInView={"onscreen"}
        variants={titleVariants}
        className='container  py-40 text-6xl font-semibold text-black teacking-widest text-center'>
          Who are we?
        </motion.h1>
      </div>
      <div className='container'>
        <motion.div 
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
        className='pt-4'>
          <h2 className='text-3xl font-semibold text-center lg:p-10 lg:text-5xl'>
             We have idea & Interior Design
          </h2>
          <p className='text-2xl text-gray-400 text-center font-medium pb-10 mt-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit nobis odit, itaque corrupti sint eveniet accusantium possimus rerum. Veniam voluptatibus eaque dolore labore, aperiam molestias
             aliquid minus tenetur ratione vitae?
          </p>
        </motion.div>

         <div className='items-center lg:flex gap-x-8'>
          <motion.div
          style={{scale}}
          ref={ref}
           className='w-full '>
            <Image src="/image/gallery1123.jpg" width={700} height={700}/>
          </motion.div>

          <div>
            <motion.p
                initial="offscreen"
                whileInView={"onscreen"}
                variants={tagVariants}
             className='pb-8 tracking-wide mt-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur quo dolore cumque, aliquid beatae similique tenetur eius dolor error officia eveniet voluptates deleniti ipsa praesentium omnis suscipit 
              ipsum alias labore.<br/>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur quo dolore cumque, aliquid beatae similique tenetur eius dolor error officia eveniet voluptates deleniti ipsa praesentium omnis suscipit 
              ipsum alias labore. <br/>
              
              <span className='text-xl font-extrabold tracking-tight'>sit amet consectetur, adipisicing elit. Aspernatur quo dolore cumque, aliquid beatae similique tenetur eius dolor error
                 officia</span>
                 </motion.p>
                 <Button className='inline-flex items-center px-8 py-3 shadow-lg hover:bg-gray-500
                 hover;ring-gray-950 ring-offset-2'
                 >Read More <TbArrowUpRight className='w-5 h-5 ml-2'/>  </Button>
          </div>
         </div>

         <div className='lg:py-20'>
          <div className='pt-8 pb-4'>
            <motion.h1
                initial="offscreen"
                whileInView={"onscreen"}
                variants={titleVariants}
             className='text-4xl font-bold tracking-wider text-center uppercase'>
              Team</motion.h1>
          </div>

          <div className='grid py-8 gap-20 lg:grid-cols-3'>
            <motion.div
                initial="offscreen"
                whileInView={"onscreen"}
                variants={titleVariants}
             className='border-2 border-primary'>
              <div className='p-4 text-center bg-gray-100 aspect-square dark:bg-[#19203e] 
              -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3'>
                <Image src="/image/profile2.jpg" width={200} height={200} alt=''
                className=' mx-auto rounded-full'/>
                <h2 className='py-4 text-2xl font-semibold uppercase'>Building Surveys</h2>
                <p className='text-sm'>Lorem ipsum dolor elit. Laudantium est quasi nam dolores
                  </p>
              </div>
            </motion.div>
         

         
            <motion.div 
                initial="offscreen"
                whileInView={"onscreen"}
                variants={desVariants}
            className='border-2 border-primary'>
              <div className='p-4 text-center bg-gray-100 aspect-square dark:bg-[#19203e] 
              -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3'>
                <Image src="/image/profile1.jpg" width={200} height={200} alt=''
                className=' mx-auto rounded-full'/>
                <h2 className='py-4 text-2xl font-semibold uppercase'>Building Surveys</h2>
                <p className='text-sm'>Lorem ipsum dolor elit. Laudantium est quasi nam dolores
                   </p>
              </div>
            </motion.div>
         

         
            <motion.div
                initial="offscreen"
                whileInView={"onscreen"}
                variants={tagVariants}
             className='border-2 border-primary'>
              <div className='p-4 text-center bg-gray-100 aspect-square dark:bg-[#19203e] 
              -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3'>
                <Image src="/image/profile3.jpg" width={200} height={200} alt=''
                className=' mx-auto rounded-full'/>
                <h2 className='py-4 text-2xl font-semibold uppercase'>Building Surveys</h2>
                <p className='text-sm'>Lorem ipsum dolor elit. Laudantium est quasi nam dolores
                  </p>
              </div>
            </motion.div>
            </div>
          </div>
         </div>
      </div>
    
  )
}

export default page
 