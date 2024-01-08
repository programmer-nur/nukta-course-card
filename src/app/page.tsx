import Background from "@/components/Background";
import Banner from "@/components/Banner";
import Courses from "@/components/Courses";
import Navbar from "@/components/Navbar";
import React from "react";

const Home = () => {
  return (
    <div className="w-full bg-cover relative before:content-[' '] before:absolute before:inset-0 before:bg-black before:opacity-80 before:z-10 bg-bg-banner bg-center">
     {/* <Background /> */}
     <div className="relative z-50">

     <Navbar />
     <Banner />
     </div>
    </div>
  );
};

export default Home;
