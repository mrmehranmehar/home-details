import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div><figure className="bg-gray-400 rounded-xl p-8 dark:bg-slate-800">
    <Image className="w-24 h-24 rounded-full mx-auto" src="/home1.jpg" alt="" width="384" height="512"/>
    <div className="pt-6 space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          “House no.56,Saeed Tone,Rahim yar Khan,Zip code 64200,Punjab.”
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          Address.
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          Saeed Tone.
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page
