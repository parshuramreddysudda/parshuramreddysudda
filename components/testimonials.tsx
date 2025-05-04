import { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { SiGoogle, SiLinkedin } from 'react-icons/si';
import SectionHeading from './section-heading';
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { testimonials } from '@/lib/data';

export default function Testimonial() {
  const swiperRef = useRef(null);
 const { ref } = useSectionInView("Testimonials");

  useEffect(() => {
    const swiper = new Swiper(swiperRef.current, {
      slidesPerView: 1,
      spaceBetween: 32,
      loop: true,
      centeredSlides: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 32,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
      },
    });

    swiperRef.current = swiper; // Assign the swiper instance to the ref

    return () => {
      swiper.destroy(); // Destroy the swiper instance on unmount
    };
  }, []);

  return (
    <motion.section
    ref={ref}
    className="leading-8 text-center mb-28 sm:mb-40 scroll-mt-28"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
    id="Testimonials"
  >
  <SectionHeading className="py-24 dark:bg-gray-900">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="mb-16">
        <span className="block mb-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          TESTIMONIAL
        </span>
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white">
          What our happy users say!
        </h2>
        <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
          Verified recommendations on{" "}
          <a
            href="https://www.linkedin.com/in/parsharam-reddy-sudda"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            LinkedIn
          </a>
        </p>
      </div>

      <div className="swiper mySwiper" ref={swiperRef}>
        <div className="swiper-wrapper w-max">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="swiper-slide">
              <TestimonialCard
                rating={testimonial.rating}
                text={testimonial.text}
                image={testimonial.image}
                name={testimonial.name}
                title={testimonial.title}
              />
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  </SectionHeading>
    </motion.section>
  );
};


const TestimonialCard = ({ rating, text, image, name, title }) => (
<div className="flex flex-col justify-between w-full p-6 mx-auto transition-all duration-500 bg-white border border-gray-300 group rounded-xl hover:border-indigo-600 hover:shadow-sm slide_active:border-indigo-600 dark:bg-gray-800 dark:border-gray-600">
  <div>
    <div className="flex items-center gap-2 transition-all duration-500 mb-7">
      <a
        href="https://www.linkedin.com/in/parsharam-reddy-sudda"
        target="_blank"
        rel="noopener noreferrer"
        className="text-indigo-600 transition dark:text-indigo-400 hover:opacity-80"
      >
        <SiLinkedin size={20} />
      </a>
      <span className="text-base font-semibold text-indigo-600 dark:text-indigo-400">{rating}</span>
    </div>
    <p className="pb-8 text-base leading-6 text-gray-600 transition-all duration-500 group-hover:text-gray-800 slide_active:text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
      {text}
    </p>
  </div>
  <div className="flex items-center gap-5 pt-5 border-t border-gray-200 dark:border-gray-600">
  <SiLinkedin size={20} />
    <div className="block">
      <h6 className="mb-1 text-base font-medium text-gray-900 transition-all duration-500 dark:text-white">
        {name}
      </h6>
      <span className="text-sm leading-4 text-gray-500 dark:text-gray-400">{title}</span>
    </div>
  </div>
</div>


);
