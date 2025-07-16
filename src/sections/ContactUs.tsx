'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Element } from 'react-scroll'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Button from '@/components/Button'

gsap.registerPlugin(ScrollTrigger)

const ContactUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-block',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.contact-block',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section>
      <Element name="contact">
        <div ref={sectionRef} className="container py-24 max-md:py-16">
          <div className="contact-block max-w-3xl mx-auto text-center border-2 border-s3 rounded-3xl p-10 max-md:p-6 bg-black-100">
            <div className="mb-6">
              <p className="caption text-s3 uppercase mb-3">Get in Touch</p>
              <h2 className="h3 text-p4 mb-4">Contact Global Edge Academy</h2>
              <p className="body-2 text-p5">
                Have questions, suggestions, or want to collaborate? We&apos;d love to hear from you.
                Fill out the form below or reach us directly via email or phone.
              </p>
            </div>

            <form className="mt-8 space-y-6">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-s3 bg-transparent text-white placeholder:text-s4"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg border border-s3 bg-transparent text-white placeholder:text-s4"
                />
              </div>

              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-lg border border-s3 bg-transparent text-white placeholder:text-s4"
              />

              <div className="mt-4">
                <Button icon="/images/zap.svg">Send Message</Button>
              </div>
            </form>

            {/* Contact Info */}
            <div className="mt-12 text-left text-xl text-s4 max-w-xl mx-auto space-y-2 text-white">
              <p><strong>Address:</strong> No. 90A Nelson Mandela Street, Asokoro, Abuja, Nigeria</p>
              <p><strong>Email:</strong> hello@globaledgeacademy.ng</p>
              <p><strong>Phone:</strong> +234 8167128006 | +234 8143795632</p>
              
            </div>
          </div>
        </div>
      </Element>
    </section>
  )
}

export default ContactUs
