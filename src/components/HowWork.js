import React from 'react'

export default function HowWork() {


    const work = [
        {img: '/image/howwork/1.png',
            work: "Quality Food",
            desc: "Contrary to popular belief, Lorem Ipsum is not simply random text",
            datasod: "fade-down"
        },
        {img: '/image/howwork/2.png',
            work: "Quality Food",
            desc: "Contrary to popular belief, Lorem Ipsum is not simply random text",
            datasod: "fade-up"
        },
        {img: '/image/howwork/3.png',
            work: "Quality Food",
            desc: "Contrary to popular belief, Lorem Ipsum is not simply random text",
            datasod: "fade-down"
        },
        {img: '/image/howwork/4.png',
            work: "Quality Food",
            desc: "Contrary to popular belief, Lorem Ipsum is not simply random text",
             datasod: "fade-up"
        },
    ]


  return (
    <div className='wrapper'>
      <h2 className='text-[30px] md:text-[61px] font-bold font-nunito text-center text-subtext'>
      How does it work
      </h2>

      <div className='grid md:grid-cols-4 grid-cols-2 gap-3  md:gap-6 items-center'>
        {work.map((item) => (
          <div data-aos={item.datasod} data-aos-easing="linear" key={item.work} className='border rounded-2xl group  p-4 flex flex-col items-center justify-center text-center'>
            <img src={item.img} alt={item.work} className='w-[80px] h-[80px]' />
            <h3 className='text-[15px] md:text-[30px] text-[#000] font-semibold font-nunito'>{item.work}</h3>
            <p className='text-[10px] md:text-[18px]  text-[#666666] font-nunito'>{item.desc}</p>

            <button className='font-bold text-[10px] md:text-[20px] font-nunito group-hover:text-primary'>Learn More</button>
          </div>
        ))}
      </div>

    </div>
  )
}
