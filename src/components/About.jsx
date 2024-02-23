import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import yemi from '../assets/yemy.jpg';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>About Me</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.div 
        variants={fadeIn("right", "spring", 0.2, 0.5)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
      <img className="rounded-[100px]" id="profile_pic" src={yemi} />        
      Name: Yemane Birhane <br />
        Gender: Male <br />
        DOB: Jan-12-1998 <br />
        Nick_Name: Yemi Bold <br /><br/>
        FullStack Software Developer <br /><br/>
        Fav Quote: Everybody should Learn to Program a Computer, Because it Teaches you how to Think ! <br /><br />
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        <span className='text-3xl'> What I Do?</span><br/>
        I'm a skilled software developer with experience in Python and
        JavaScript, and expertise in frameworks like Django, React.js.
        Databases MySQL, Sqlite, and PostgreSQL.  Data Structures, Algorithm, and Data analytics.
         I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life! <br/><br/>
      </motion.p>
        
      <h1 className="text-6xl">Services</h1>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
