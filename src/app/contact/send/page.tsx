"use client";
import * as React from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function contactPage() {
  return (
    <div className="flex justify-center items-center w-auto h-auto mt-32 ">
      <Card className="sm:w-[700px] w-auto">
        <CardHeader>
          <CardTitle>
            <div className="text-5xl sm:text-7xl text-center font-sans font-bold mb-8 text-white">
              Contact Us
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl sm:text-2xl text-center font-sans  mb-8 text-white/80">
            Your Query is Successfully send to our Team , we will revert back
            you soon !
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default contactPage;
