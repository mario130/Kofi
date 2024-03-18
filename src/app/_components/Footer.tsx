import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className='flex justify-between items-center mt-8 py-3 mx-auto px-2 sm:px-6 lg:px-8 bg-gray-300/80'>
      <Image src='/kofi-logo.webp' alt='Kofi logo' width={125} height={44} />

      <p className="text-t-gray hidden sm:block">
        &copy; {new Date().getFullYear()} Kofi. Made by <Link href="https://marioyonan.com" className='text-black underline'>Mario</Link> .
      </p>

      {/* social media */}
      <div className="space-x-3 flex items-center mr-3">
        <Link href="https://www.linkedin.com/in/mario130/" target="_blank">
          <Image src="/linkedin.svg" alt="Instagram" width={24} height={24} />
        </Link>
        <Link href="https://www.marioyonan.com" target="_blank">
          <Image src="/m.svg" alt="Instagram" width={22} height={22} />
        </Link>
      </div>
    </footer>
  )
}
