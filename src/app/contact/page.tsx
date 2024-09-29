import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div><figure className="bg-blue-500 rounded-xl p-8 dark:bg-slate-800">
    <Image className="w-24 h-24 rounded-full mx-auto" src="/contact1.jpg" alt="" width="384" height="512"/>
    <div className="pt-6 space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          Hy my number 03282346728 and my email Name:MrAhadMehar890@gmail.com and other details etc.
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          Phone Number
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          +92 3282346728
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page
