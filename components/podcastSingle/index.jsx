import React from 'react'
import Link from 'next/link'
import NewIcon from '../../public/newIcon.png'

const PodcastSingle = ({ single, i }) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' }

  return (
    <div
      key={i}
      className="flex flex-col my-[20px] md:flex-row md:self-center md:mb-[42px]">
      <div className="relative shrink-0	 w-full h-[200px] md:w-[223px] md:h-[182px]">
        <img
          className="w-[100%] h-[100%] object-cover"
          src={single.featuredImage.node.sourceUrl}
          alt={single.featuredImage.altText}
        />
          {single.podcastAcf.newEpisode && 
             <img className='absolute top-[-5.26px] right-[10.18px] w-[26.8px]' src={NewIcon.src} alt="New Podcast Chapter" />
          }
      </div>

      <div className="md:px-[10px] lg:flex">
        <div className="py-[10px] md:py-[0px] lg:px-[20px]">
          <p className="font-poppins text-textColor text-[24px] leading-[24px] py-[10px]">
            {single.title}
          </p>
          <div
            className="font-poppins text-third text-[15px] leading-[23px] mb-[20px]"
            dangerouslySetInnerHTML={{ __html: single.excerpt }}
          />
          <Link
            aria-label="view more link"
            href={`/podcasts/${single.slug}`}
            className="font-poppins text-center text-primary text-[14px] border border-1 border-primary rounded-[3px] px-[15px] py-[9.5px] focus:outline-none bg-white hover:bg-primary hover:text-white min-w-[125px] min-h-[42px]">
            View more
          </Link>
        </div>
        <div className="flex flex-row flex-wrap shrink-0 border-l-[1px] border-l-[#e5e5e5] pl-[20.42px] py-[20px] my-[10px] md:py-[0px] md:my-[20px] lg:flex-col lg:justify-center">
          {single.categories.nodes.map((cat, j) => (
              <p
                key={j}
                className="font-poppins text-[#C2C2C2] text-[14px] leading-[21px] mr-[5px] lg:my-[3px]">
                # {cat.name}
              </p>
            ))}
          <p className="font-poppins text-[#C2C2C2] text-[14px] leading-[21px] mr-[5px] lg:my-[3px]">
            # Posted on{' '}
            {new Date(single.date).toLocaleDateString(undefined, options)}
          </p>

          <p className="font-poppins text-[#C2C2C2] text-[14px] leading-[21px] mr-[5px] lg:my-[3px]">
            #&nbsp;
            {single.tags.nodes.map((tag, k) => <span key={k}>{tag.name}&nbsp;</span>)}
          </p>
        </div>
      </div>
    </div>
  )
}

export default PodcastSingle
