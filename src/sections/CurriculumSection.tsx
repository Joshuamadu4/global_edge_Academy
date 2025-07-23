"use client";

import { useEffect, useRef } from "react";
import { Element } from "react-scroll";
import Image from "next/image";
import Button from "@/components/Button";
import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

const curriculumData = [
  {
    id: "overview",
    title: "Program Overview",
    content:
      "This Holiday Innovation Program is designed to inspire and prepare secondary school students to thrive in the 21st century. By combining coding, AI, leadership, and entrepreneurship, we aim to spark curiosity and empower students to innovate with technology."
  },
  {
    id: "structure",
    title: "Program Structure",
    content:
      "Theme: Future-Ready Skills | Duration: 4 Weeks | Target: Ages 12–17 | Time: 9:00AM – 2:00PM | Format: Workshops, Projects, Mentorship, Showcase."
  },
  {
    id: "week1",
    title: "Week 1: Coding & Digital Thinking",
    content:
      "Topics: Orientation, Digital Literacy, Scratch Coding, Python Basics, Text-based games."
  },
  {
    id: "week2",
    title: "Week 2: AI & Ethics",
    content:
      "Topics: AI Concepts, Real-life Applications, Teachable Machine, Ethics & Safety, Mini AI Projects."
  },
  {
    id: "week3",
    title: "Week 3: Leadership & Entrepreneurship",
    content:
      "Topics: Self-Leadership, Communication, Business Ideation, Branding, Pitch Practice."
  },
  {
    id: "week4",
    title: "Week 4: Product Development & Showcase",
    content:
      "Topics: Team Prototyping, MVP Building, Pitch Rehearsals, Innovation Fair & Graduation."
  },
  {
    id: "tools",
    title: "Tools & Resources",
    content:
      "Scratch, Python, HTML/CSS, Teachable Machine, Canva, Google Slides, Trello, Chatbot.com."
  },
  {
    id: "outcomes",
    title: "Learning Outcomes",
    content:
      "Students will build projects, understand AI, collaborate in teams, and pitch startup ideas."
  },
  {
    id: "deliverables",
    title: "Program Deliverables",
    content:
      "Mini Projects, AI/Chatbot Prototype, Business Model Canvas, Pitch Deck, Showcase Presentation."
  }
];

const Curriculum = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".curriculum-card").forEach((card) => {
        gsap.fromTo(
          card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      if (bgRef.current) {
        gsap.to(bgRef.current, {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: bgRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section>
      <Element name="curriculum">
        <div className="container relative py-24" ref={containerRef}>
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

          <h2 className="h3 text-center text-p4 mb-16">
            Holiday Tech Innovation Curriculum
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {curriculumData.map(({ id, title, content }) => (
              <div
                key={id}
                className="curriculum-card group relative p-8 border-2 border-s3 rounded-3xl text-center bg-s1/30 transition-all duration-500 hover:shadow-lg hover:scale-[1.03] hover:border-s4 flex flex-col"
              >
                <h3 className="h5 text-p4 mb-3">{title}</h3>
                <p className="text-p5 body-2 mb-6">{content}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <a
              href="/images/document/Holiday  School of tech curriculum .pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button icon="/images/zap.svg">Download Full Curriculum</Button>
            </a>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Curriculum;
