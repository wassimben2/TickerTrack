import React from 'react'
import Link from "next/link";
import Image from "next/image";
import Navitems from './Navitems';
import Dropdown from './Dropdown';
const Header = () => {
  return (
  <header className="sticky top-0 z-50 w-full h-[70px] bg-gray-800">
    <div className="container flex justify-between items-center px-6 py-4 text-gray-500">
      <Link href="/">
      <Image src="/assets/icons/logo.svg" alt="Tracker" width={140} height={32} className="h-8 w-auto cursor-pointer" />
      </Link>
<nav className="hidden sm:block">
  <Navitems/>
</nav>
<div className="  ">
<Dropdown/>
</div>
    </div>
    </header>
  )
}

export default Header
