import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NavMenu = ({ menu, header }) => {
  const [open, setOpen] = useState(true)
  const router = useRouter()

  return (
    <div>
      <nav className="border-gray-200 px-2 sm:px-4 py-2.5 md:pt-[31px]">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link
            href="/"
            aria-label="Home Link"
            className="flex items-center my-[10px] relative w-[136px] h-[58px] md:w-[180px] md:h-[77px] md:my-[0px]">
            <img
              role="img"
              src={header.mainLogo.sourceUrl}
              alt="Nicasource Logo"
              className="w-[100%] h-[100%] object-cover"
            />
          </Link>

          <div className="flex lg:order-2">
            <Link
              aria-label="Subscribe"
              href={header.subscribeButton.subscribeLink}
              type="button"
              className="text-center hidden lg:inline font-poppins text-white text-[14px] border border-1 border-primary rounded-[3px] px-[15px] py-[9.5px] focus:outline-none bg-primary hover:bg-white hover:text-primary min-w-[125px] min-h-[45px]">
              {header.subscribeButton.subscribeText}
            </Link>
            <Link
              aria-label="Sing-In"
              href={header.signIn.signInUrl}
              type="button"
              className="text-center hidden lg:inline font-poppins text-primary text-[14px] border border-1 border-primary rounded-[3px] px-[25px] py-[9.5px] focus:outline-none hover:bg-primary hover:text-white min-w-[125px] min-h-[45px] ml-[31.5px]">
              {header.signIn.signInText}
            </Link>
            <button
              onClick={() => setOpen(!open)}
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 text-sm text-primary lg:hidden focus:outline-none"
              aria-controls="navbar-cta"
              aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg
                role="img"
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {!open && (
            <div
              role="navigation"
              aria-labelledby="Mobile Navigation"
              className="items-center md:mt-[10px] lg:hidden justify-between w-full lg:flex lg:w-auto lg:order-1 bg-secondary lg:bg-transparent pb-[20px] lg:pb-[0px]"
              id="navbar-cta">
              <ul className="mobileMenu flex flex-col p-4 mt-4 lg:flex-row lg:mt-[0px] lg:text-sm lg:font-medium lg:border-0">
                {menu.menuItems.edges.map((single, i) => (
                    <li key={i}>
                      <Link
                        href={single.node.path}
                        className={`block py-2 text-left lg:text-center text-white font-poppins text-[14px] ml-[8px] lg:mx-[15.5px]  ${
                          router.asPath === `${single.node.path}`
                            ? 'active'
                            : ''
                        }`}
                        aria-current="page"
                        aria-label={single.node.label}>
                        {single.node.label}
                      </Link>
                    </li>
                  ))}
              </ul>
              <Link
                aria-label="Subscribe"
                href={header.subscribeButton.subscribeLink}
                type="button"
                className="lg:hidden ml-[20px] font-poppins text-white text-[14px] border border-1 border-primary rounded-[3px] px-[15px] py-[9.5px] focus:outline-none bg-primary hover:bg-white hover:text-primary min-w-[100px] mx-[3px]">
                {header.subscribeButton.subscribeText}
              </Link>
              <Link
                aria-label="Subscribe"
                href={header.signIn.signInUrl}
                type="button"
                className="lg:hidden font-poppins text-primary text-[14px] border border-1 border-primary rounded-[3px] px-[25px] py-[9.5px] focus:outline-none hover:bg-primary hover:text-white min-w-[100px] mx-[3px]">
                {header.signIn.signInText}
              </Link>
            </div>
          )}

          <div
            role="navigation"
            aria-labelledby="Desktop Navigation"
            className="items-center hidden lg:inline justify-between w-full lg:flex lg:w-auto md:order-1 bg-secondary lg:bg-transparent pb-[20px] lg:pb-[0px]"
            id="navbar-cta">
            <ul className="mainMenu flex flex-col p-4 mt-4 md:flex-row md:mt-[0px] md:text-sm md:font-medium md:border-0">
              {menu.menuItems.edges.map((single, i) => (
                  <li key={i}>
                    <Link
                      href={single.node.path}
                      className={`block py-2 text-left md:text-center text-textColor font-poppins text-[14px] ml-[8px] md:mx-[15.5px] hover:text-primary ${
                        router.asPath === single.node.path ? 'active' : ''
                      }`}
                      aria-current="page"
                      aria-label={single.node.label}>
                      {single.node.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavMenu
