"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import CarpenterData from "@/data/Electrician.json";

function CarpenterPage() {
  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <h1 className="text-4xl md:text-7xl text-center font-sans font-bold mb-8 text-white">
        Electrician ({CarpenterData.Electrician.length})
      </h1>
      <div className="flex flex-wrap justify-center">
        {CarpenterData.Electrician.map((Electrician) => (
          <CardContainer className="inter-var m-4">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {Electrician.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {Electrician.description}
              </CardItem>

              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as="div"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  <CardItem
                    as="p"
                    translateZ="60"
                    className=" text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    <text className=" text-lg text-gray-400">
                      Experience: {Electrician.experience} years
                    </text>
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="pb-2 text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    <text className=" text-lg text-gray-400">
                      Rating: {Electrician.Rating}
                    </text>
                  </CardItem>
                  <p className="text-base text-gray-400">
                    @ ₹ {Electrician.price}/-
                  </p>
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="div"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white sm:text-base text-[0.8125rem] font-bold sm:w-40 w-44 h-10 "
                >
                  <h1>{`+91 ${Electrician.phone}`}</h1>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}

export default CarpenterPage;
