"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
    <h2 className="text-5xl font-bold text-center mb-8 z-10 p-10">Our Happy Customers</h2>
    <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="slow"
      />
    </div>
    </div>
    </div>
  );
}

const testimonials = [
  {
    quote: "Using Helpers to find skilled workers was the best decision ever! The platform made everything easy and secure. I found a reliable electrician within minutes. Highly recommended!",
    name: "Priya Sharma",
    title: "Customer, Varanasi"
  },
  {
    quote: "Helpers helped me hire a plumber urgently and the service was top-notch. The rating system gave me confidence and the work quality was excellent. Smooth and hassle-free experience!",
    name: "Rahul Verma",
    title: "Customer, Varanasi"
  },
  {
    quote: "I was surprised how fast I could find a trustworthy carpenter on Helpers. The profiles and reviews really helped. I will definitely use it again for all home repair needs!",
    name: "Aarohi Singh",
    title: "Customer, Varanasi"
  },
  {
    quote: "I found a house painter through Helpers and the work was professional and neat. The safety checks and ID verification added a lot of trust. Great platform for local help!",
    name: "Rohit Pandey",
    title: "Customer, Varanasi"
  },
  {
    quote: "Thanks to Helpers, I hired a maid who is punctual and hardworking. The process was simple and transparent. It is truly a game changer for households in Varanasi!",
    name: "Neha Tripathi",
    title: "Customer, Varanasi"
  }
];


  
