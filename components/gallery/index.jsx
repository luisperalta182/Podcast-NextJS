import React, { useState } from 'react'

const Gallery = ({ gallery }) => {
  const [imageUrl, setImageUrl] = useState('')

  function copyUrl(linkData) {
    setImageUrl(linkData)
    navigator.clipboard.writeText(imageUrl)
  }

  return (
    <div className="container mx-auto">
      <div className="pt-[70px]">
        <h2 className="font-poppins text-center text-textColor text-[24px] lg:text-[32px] lg:leading-[60px] pb-[20px]">
          Our Gallery
        </h2>
      </div>

      <div className={`gallery ${gallery.length === 10 ? 'complete' : ''}`}>
        {gallery.map((imgSingle, i) => (
            <div
              key={i}
              onClick={() => copyUrl(imgSingle.sourceUrl)}
              className={`images image-${i + 1}`}>
              <img
                src={imgSingle.sourceUrl}
                alt={imgSingle.altText} />
            </div>
          ))}
      </div>
    </div>
  )
}

export default Gallery
