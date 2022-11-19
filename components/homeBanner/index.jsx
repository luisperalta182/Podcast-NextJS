import React from 'react'
import Link from 'next/link'
import Spotify from '../../public/spotify.png'
import GooglePodcasts from '../../public/googlePodcasts.png'
import ApplePodcasts from '../../public/applePodcasts.png'

const HomeBanner = ({ trending, header }) => (
    <div
      role="banner"
      className="min-h-[600px] lg:h-[710px]">
      {trending.map((single) => (
          <div
            key={single.podcastId}
            className="grid grid-cols-1 lg:grid-cols-2">
            <div className="px-[8px] py-[40px] md:pt-[95px]">
              <div className="flex flex-row items-center">
                <span className="bg-primary w-[25px] h-[1px] inline-block mr-[5px]" />
                <p className="font-poppins text-[14px] text-secondary leading-[21px]">
                  Trending Episode
                </p>
              </div>
              <h1 className="font-poppins text-[52px] leading-[60px] text-textColor md:py-[20px]">
                {single.title}
              </h1>
              <div
                className="font-poppins text-[16px] leading-[24px] text-softText pb-[40px]"
                dangerouslySetInnerHTML={{ __html: single.excerpt }}
              />
              <div className="flex flex-row items-center">
                <p className="font-poppins text-[14px] text-secondary leading-[21px]">
                  Listen On Also
                </p>
                <span className="bg-primary w-[25px] h-[1px] inline-block ml-[5px]" />
              </div>
              <div className="flex flex-col-reverse lg:flex-row pt-[23px] lg:justify-between">
                <Link
                  aria-label="Spotify Link"
                  href={single.podcastAcf.listenOn.spotify}
                  className="flex items-center my-[10px] relative w-[130px] h-[50px] lg:my-[0px]">
                  <img
                    src={Spotify.src}
                    alt="Spotify Logo"
                  />
                </Link>
                <Link
                  aria-label="Google Podcast Link"
                  href={single.podcastAcf.listenOn.googlePodcasts}
                  className="flex items-center my-[10px] relative w-[208px] h-[50px] lg:my-[0px]">
                  <img
                    src={GooglePodcasts.src}
                    alt="Google Podcasts Logo"
                  />
                </Link>
                <Link
                  aria-label="Apple Podcast Link"
                  href={single.podcastAcf.listenOn.applePodcasts}
                  className="flex items-center my-[10px] relative w-[208px] h-[50px] lg:my-[0px]">
                  <img
                    src={ApplePodcasts.src}
                    alt="Apple Podcasts Logo"
                  />
                </Link>
              </div>
            </div>
            <div className="relative hidden w-full h-full md:inline lg:mt-[0px]">
              <img
                alt={header.homebanneImage.altText}
                src={header.homebanneImage.sourceUrl}
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
          </div>
        ))}
    </div>
  )

export default HomeBanner
