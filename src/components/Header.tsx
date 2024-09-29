import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div className='flex p-4 gap-6 bg-slate-600'>
        <Link href="/">Home</Link>
        <Link href="/about">about</Link>
        <Link href="/city-intro">city-intro</Link>
        <Link href="/contact">contact</Link>
    </div>
  )
}
export default Header