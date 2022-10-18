import React from "react";

const AboutStargateSection = () => {
  return (
    <section>
      <div className="container">
        <div className="max-w-[516px]">
          <h4 className="text-[20px] font-medium">About Stargate</h4>
          <h2 className="text-[25px] leading-[38px] text-primary font-semibold mt-1 mb-5">
            Stargate is a fully composable liquidity transport protocol that
            lives at the heart of Omnichain DeFi
          </h2>
          <p className="__body_text">
            With Stargate, users & dApps can transfer native assets cross-chain
            while accessing the protocol’s unified liquidity pools with instant
            guaranteed finality. The universe is infinite with Stargate
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutStargateSection;
