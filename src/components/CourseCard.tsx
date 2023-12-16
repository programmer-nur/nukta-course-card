"use client";

import Image from "next/image";
import timeLine from "../assets/time-line.png";
import book from "../assets/book.png";
import avatar from "../assets/avatar.png";
import { ICard } from "@/types/common";
const CourseCard = ({ card }: { card: ICard }) => {
  const {
    title,
    description,
    image,
    price,
    discount,
    free,
    time,
    like,
    comment,
  } = card;
  return (
    <div
      className="w-[234px] rounded-xl shadow-[rgba(0, 0, 0, 0.18)] shadow-md bg-white transform
    transition duration-500 hover:scale-105 justify-center items-center hover:shadow-2xl"
    >
      <Image
        className="h-[157px] rounded-t-xl object-cover"
        src={image}
        height={300}
        width={400}
        priority
        alt={"one"}
      />
      <div className="flex flex-col justify-between p-[10px]">
        <div>
          <h2 className="text-base font-medium text-black line-clamp-1">
            {title}
          </h2>
          <p className="text-dimBlack text-xs mt-2 line-clamp-2">
            {description}
          </p>
        </div>
        <div className="flex justify-between text-black text-xs items-center mt-2">
          {discount && <p className="line-through">${price}</p>}
          {free ? (
            <p className="text-primary font-medium">FREE</p>
          ) : discount ? (
            <p className="text-primary font-medium">${price - discount}</p>
          ) : (
            <p className="text-primary font-medium">${price}</p>
          )}
          {discount && (
            <p className="bg-highlight rounded-full text-[10px] font-normal py-[2px] px-[5px]">
              You Save <span>${discount}</span>
            </p>
          )}
        </div>
      </div>
      <div className="flex border-t-[0.5px] border-[#C9C9C9] p-[10px] text-black text-xs items-start gap-[11px]">
        <p className="flex items-center gap-1">
          <Image src={timeLine} width={10} height={10} priority alt="icon" />
          <span className="text-[10px] text-gray">{time}</span>
        </p>
        <p className="flex items-center gap-1">
          <Image src={avatar} width={10} height={10} priority alt="icon" />
          <span className="text-[10px] text-gray">{like}</span>
        </p>
        <p className="flex items-center gap-1">
          <Image src={book} width={10} height={10} priority alt="icon" />
          <span className="text-[10px] text-gray">{comment}</span>
        </p>
      </div>
    </div>
  );
};
export default CourseCard;
