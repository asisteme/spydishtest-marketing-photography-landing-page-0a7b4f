import React from "react";
import CTAButton from "./CTAButton";

export default function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center py-24 px-4 bg-cover bg-center animation-delay-200"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260')"
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <img
        src="https://storage.googleapis.com/tapthetable/assets/1406217/inbox/1000860753445699232/logo_spydish.png"
        alt="SpyDishTest logo"
        className="w-24 h-24 relative z-10 mb-4"
      />
      <h1 className="relative z-10 text-4xl md:text-6xl font-extrabold text-white leading-tight animation-fade">
        An Innovative Solution for Restaurants &amp; Diners
      </h1>
      <p className="relative z-10 max-w-2xl mt-6 text-lg md:text-xl text-gray-100 animation-fade">
        SpyDishTest is an intelligent WhatsApp bot that connects diners with restaurants while optimizing restaurant management.
      </p>
      <div className="relative z-10 mt-8 animation-fade">
        <CTAButton text="Start Now" link="https://wa.me/15551234567" />
      </div>
    </section>
  );
}
