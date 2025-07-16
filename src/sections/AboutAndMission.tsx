'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Element } from 'react-scroll'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Button from '@/components/Button'

gsap.registerPlugin(ScrollTrigger)

const AboutAndMission = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.about-block').forEach((block) => {
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
      <Element name="about">
        <div
          ref={containerRef}
          className="container grid md:grid-cols-2 gap-16 py-24 max-md:py-16"
        >
          {/* About Section */}
          <div className="about-block flex flex-col min-h-[480px] p-2">
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <Image
                  src="/images/plan-1.png"
                  width={64}
                  height={64}
                  alt="About Icon"
                  className="object-contain"
                />
                <h2 className="h3 text-p4">About Global Edge Academy</h2>
              </div>
              <p className="body-1 text-p5">
                Global Edge Academy is a forward-thinking institution focused on
                delivering world-class education to students across diverse
                disciplines. Our commitment is to academic excellence, hands-on
                learning, and leadership development that equips our students
                for real-world success.
              </p>
            </div>
            <div className="mt-auto">
              <Button icon="/images/zap.svg">Learn More</Button>
            </div>
          </div>

          {/* Mission Section */}
          <div className="about-block flex flex-col min-h-[480px] p-2">
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <Image
                  src="/images/plan-3.png"
                  width={64}
                  height={64}
                  alt="Mission Icon"
                  className="object-contain"
                />
                <h2 className="h3 text-p4">Our Mission</h2>
              </div>
              <p className="body-1 text-p5">
                Our mission is to nurture a generation of critical thinkers,
                innovators, and ethical leaders by providing access to modern
                tools, practical skills, and mentorship. We aim to inspire every
                student to reach their highest potential and contribute
                meaningfully to society.
              </p>
            </div>
            <div className="mt-auto">
              <Button icon="/images/zap.svg">Join Our Vision</Button>
            </div>
          </div>
        </div>
      </Element>
    </section>
  )
}

export default AboutAndMission
