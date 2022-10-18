import React, { useState } from "react";
import axios from 'axios'

function HeroSection() {
  const [value, setValue] = useState(0);
  if (typeof window !== 'undefined') {
    // Perform localStorage action
    const item = localStorage.getItem('address')
    if (item != undefined) {
      console.log(item, 'item')
      axios
      .get(`https://api.debank.com/user/total_balance?addr=${item}`)
      .then(res => {
        setValue(res.data.data.total_usd_value)
      })
    }
  }
  return (
    <section
      style={{
        backgroundImage: 'url("/img/1024 Guennyou_homepage-01.png")',
        backgroundSize: "100%",
      }}
      className="h-screen flex justify-center items-center relative bg-no-repeat bg-center"
    >
      <div className="container mt-6">
        <h1 className="text-primary font-poppins font-medium text-[30px] leading-[30px] tracking-[-0.03em] text-center">
          Welcome to the omnichain future
        </h1>

        <div className="flex flex-col w-full items-center mt-10">
          <p className="text-base leading-5 text-white font-poppins mb-[0.75rem]">
            Total Value Locked
          </p>
          <p className="font-poppins text-xl md:text-[30px] font-semibold text-[#fff]">
            ${value}
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
