import React from 'react'
import Link from 'next/link'
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaSkype } from 'react-icons/fa'
import Spotify from '../../public/spotify.png'
import GooglePodcasts from '../../public/googlePodcasts.png'
import ApplePodcasts from '../../public/applePodcasts.png'

const Footer = ({ footer, podcasts, menu }) => (
    <footer
      className="container mx-auto"
      role="content-info">
      <div className="flex flex-col pb-[40px] pt-[50px] lg:flex-row lg:place-content-between lg:px-[10px] lg:mt-[50px]">
        <div className="py-[20px]">
          <div className="relative w-[180px] h-[77px] m-auto lg:ml-[0px]">
            <img
              className="w-[100%] h-[100%] object-cover"
              alt={footer.footerLogo.altText}
              src={footer.footerLogo.sourceUrl} />
          </div>
          <p className="text-center font-poppins text-[14px] leading-[24px] text-[#999999] my-[15px] max-w-[320px] m-auto lg:text-left">
            {footer.siteDescription}
          </p>
          <div className="flex justify-center lg:justify-start">
            <Link
              target="_blank"
              href={footer.socialMediaLinks.facebook}
              className="mx-[13px] lg:ml-[0px] lg:mr-[27px] bg-secondary text-white w-[45px] h-[45px] text-[17px] rounded-full flex justify-center content-center items-center">
              <FaFacebookF />
            </Link>
            <Link
              target="_blank"
              href={footer.socialMediaLinks.instagram}
              className="mx-[13px] lg:ml-[0px] lg:mr-[27px] bg-secondary text-white w-[45px] h-[45px] text-[17px] rounded-full flex justify-center content-center items-center">
              <FaLinkedinIn />
            </Link>
            <Link
              target="_blank"
              href={footer.socialMediaLinks.linkedin}
              className="mx-[13px] lg:ml-[0px] lg:mr-[27px] bg-secondary text-white w-[45px] h-[45px] text-[17px] rounded-full flex justify-center content-center items-center">
              <FaInstagram />
            </Link>
            <Link
              target="_blank"
              href={footer.socialMediaLinks.skype}
              className="mx-[13px] lg:ml-[0px] lg:mr-[27px] bg-secondary text-white w-[45px] h-[45px] text-[17px] rounded-full flex justify-center content-center items-center">
              <FaSkype />
            </Link>
          </div>
        </div>

        <div className="py-[20px]">
          <p className="font-poppins text-center lg:text-left text-textColor text-[16px] leading-[24px] pb-[20px]">
            Pages
          </p>
          <nav aria-label="footer navigation">
            <ul className="flex flex-col items-center lg:items-start">
              {menu.menuItems.edges.map((single, i) => (
                  <li
                    key={i}
                    className="pb-[10px]">
                    <Link
                      href={single.node.path}
                      className="font-poppins text-[#999999] text-[14px] leading-[28px]">
                      {single.node.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
        </div>

        <div className="py-[20px]">
          <p className="font-poppins text-center lg:text-left text-textColor text-[16px] leading-[24px] pb-[20px]">
            Recent Episodes
          </p>
          <nav>
            <ul className="flex flex-col items-center lg:items-start">
              {podcasts.slice(0, 5).map((single, i) => (
                  <li
                    key={i}
                    className="pb-[10px]">
                    <Link
                      href={`/podcasts/${single.slug}`}
                      className="font-poppins text-[#999999] text-[14px] leading-[28px]">
                      {single.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col-reverse items-center lg:items-start py-[20px]">
          <p className="order-1 font-poppins text-textColor text-[16px] leading-[24px] pb-[20px]">
            Listen My Podcasts Also In
          </p>
          <Link
            href="/"
            className="flex items-center my-[10px] relative w-[130px] h-[50px] lg:mb-[15px] lg:mt-[0px]">
            <img
              className="w-[100%] h-[100%]"
              src={Spotify.src}
              alt="Spotify Logo"
            />
          </Link>
          <Link
            href="/"
            className="flex items-center my-[10px] relative w-[208px] h-[50px] lg:mb-[15px] lg:mt-[0px]">
            <img
              className="w-[100%] h-[100%]"
              src={GooglePodcasts.src}
              alt="Google Podcasts Logo"
            />
          </Link>
          <Link
            href="/"
            className="flex items-center my-[10px] relative w-[208px] h-[50px] lg:mb-[15px] lg:mt-[0px]">
            <img
              className="w-[100%] h-[100%]"
              src={ApplePodcasts.src}
              alt="Apple Podcasts Logo"
            />
          </Link>
        </div>
      </div>

      <div className="border-t-[1px] border-t-[#e5e5e5]  flex justify-center content-center items-center pt-[50px] pb-[44px]">
        <h3 className="font-poppins text-[#999999] text-[14px] leading-[28px] ">
          {footer.copyrightText}
        </h3>
      </div>
    </footer>
  )

export default Footer
