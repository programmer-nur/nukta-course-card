'use client'

import { cards } from "@/constants"
import CourseCard from "./CourseCard"

const Courses = () => {
    console.log(cards)
  return (
    <div className="h-screen mx-auto flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center items-center gap-6">
            {
                cards?.map(card=>(
                    <CourseCard key={card.id} card={card}/>
                ))
            }
        </div>
    </div>
  )
}
export default Courses