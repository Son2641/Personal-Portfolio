import LineGradient from '../components/LineGradient';
// import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';

const MySkills = () => {
  // const isAboveLarge = useMediaQuery('(min-width: 1060px)');
  return (
    <section id='skills' className='pt-10 pb-24'>
      {/* HEADER AND IMAGE SECTION */}
      <div className='md:flex md:justify-between md:gap-16 mt-32'>
        <motion.div
          className='md:w-1/3 mx-auto text-center'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className='font-playfair font-semibold text-4xl mb-5'>
            TECHNICAL <span className='text-blue'>SKILLS</span>
          </p>
          <LineGradient width='1' />
          <p className='mt-10 mb-7 font-playfair'>
            These are the technologies that I have worked with!
          </p>
        </motion.div>
      </div>

      {/* SKILLS */}
      <motion.div
        className='md:w-1/3 mx-auto text-center'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img
              className='w-20 mx-auto'
              src='../assets/html.png'
              alt='HTML icon'
            />
            <p className='my-4 font-playfair'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img
              className='w-20 mx-auto'
              src='../assets/css.png'
              alt='CSS icon'
            />
            <p className='my-4 font-playfair'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img
              className='w-20 mx-auto'
              src='../assets/javascript.png'
              alt='JS icon'
            />
            <p className='my-4 font-playfair'>JAVASCRIPT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img
              className='w-20 mx-auto'
              src='../assets/react.png'
              alt='REACT icon'
            />
            <p className='my-4 font-playfair'>REACT JS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img
              className='w-20 mx-auto'
              src='../assets/git.png'
              alt='GIT icon'
            />
            <p className='my-4 font-playfair'>GIT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img
              className='w-20 mx-auto'
              src='../assets/nodejs.png'
              alt='NODEJS icon'
            />
            <p className='my-4 font-playfair'>NODE JS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img
              className='w-26 h-20 mx-auto'
              src='../assets/expressjs.png'
              alt='EXPRESSJS icon'
            />
            <p className='my-4 font-playfair'>EXPRESS JS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img
              className='w-20 mx-auto'
              src='../assets/mongodb.png'
              alt='MONGODB icon'
            />
            <p className='my-4 font-playfair'>MONGO DB</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img
              className='w-20 mx-auto'
              src='../assets/vuejs.png'
              alt='VUEJS icon'
            />
            <p className='my-4 font-playfair'>VUE JS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img
              className='w-20 mx-auto'
              src='../assets/mui.png'
              alt='MUI icon'
            />
            <p className='my-4 font-playfair'>MATERIAL UI</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img
              className='w-20 mx-auto'
              src='../assets/tailwind.png'
              alt='TAILWIND icon'
            />
            <p className='my-4 font-playfair'>TAILWIND CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img
              className='w-20 mx-auto'
              src='../assets/bootstrap.png'
              alt='BOOTSTRAP icon'
            />
            <p className='my-4 font-playfair'>BOOTSTRAP</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default MySkills;
