import React from 'react'
import Link from 'next/link'

const BlogSingle = ({ single }) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' }

  return (
    <div
      key={single.postId}
      className="relative bg-white rounded-[6px] shadow-[0px_20px_30px_rgba(62,62,62,0.0784314)] px-[37px] py-[37px] my-[50px] min-h-[400px] lg:min-h-[500px] lg:max-h-[500px]">
      <div className="flex flex-wrap relative">
        <div className="absolute w-[2px] h-full bg-primary left-0 ml-[-37px]" />
        <p className="font-poppins text-[14px] leading-[21px] text-primary mr-[7px]">
          By {single.author.node.name}
        </p>
        <p className="font-poppins text-[14px] leading-[21px] text-[#ACACAC] mr-[7px]">
          {new Date(single.date).toLocaleDateString(undefined, options)}
        </p>
        <p className="font-poppins text-[14px] leading-[21px] text-[#ACACAC] mr-[7px]">
          {single.categories.nodes.map((cat, i) => <span key={i}>{cat.name} </span>)}
        </p>
      </div>
      <p className="font-poppins text-[24px] text-textColor leading-[34px] pt-[20px] pb-[40px]">
        {single.title}
      </p>
      <div
        className="font-poppins text-[15px] text-third leading-[23px] mb-[30px]"
        dangerouslySetInnerHTML={{ __html: single.excerpt }}
      />
      <Link
        aria-label="Read more"
        href={`/blog/${single.slug}`}
        className="lg:absolute lg:bottom-[42px] font-poppins text-center text-primary text-[14px] border border-1 border-primary rounded-[3px] px-[22px] py-[10px] focus:outline-none bg-white hover:bg-primary hover:text-white min-w-[120px] min-h-[42px]">
        Read More
      </Link>
    </div>
  )
}

export default BlogSingle
