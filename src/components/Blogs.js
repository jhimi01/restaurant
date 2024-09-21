import React from "react";
import { GoCommentDiscussion } from "react-icons/go";
import { CiCalendarDate } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Blogs() {
  const blogs = [
    {
      img: "image/blog.png",
      title: "Chocolate Truffle Cake With Honey Flavor",
      des: "Lorem ipsum dolor sit amet, consectetur elit. Non mi sed etiam a id at ultricies neque.Tempus,poten diam ac integer id tellus est.",
      date: "2022 Jan 01",
      comments: "03",
    },
    {
      img: "image/blog.png",
      title: "Chocolate Truffle Cake With Honey Flavor",
      des: "Lorem ipsum dolor sit amet, consectetur elit. Non mi sed etiam a id at ultricies neque.Tempus,poten diam ac integer id tellus est.",
      date: "2022 Jan 01",
      comments: "03",
    },
    {
      img: "image/blog.png",
      title: "Chocolate Truffle Cake With Honey Flavor",
      des: "Lorem ipsum dolor sit amet, consectetur elit. Non mi sed etiam a id at ultricies neque.Tempus,poten diam ac integer id tellus est.",
      date: "2022 Jan 01",
      comments: "03",
    },
  ];

  return (
    <div className="wrapper my-20">
      <h2 className="text-[30px] md:text-[50px] font-bold font-nunito text-center text-[#333]">
        Latest news & Blog
      </h2>
      <p className="md:w-1/2 mx-auto text-[#828282] font-normal text-[16px] text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat illum
        sunt vel harum praesentium. Ducimus officia aliquam voluptate quam
        reiciendis?
      </p>

      <div className="grid grid-cols-1 mt-6 md:mt-20 md:grid-cols-3 gap-4">
        {blogs.map((blog, index) => (
          <div key={index} className="shadow-md ">
            <img src={blog.img} alt="" className="mx-auto py-5" />
            <div className="p-3 text-start space-y-2">
            <div className="flex items-center gap-4 text-[#828282]">
                <span className="flex items-center gap-1"><CiCalendarDate className="text-primary text-[20px]" /> {blog.date}</span>
                <span  className="flex items-center gap-2"><GoCommentDiscussion className="text-primary text-[20px]" /> comments ({blog.comments})</span>
              </div>
              <h3 className="text-[18px] font-bold md:text-[20px] text-[#333]">{blog.title}</h3>
              <p className="text-[16px] text-[#4F4F4F]">{blog.des}</p>
              <button className="flex items-center gap-1 text-[#4F4F4F] text-[14px]">Read More <FaArrowRightLong /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
