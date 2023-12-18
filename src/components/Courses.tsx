"use client";

import { cards } from "@/constants";
import CourseCard from "./CourseCard";
import { ICard } from "@/types/common";

const Courses = () => {
  return (
    <div className="min-h-screen py-10 sm:py-0 container mx-auto flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center items-center gap-6">
        {cards?.map((card: ICard) => (
          <CourseCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};
export default Courses;
