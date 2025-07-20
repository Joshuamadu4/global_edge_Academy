'use client'

import { useEffect, useRef } from 'react'
import { Element } from 'react-scroll'
import Image from 'next/image'
import Button from '@/components/Button'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { programs } from '@/constants/program'

gsap.registerPlugin(ScrollTrigger)

const Programs = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate each card
      gsap.utils.toArray<HTMLElement>('.program-card').forEach((card) => {
        gsap.fromTo(
          card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })

      // Parallax scroll effect for background (if needed)
      if (bgRef.current) {
        gsap.to(bgRef.current, {
          yPercent: 20,
          ease: 'none',
          scrollTrigger: {
            trigger: bgRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section>
      <Element name="programs">
        <div className="container relative py-24" ref={containerRef}>
          {/* Optional parallax bg outline */}
          <div
            ref={bgRef}
            className="absolute top-0 left-0 w-full h-full opacity-5 -z-10"
          >
            <Image
              src="/images/pictures/my3.png"
              width={960}
              height={380}
              alt="outline"
              className="mx-auto opacity-10 mix-blend-soft-light"
            />
          </div>

          <h2 className="h3 text-center text-p4 mb-16">Our Core Programs</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {programs.map(({ id, title, description, icon }) => (
              <div
                key={id}
                className="program-card group relative p-8 border-2 border-s3 rounded-3xl text-center bg-s1/30 transition-all duration-500 hover:shadow-lg hover:scale-[1.03] hover:border-s4 flex flex-col"
                >


                {/* Icon */}
                <div className="flex justify-center items-center mb-6">
                  <Image
                    src={icon}
                    alt={title}
                    width={80}
                    height={80}
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Title */}
                <h3 className="h5 text-p4 mb-3">{title}</h3>

                {/* Description */}
                <p className="text-p5 body-2 mb-6">{description}</p>

                {/* CTA */}
                
                <div className="mt-auto">
                  <a href='https://forms.gle/GjvtVf7S8Zq54xHfA' target='_blank' rel='noopener noreferrer'>
                    <Button icon="/images/zap.svg">Enroll Now</Button>
                  </a>
                </div>

              </div>
            ))}
          </div>
        </div>
      </Element>
    </section>
  )
}

export default Programs
