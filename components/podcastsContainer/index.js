import React, { useState } from 'react'
import Link from 'next/link'
import PodcastSingle from '../podcastSingle'

const PodcastsContainer = ({ podcasts }) => {
  const postPerLoad = 3
  const [postNum, setPostNum] = useState(postPerLoad)

  function loadMore() {
    setPostNum((prevPostNum) => prevPostNum + postPerLoad)
  }

  const options = { year: 'numeric', month: 'short', day: 'numeric' }

  return (
    <div className="container mx-auto">
      <div className="bg-white rounded-[8px] shadow-[0px_20px_60px_rgba(62,62,62,0.0784314)] px-[10px] py-[40px] lg:mt-[-65px] lg:px-[70px] lg:py-[40px]">
        <div className="flex justify-between items-center md:mb-[40px]">
          <h2 className="font-poppins text-textColor text-[24px] lg:text-[32px] lg:leading-[60px]">
            Latest Podcast Episodes
          </h2>
          <Link
            aria-label="View all Podcasts"
            href="/"
            className="font-poppins text-center text-white text-[14px] border border-1 border-primary rounded-[3px] px-[15px] py-[9.5px] focus:outline-none bg-primary hover:bg-white hover:text-primary min-w-[115px] min-h-[42px]">
            View All
          </Link>
        </div>

        {podcasts.slice(0, postNum).map((single, i) => (
            <PodcastSingle
              single={single}
              key={i}
            />
          ))}

        {postNum < podcasts.length && (
          <div className="flex justify-center content-center items-center">
            <button
              aria-label="Show more episodes"
              onClick={loadMore}
              className="font-poppins text-center text-primary text-[14px] border border-1 border-primary rounded-[3px] px-[15px] py-[13px] focus:outline-none bg-white hover:bg-primary hover:text-white min-w-[165px] min-h-[50.5px]">
              Show More Episodes
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default PodcastsContainer
