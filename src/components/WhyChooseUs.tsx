"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const techSchoolContent = [
  {
    title: "Unlock Your Potential in Technology: A Personal Journey to Mastery",
    description:
      "Embark on a journey in technology where personalized instruction is tailored to your unique needs. Our expert mentors guide you to foster creativity, problem-solving skills, and technical mastery, making your path in tech truly transformative.",
  },
  {
    title: "Hands-On Learning with Real-World Projects",
    description:
      "Our hands-on approach allows you to work on real-world projects, honing your skills and gaining practical experience. Whether you’re building software or crafting digital solutions, you’ll get the chance to apply what you learn immediately.",
  },
  {
    title: "Innovative Tools and Technologies",
    description:
      "Stay ahead of the curve by learning with the latest tools and technologies in the tech industry. We equip you with the knowledge and practical skills needed to excel in fields like software development, AI, web development, and more.",
  },
  {
    title: "Live Feedback & Engagement",
    description:
      "Engage in interactive learning sessions where feedback is immediate. Just like working in a team on a project, you’ll receive continuous input to sharpen your skills and understanding of cutting-edge technology concepts.",
  },
  {
    title: "Industry-Relevant Curriculum",
    description:
      "Our curriculum is continually updated to reflect the latest trends and best practices in technology, ensuring that you’re always learning the most current, in-demand skills. Stay up-to-date with industry developments and gain a competitive edge.",
  },
  {
    title: "Limitless Learning Opportunities",
    description:
      "With a wide array of resources, tutorials, and dynamic courses, there are endless opportunities for growth. Whether you’re a beginner or an advanced learner, our platform supports your continual development in the ever-evolving tech world.",
  },
];

function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={techSchoolContent} />
    </div>
  );
}

export default WhyChooseUs;
