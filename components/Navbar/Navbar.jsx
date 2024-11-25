import React from 'react'
import ewsLogo from '../../assets/images/ews-logo.webp';
const Navbar = () => {
  return (
    <>
      <nav className='flex justify-between items-center pt-[27px]'>
        <img src={ewsLogo} alt="college eassy Logo" />
        <ul className='flex items-center gap-x-[24px]'>
          <li className='text-[16px] text-[#013046] font=[450]'><a href="javascript:;">Writers</a></li>
          <li className='text-[16px] text-[#013046] font=[450]'><a href="javascript:;">Services</a></li>
          <li className='text-[16px] text-[#013046] font=[450]'><a href="javascript:;">Success Stories</a></li>
          <li className='text-[16px] text-[#013046] font=[450]'><a href="javascript:;">How To’s</a></li>
          <li className='text-[16px] text-[#013046] font=[450]'><a href="javascript:;">About</a></li>
          <li className='text-[16px] text-[#013046] font=[450]'><a href="javascript:;">Contact</a></li>
          <li className='text-[16px] text-[#013046] font=[450]'><a href="javascript:;">Blog</a></li>
        </ul>
        <button className='text-[16px] text-[#013046]'>Log In</button>
        <button className='text-[16px] text-[#013046] border-[1px] border-[#133E7A] px-[6px] py-[11px] rounded-xl'>Order Now</button>
      </nav>
    </>
  )
}

export default Navbar;