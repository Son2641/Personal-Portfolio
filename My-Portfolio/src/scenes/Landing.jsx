import SocialMediaIcons from '../components/SocialMediaIcons';
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ShuffleText from 'react-shuffle-text';
import { useState } from 'react';

const Landing = ({ setSelectedPage }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const isAboveLarge = useMediaQuery('(min-width: 1060px)');
  return (
    <section
      id='home'
      className='md:flex md:justify-between md:items-center gap-16 md:h-full py-10'
    >
      {/* IMAGE SECTION */}
      <div className='basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2'>
        {isAboveLarge ? (
          <div
            className='relative z-0 ml-20 before:absolute before:-top-20 before:-left-20
          before:w-full before:max-w-[300px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]'
          >
            <img
              alt='profile'
              className='hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[300px] md:max-w-[600px]'
              src='assets/profile-image.png'
            />
          </div>
        ) : (
          <div className='max-w-[300px] md:max-w-[600px] border-2 border-blue'>
            <img
              alt='profile'
              className='z-10 w-full max-w-[300px] md:max-w-[600px]'
              src='assets/profile-image.png'
            />
          </div>
        )}
      </div>

      {/* MAIN TEXT */}
      <div className='z-30 basis-2/5 mt-12 md:mt-32'>
        {/* HEADINGS */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p
            className='text-4xl font-playfair font-semibold z-10 text-center md:text-start'
            onMouseOver={handleMouseEnter}
            onMouseOut={handleMouseLeave}
          >
            <ShuffleText
              content={isHovered ? 'Jason Miranda' : 'Jason Miranda '}
            />
          </p>

          <p className='mt-10 mb-7 text-sm text-center md:text-start'>
            Hello, my name is Jason! I'm a versatile web developer proficient at
            developing web applications. My passion lies in creating
            user-friendly experiences, and I possess a broad skill set in both
            front-end and backend development. Skilled in technologies like
            React, Express, Node, and MongoDB, I am driven by the desire to
            embrace fresh challenges, learn new technologies and construct
            top-notch web applications that offer exceptional user experiences.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className='flex mt-5 justify-center md:justify-start'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <a
            href='https://jasonmiranda-portfolio.onrender.com/build/assets/RESUME_MIRANDA_JASON.pdf'
            download
          >
            <div
              className='bg-blue text-white py-3 px-7 font-semibold
              hover:text-black transition duration-500'
            >
              Download Resume
            </div>
            {/* </div> */}
          </a>
          <AnchorLink
            className='bg-blue py-0.5 pr-0.5'
            onClick={() => setSelectedPage('contact')}
            href='#contact'
          >
            <div className='bg-deep-blue hover:text-blue rounded-sm font-semibold transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair'>
              Contact me
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className='flex mt-5 justify-center md:justify-start'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
