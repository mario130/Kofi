import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className='flex justify-between items-center mt-8 py-3 mx-auto px-2 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-300/60 to-slate-300'>
      <Image src='/kofi-logo.webp' alt='Kofi logo' width={125} height={44} className='' />

      <p className="text-t-gray hidden sm:block">
        &copy; {new Date().getFullYear()} Kofi. Made by <Link href="https://marioyonan.com" className='text-black underline'>Mario</Link> .
      </p>

      <div className="space-x-6 flex items-center mr-3">
        <Link href="https://www.linkedin.com/in/mario130/" target="_blank">
          <Image src="/linkedin.svg" alt="Instagram" width={24} height={24} />
        </Link>
        <Link href="https://www.marioyonan.com" target="_blank">
          <Image src="/m.svg" alt="Instagram" width={24} height={24} />
        </Link>
      </div>
    </footer>
  )
}
