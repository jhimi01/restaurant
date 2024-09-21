import Image from "next/image";
import React from "react";

export default function TeamMember() {
  const members = [
    {
      imgUrl: "/image/teammember.png",
      name: "John Doe",
      profession: "owner",
    },
    {
      imgUrl: "/image/teammember.png",
      name: "John Doe",
      profession: "chef",
    },
    {
      imgUrl: "/image/teammember.png",
      name: "John Doe",
      profession: "Founder",
    },
    {
      imgUrl: "/image/teammember.png",
      name: "John Doe",
      profession: "Specialist",
    },
  ];

  return (
    <div>
      <div
        className="w-full h-72 md:h-full md:pb-60 -mt-2 text-white text-center"
        style={{ backgroundImage: "url(/image/Bg.png)", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}
      >
        <div className="w-1/2 mx-auto hidden md:block">
          <h1 className="text-[48px] font-bold">Team Member</h1>
          <p className="text-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            laudantium quam ipsum mollitia, fuga eum obcaecati. Vel non
            voluptatem laudantium?
          </p>
        </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-0 wrapper items-center justify-between -mt-44">
            {members.map((member, index)=>(
                <div key={index} >
                  <Image
                    alt="team member"
                    width="150"
                    height="150"
                    src={member.imgUrl}
                    className="w-72 md:h-72 object-cover"
                  />
                  <div className="p-3 text-center space-y-1">
                    <h2 className="text-[18px] text-[#4F4F4F] font-bold">{member.name}</h2>
                    <p className="text-[14px] text-[#828282]">{member.profession}</p>
                  </div>
                </div>
            ))}
        </div>
     
    </div>
  );
}
