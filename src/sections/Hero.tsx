'use client'

import { useEffect, useRef } from 'react'
import { Element, Link as LinkScroll } from 'react-scroll'
import Image from 'next/image'
import gsap from 'gsap'
import Button from '@/components/Button'

const imageSources = [
  '/images/students/great.png',
  '/images/students/images.png',
]

const Hero = () => {
  const leftRef = useRef<HTMLDivElement>(null)
  const imageRefs = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(leftRef.current, {
        x: -80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })

      const tl = gsap.timeline({ repeat: -1 })

      imageRefs.current.forEach((img, index) => {
        tl.to(img, {
          autoAlpha: 1,
          duration: 10,
        }).to(img, {
          autoAlpha: 0,
          duration: 1,
          delay: 2,
        })
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="relative pt-40 pb-32 max-lg:pt-36 max-lg:pb-28 max-md:pt-28 max-md:pb-24">
      <Element name="home">
        <div className="container flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Content */}
          <div ref={leftRef} className="relative z-10 max-w-xl">
            <div className="caption small-2 uppercase text-p3">Global Edge Academy</div>
            <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Empowering the Next Generation
            </h1>
            <p className="max-w-lg mb-8 body-1 max-md:mb-6">
              At Global Edge Academy, we provide a supportive and modern learning environment designed to equip students with real-world skills in tech, innovation, and leadership.
            </p>
            <LinkScroll to="features" offset={-100} spy smooth>
              <Button icon="/images/zap.svg">Explore Programs</Button>
            </LinkScroll>
          </div>

          {/* Right Animated Image Sequence */}
          <div className="relative w-full max-w-2xl h-[550px]">
            {imageSources.map((src, i) => (
              <div
                key={i}
                ref={(el) => {
                  if (el) imageRefs.current[i] = el
                }}
                className="absolute top-0 left-0 w-full h-full opacity-0"
              >
                <Image
                  src={src}
                  alt={`student-${i}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </Element>
    </section>
  )
}

export default Hero
