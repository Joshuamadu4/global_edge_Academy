'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { testimonials } from '@/constants'
import TestimonialItem from '@/components/TestimonialItem'


gsap.registerPlugin(ScrollTrigger)

export interface Testimonial {
  id: string
  name: string
  message: string
  avatar: string
  company?: string
  title?: string
}

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  const halfLength = Math.floor(testimonials.length / 2)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testimonial-section-heading', {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.testimonial-section-heading',
          start: 'top 80%',
        },
      })

      gsap.utils.toArray<HTMLElement>('.testimonial-item').forEach((item, i) => {
        gsap.fromTo(
          item,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: i * 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="relative z-2 py-24 md:py-28 lg:py-40">
      <div className="container block lg:flex">
        {/* Heading */}
        <div className="testimonial-section-heading relative z-2 mr-20 flex-300">
          <p className="caption mb-5 max-md:mb-2.5">Wall of Love</p>
          <h3 className="h3 max-md:h5 text-p4">Words from our fans</h3>
        </div>

        {/* Testimonial Columns */}
        <div className="testimonials_inner-after testimonials_inner-before relative -my-12 -mr-3 flex items-start max-lg:static max-md:block">
          {/* Left Group */}
          <div className="testimonials_group-after flex-50">
            {testimonials.slice(0, halfLength).map((testimonial) => (
              <div key={testimonial.id} className="testimonial-item">
                <TestimonialItem
                  item={testimonial}
                  containerClassName="last:after:hidden last:after:max-md:block"
                />
              </div>
            ))}
          </div>

          {/* Right Group */}
          <div className="flex-50">
            {testimonials.slice(halfLength).map((testimonial) => (
              <div key={testimonial.id} className="testimonial-item">
                <TestimonialItem
                  item={testimonial}
                  containerClassName="last:after:hidden after:right-auto after:left-0 after:max-md:-left-4 md:px-12"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
