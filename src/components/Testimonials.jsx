import React from 'react'
import profile1 from "../images/profile1.webp";
import profile9 from "../images/profile9.webp";
import profile10 from "../images/profile10.webp";
import profile14 from "../images/profile14.webp";
import profile15 from "../images/profile15.webp";
import profile16 from "../images/profile16.webp";
import profile7 from "../images/profile7.webp";
import profile8 from "../images/profile8.webp";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';


export default function Testimonials() {
    const data = [
        {
          "name": "John Smith",
          "designation": "Software Engineer",
          "image": profile1,
          "testimonial": "Akwukwo has transformed my learning experience. The platform offers a diverse range of courses taught by industry experts. I've gained valuable skills and knowledge that have propelled my career forward."
        },
        {
          "name": "Sarah Johnson",
          "designation": "Marketing Professional",
          "image": profile9,

          "testimonial": "I am impressed with the quality of courses on Akwukwo. The platform is user-friendly, the instructors are knowledgeable, and the course materials are comprehensive. It has been an invaluable resource for advancing my professional skills."
        },
        {
          "name": "David Thompson",
          "designation": "Graphic Designer",
          "image": profile7,

          "testimonial": "Akwukwo has helped me stay updated with the latest design trends and techniques. The courses are engaging, and the instructors provide valuable insights. I highly recommend Akwukwo for anyone looking to enhance their design skills."
        },
        {
          "name": "Emily Davis",
          "designation": "Business Analyst",
          "image": profile8,

          "testimonial": "Akwukwo has been a game-changer for me. The flexibility to learn at my own pace and the practical assignments have immensely improved my skills. I appreciate the support and guidance provided by the Akwukwo team."
        },
        {
          "name": "Michael Brown",
          "designation": "Web Developer",
          "image": profile15,

          "testimonial": "Akwukwo is an excellent platform for web development enthusiasts. The courses cover a wide range of topics and provide hands-on experience. The interactive learning environment and community have been instrumental in my growth as a developer."
        },
        {
          "name": "Laura Wilson",
          "designation": "Data Scientist",
          "image": profile14,

          "testimonial": "Akwukwo offers top-notch courses in data science. The curriculum is well-structured, and the instructors are highly knowledgeable. I appreciate the practical projects and real-world applications that have boosted my data science skills."
        },
        {
          "name": "Daniel Lee",
          "designation": "Digital Marketer",
          "image": profile10,

          "testimonial": "Akwukwo has helped me enhance my digital marketing skills. The courses are up-to-date and provide in-depth knowledge of various marketing strategies. The platform is intuitive, making the learning process enjoyable and effective."
        },
        {
          "name": "Sophia Martinez",
          "designation": "UI/UX Designer",
          "image": profile16,

          "testimonial": "As a UI/UX designer, I find Akwukwo to be a treasure trove of design resources. The courses cover everything from design principles to prototyping techniques. Akwukwo has significantly expanded my skill set and career opportunities."
        },
        {
          "name": "Alex Johnson",
          "designation": "Cybersecurity Analyst",
          "image": profile1,

          "testimonial": "I am impressed with the cybersecurity courses on Akwukwo. The instructors are industry professionals, and the content is comprehensive. Akwukwo has helped me develop a strong foundation in cybersecurity and stay updated with the latest threats and defense mechanisms."
        },
        {
          "name": "Jennifer Smith",
          "designation": "Project Manager",
          "image": profile8,

          "testimonial": "Akwukwo has been a reliable learning platform for me as a project manager. The courses on project management methodologies and tools have been invaluable in my professional growth. The Akwukwo community and support team have been exceptional."
        }
      ]

  
    
      return ( <Swiper
        spaceBetween={50}
        slidesPerView={2}
        navigation
        onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
        // pagination={{ clickable: true }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className='flex bg-gray-100 p-10 text-black w-[100%]  rounded mb-4'>
              <img src={item.image} alt="students" className='w-20 h-20 rounded-full mr-4' />
              <div className='flex flex-col'>
                <p className='font-bold text-lg'>{item.name}</p>
                <p className='text-black/70'>{item.designation}</p>
                <p className='mt-2'>{item.testimonial}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }