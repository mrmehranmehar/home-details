import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div><figure className="bg-red-600 rounded-xl p-8 dark:bg-slate-800">
    <Image className="w-24 h-24 rounded-full mx-auto" src="/ahad234.jpg" alt="" width="384" height="512"/>
    <div className="pt-6 space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          “Hy i am Mehran Nice Colloge First year Student.I am online Work Facbook markting usa.Usa House Dealer Craglist and Amazon Fba Seller.”
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-dark-500 dark:text-sky-400">
          Mr Mehran
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          aplx acdmay.
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page
