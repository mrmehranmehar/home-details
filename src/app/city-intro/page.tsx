import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div><figure className="bg-green-400 rounded-xl p-8 dark:bg-slate-800">
    <Image className="w-24 h-24 rounded-full mx-auto" src="/about1.jpg" alt="" width="384" height="512"/>
    <div className="pt-6 space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
        Rahim Yar Khan region was part of Multan province of Mughal Empire.[4] In 1881, Nawab of Bahawalpur gave the city its current name by naming it after his first born son and crown prince Rahim Yar Khan.
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          Address
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          Rahim yar khan.punjab
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page
