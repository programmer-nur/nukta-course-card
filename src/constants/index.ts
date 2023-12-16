import imageOne from "../assets/imgeone.jpg";
import imageTwo from "../assets/imagetwo.jpg";
import imageThree from "../assets/imagethree.jpg";

export const cards = [
  {
    id: 1,
    title: "This is a one line title",
    description: "Two line paragraph Lorem ipsum dolor sit amet, consectetur",
    image: imageOne,
    price: 1050,
    discount: 250,
    free: false,
    time: "10 hour",
    like: "308",
    comment: "17",
  },
  {
    id: 2,
    title: "This is a one line title",
    description: "Two line paragraph Lorem ipsum dolor sit amet, consectetur",
    image: imageTwo,
    price: 750,
    discount: null,
    free: false,
    time: "10 hour",
    like: "308",
    comment: "17",
  },
  {
    id: 3,
    title: "This is a one line title",
    description: "Two line paragraph Lorem ipsum dolor sit amet, consectetur",
    image: imageThree,
    price: 0,
    discount: null,
    free: true,
    time: "10 hour",
    like: "308",
    comment: "17",
  },
];
