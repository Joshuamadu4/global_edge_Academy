'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Button from '@/components/Button'
import { details, features } from '@/constants'
import { Element } from 'react-scroll'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Features = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.utils.toArray<HTMLElement>('.feature-block').forEach((block) => {
      gsap.fromTo(
        block,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: block,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })

    gsap.utils.toArray<HTMLElement>('.details-block').forEach((block) => {
      gsap.fromTo(
        block,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: block,
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
    <section>
      <Element name="features">
        <div className="container" ref={containerRef}>
          <div className="relative flex md:flex-wrap flex-nowrap border-2 border-s3 rounded-7xl md:overflow-hidden max-md:flex-col feature-after md:g7 max-md:border-none max-md:rounded-none max-md:gap-3">
            {features.map(({ id, icon, caption, title, text, button }) => (
              <div
                key={id}
                className="feature-block relative z-2 md:px-10 px-5 md:pb-10 pb-5 flex-50 max-md:g7 max-md:border-2 max-md:border-s3 max-md:rounded-3xl max-md:flex-320"
              >
                <div className="w-full flex justify-start items-start">
                  <div className="-ml-3 mb-12 flex items-center justify-center flex-col">
                    <div className="w-0.5 h-16 bg-s3" />
                    <Image
                      src={icon}
                      width={112}
                      height={112}
                      className="object-contain"
                      alt={title}
                    />
                  </div>
                </div>

                <p className="caption mb-5 max-md:mb-6">{caption}</p>
                <h2 className="max-w-400 mb-7 h3 text-p4 max-md:mb-6 max-md:h5">
                  {title}
                </h2>
                <p className="mb-11 body-1 max-md:mb-8 max-md:body-3">{text}</p>
                <Button icon={button.icon}>{button.title}</Button>
              </div>
            ))}

            {/* Details section */}
            <ul className="relative flex justify-around flex-grow px-[5%] border-2 border-s3 rounded-7xl max-md:hidden">
            <div className="absolute bg-s3/20 top-[38%] left-0 right-0 w-full h-[1px] z-10" />

            {details.map(({ id, icon, caption, title, text, button }) => (
                <li
                key={id}
                className="details-block relative pt-16 px-4 pb-14 max-w-xs text-center"
                >
                <div className="absolute top-8 bottom-0 left-1/2 bg-s3/20 w-[1px] h-full z-10" />

                <div className="flex items-center justify-center mx-auto mb-3 border-2 border-s2 rounded-full hover:border-s4 transition-all duration-500 shadow-500 size-20 bg-s3">
                    <Image
                    src={icon}
                    width={64}
                    height={64}
                    alt={title}
                    className="object-contain z-20"
                    />
                </div>

                <p className="caption text-s3 mb-2">{caption}</p>

                <h3 className="relative z-2 mb-2 h6 text-p4">{title}</h3>

                <p className="body-3 mb-4 text-p5">{text}</p>

                <Button icon={button.icon}>{button.title}</Button>
                </li>
            ))}
            </ul>
          </div>
        </div>
      </Element>
    </section>
  )
}

export default Features
