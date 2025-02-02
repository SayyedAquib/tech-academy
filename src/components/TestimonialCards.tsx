"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const techCourseTestimonials = [
  {
    quote:
      "Enrolling in this tech program completely reshaped my understanding of web development. The instructors provided hands-on experience that helped me build real-world projects!",
    name: "John Doe",
    title: "Frontend Development Student",
  },
  {
    quote:
      "The mentorship and resources provided in this course are unparalleled. I've improved my skills in backend development and feel more confident tackling complex projects.",
    name: "Jane Smith",
    title: "Backend Development Student",
  },
  {
    quote:
      "This course gave me the confidence to dive into data science. The lessons were insightful, and the project-based approach allowed me to apply my knowledge right away.",
    name: "William Brown",
    title: "Data Science Student",
  },
  {
    quote:
      "As an aspiring full-stack developer, this course provided me with a comprehensive understanding of both frontend and backend development. It was an invaluable experience.",
    name: "Olivia Johnson",
    title: "Full-stack Development Student",
  },
  {
    quote:
      "The cybersecurity training here equipped me with the knowledge to secure systems effectively. I highly recommend this program to anyone interested in cybersecurity!",
    name: "Ethan Williams",
    title: "Cybersecurity Student",
  },
];

function TechCourseTestimonials() {
  return (
    <div className="h-screen w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Voices of Success: Our Tech Students
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={techCourseTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default TechCourseTestimonials;
