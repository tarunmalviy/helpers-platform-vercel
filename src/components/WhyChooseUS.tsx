"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

 
const content = [
    {
      title: "Verified Identity Workers",
      description:
        "We verify the identity of every worker before they are listed on our platform.This includes document checks, face verification, and phone number validation.It ensures that only genuine, trustworthy individuals are available for hire.Your safety and confidence are our top priority at every step..",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--green-500))] flex items-center justify-center text-white">
          Verified Identity Workers
        </div>
      ),
    },
   
    {
      title: "Customer Reviews",
      description:
        "Every customer can leave honest feedback after a service is completed. These reviews help future users choose the right worker for their needs. Ratings build trust and encourage workers to maintain quality service. Transparency through real experiences makes Helpers a reliable platform.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Customer Reviews
        </div>
      ),
    },
    {
      title: "Direct Payment to Workers",
      description:
        "Helpers allows customers to pay workers directly without involving middlemen. This ensures workers receive full and fair compensation for their services. The process is simple, transparent, and fast. It empowers workers and builds trust between both parties.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] flex items-center justify-center text-white">
          Direct Payment to Workers
        </div>
      ),
    },
    {
        title: "Skilled Workers",
        description:
          "Helpers features only skilled workers who are experienced in their respective fields. Each worker is listed with their specialties, making it easy to find the right match. Their practical knowledge ensures quality service every time. We believe skill is more valuable than just qualifications.",
        content: (
          <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--red-500),var(--yellow-500))] flex items-center justify-center text-white">
            Skilled Workers
          </div>
        ),
      },
      {
        title: "Platfrom for Support Community",
        description:
          "Helpers is more than just a job portal — it's a support community for workers and customers. It connects people, builds trust, and promotes fair opportunities for everyone. Workers find dignity in their work, while users find reliable help. Together, we grow stronger as a community.",
        content: (
          <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--cyan-500))] flex items-center justify-center text-white">
            Platform for Support Community
          </div>
        ),
      },
    
      
      
  ];
  

function WhyChooseUS() {
    
    return (
        <div className="">
            <StickyScroll content={content}/>
        </div>
    )
}

export default WhyChooseUS
