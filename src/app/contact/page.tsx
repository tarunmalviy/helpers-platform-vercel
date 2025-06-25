'use client'
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


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
          <form>
            <div className="grid w-full items-center gap-4 my-4 px-10">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
            </div>
            <div className="grid w-full items-center gap-4 my-4 px-10">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Email</Label>
                <Input id="name" placeholder="Enter your Email" />
              </div>
            </div>
            <div className="grid w-full items-center gap-4 my-4 px-10">
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="name">Description</label>
                <Input id="name" placeholder="Message" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex justify-center w-screen px-10 sm:w-[700px]">
            <Button onClick={() => (
                  window.location.href = '/contact/send'
                 
            )} className="text-lg font-bold rounded-3xl w-[500px]">Submit</Button></div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default contactPage;
