"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navigation = [
    {
        label: "Hjem",
        href: "/",
    },
    {
        label: "Frukt Undersøkelse",
        href: "/questions",
    }
    ]

 
export default function Navbar() {
    const pathname = usePathname()

    const checkActivePath = (path: string) => {
    return path === pathname
    }


    return (
      <div className="flex flex-col items-center border-black border-solid mb-3">
        <nav className="">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${checkActivePath(item.href) ? "underline" : ""}text-gray-700 hover:text-blue-500 transition duration-300 ease-in-out m-3 focus:outline-none focus:underline m-`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      )
}
