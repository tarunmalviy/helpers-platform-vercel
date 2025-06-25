'use client'
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background";


const instructors = [
    {
      id: 1,
      name: 'Tarun Malviya',
      designation: 'Founder & Lead Developer',
      image:
        '/team/tarun.jpg',
    },
    {
      id: 2,
      name: 'Aditya Kumar Singh',
      designation: 'Graphic Designer',
      image:
        '/team/aditya.jpeg',
    },
    {
      id: 3,
      name: 'Ashish Singh Chauhan',
      designation: 'Documentation Specialist',
      image:
        '/team/ashish.jpeg',
    },
    {
      id: 4,
      name: 'Anupam Upadhyay',
      designation: 'IT Support & Technical Assistance',
      image:
        '/team/anupam.jpeg',
    },
    {
      id: 5,
      name: 'Shivam Singh',
      designation: 'Community Outreach & User Feedback Lead',
      image:
        '/team/shivam.jpeg',
    },
  ];


    

function MeetInstructors() {
  

    return (
        <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Team</h2>
            <p className="text-base md:text-lg text-white text-center mb-4">Passionate, skilled, and dedicated — meet the people who make Helpers a platform you can trust.</p>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={instructors} />
            </div>
        </WavyBackground>
    </div>
    )
}

export default MeetInstructors
