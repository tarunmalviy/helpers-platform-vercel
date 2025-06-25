'use client'

import React from 'react'
import Link from 'next/link'
import { HoverEffect } from './ui/card-hover-effect';

const featuredWebinars = [
{
    title: 'Electrician',
    description:
      'Certified electricians for fan fitting, wiring, switchboard repair, and more — safe and affordable.',
    slug: 'electrician',
    isFeatured: true,
  },
  {
    title: 'Carpenter',
    description:
      'Get expert carpenters for furniture repair, fitting, and custom woodwork for your home or office.',
    slug: 'carpenter',
    isFeatured: true,
  },
  {
    title: 'Plumber',
    description:
      'Trusted plumbers for tap leaks, bathroom fittings, water motor setup, and drainage solutions.',
    slug: 'plumber',
    isFeatured: true,
  },
  {
    title: 'Mechanic',
    description:
      'Book skilled mechanics for bike, scooter, and small vehicle repairs at your doorstep.',
    slug: 'mechanic',
    isFeatured: true,
  },
  {
    title: 'Painter',
    description:
      'Professional painters for home interiors, exteriors, and texture design at budget-friendly rates.',
    slug: 'painter',
    isFeatured: true,
  },
  {
    title: 'Welder',
    description:
      'Hire experienced welders for grill installation, metal repairs, and fabrication services.',
    slug: 'welder',
    isFeatured: true,
  },
  ];

function UpcomingWebinars() {
    

    return (
        <div className="p-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Explore In-Demand Categories</h2>  
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Popular Service Categories</p>
          </div>
          <div className='mt-10'>
            <HoverEffect
            items={featuredWebinars.map(webinar => (
              {  title : webinar.title,
                description: webinar.description,
                link: `/categories`
            }
                
    ))}
            />
          </div>
          <div className="mt-10 text-center">
          <Link href={"/categories"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All Categories
          </Link>
        </div>
          </div>
          </div>
    )
}

export default UpcomingWebinars
