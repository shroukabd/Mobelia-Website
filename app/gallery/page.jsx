import React from 'react'

const page = () => {
  return (
    <div className='container py-10 grid grid-cols-2 md:grid-cols-4 gap-4'>
      <div className='flex flex-col gap-4'>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 trans transition-all'
           src="/image/badroom.jpg" alt="" />
        </div>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 trans transition-all'
           src="/image/gallery2.jpg" alt="" />
        </div>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 trans transition-all'
           src="/image/gallery.jpg" alt="" />
        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 trans transition-all'
           src="/image/swiper1.jpg" alt="" />
        </div>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 trans transition-all'
           src="/image/gallery11.jpg" alt="" />
        </div>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 trans transition-all'
           src="/image/living.jpg" alt="" />
        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 trans transition-all'
           src="/image/gallery14.jpg" alt="" />
        </div>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 trans transition-all'
           src="/image/gallery15.jpg" alt="" />
        </div>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 trans transition-all'
           src="/image/gallery12.jpg" alt="" />
        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 trans transition-all'
           src="/image/gallery7.jpg" alt="" />
        </div>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 trans transition-all'
           src="/image/gallery11.jpg" alt="" />
        </div>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 trans transition-all'
           src="/image/gallery3.jpg" alt="" />
        </div>
      </div>
      
    </div>
  )
}

export default page
