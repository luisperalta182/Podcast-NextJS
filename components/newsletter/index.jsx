import React, { useState } from 'react'
// import { BsArrowRight } from 'react-icons/bs'
import Cf7FormWrapper from '../contactForm7'

const Form = ({ handler }) => {
  const [formState, setFormState] = useState({})
  // const [confirm, setConfirm] = useState(null)

  // function isValidEmail(email) {
  //   return /\S+@\S+\.\S+/.test(email)
  // }

  const handleFieldChange = (field, e) => {
    setFormState({
      ...formState,
      [field]: e.target.value,
    })
  }

  const handleFormSubmit = (e) => {
    handler(e, formState)
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="flex max-w-[570px] m-auto px-[10px] lg:px-[0px]">
        <input
          type="text"
          onChange={(e) => handleFieldChange('your-email', e)}
          className="font-poppins text-[#C2C2C2] text-[14px] leading-[21px] px-[30px] rounded-none rounded-l-lg bg-[#F5F5F5] border border-gray-300  focus:border-blue-500 block flex-1 min-w-0 w-full"
          placeholder="Type Your Email"
        />
        <input
          type="submit"
          value="Subscribe"
          className="font-poppins text-white text-[14px] leading-[21px] cursor-pointer inline-flex items-center px-[28px] py-[20px] bg-primary rounded-r-md border border-r-0 border-primary"
        />
      </div>
      {/* {confirm && (
        <div>
          <p>{confirm}</p>
        </div>
      )} */}
    </form>
  )
}

const Newsletter = ({ general }) => (
    <div className="container mx-auto">
      <div className="pt-[70px]">
        <h2 className="font-poppins text-center text-textColor text-[24px] lg:text-[32px] lg:leading-[60px] pb-[20px]">
          New Episode Every Week!
        </h2>
      </div>
      <div className="flex justify-center content-center items-center mb-[10px] px-[10px] lg:px-[0px]">
        <p className="max-w-[502px] text-center font-poppins text-third text-[15px] leading-[23px]">
          {general.newsletter.newsletterContent}
        </p>
      </div>
      <Cf7FormWrapper url="https://nicasource-c083a5.ingress-erytho.ewp.live/wp-json/contact-form-7/v1/contact-forms/5/feedback">
        <Form />
      </Cf7FormWrapper>
    </div>
  )

export default Newsletter
