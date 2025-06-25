"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import courseData from "@/data/Workers_categories.json";
import Link from "next/link";

function coursesPage() {
  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <h1 className="text-4xl md:text-7xl text-center font-sans font-bold mb-8 text-white">
        All Categories ({courseData.courses.length})
      </h1>
      <div className="flex flex-wrap justify-center">
        {courseData.courses.map((course) => (

          
          <CardContainer className="inter-var m-4" key={course.id}>
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {course.title}
              </CardItem>
              
              <CardItem translateZ="100" className="w-full  mt-4">
                  <Link href={`/categories/${course.slug}`}>  
                <Image
                  src={course.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-[] object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={course.title}
                />
                </Link>
                
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  <Link href={`/categories/${course.slug}`}>Check it out !</Link>  
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}

export default coursesPage;
