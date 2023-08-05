import LineGradient from '../components/LineGradient';
import { motion } from 'framer-motion';
import { data } from '../data/data.js';

const projects = data;

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, image, description, link, github }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(' ').join('-').toLowerCase();

  return (
    <motion.div variants={projectVariant} className='relative'>
      <div className={overlayStyles}>
        <p className='text-2xl font-playfair font-semibold'>{title}</p>
        <p className='mt-7 font-playfair'>{description}</p>
        <div className='mt-2 flex gap-3'>
          <a
            className='hover:opacity-70 transition duration-500'
            href={link}
            target='_blank'
            rel='noreferrer'
          >
            <div
              className='bg-blue text-white rounded-sm py-3 px-7 font-semibold
              hover:text-black transition duration-500'
            >
              Demo Website
            </div>
          </a>
          <a
            className='hover:opacity-50 transition duration-500'
            href={github}
            target='_blank'
            rel='noreferrer'
          >
            <div className='bg-white hover:text-blue rounded-sm font-semibold transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair'>
              View in Github
            </div>
          </a>
        </div>
      </div>
      <img src={image} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id='projects' className='pt-48 pb-48'>
      {/* HEADINGS */}
      <motion.div
        className='md:w-2/5 mx-auto text-center'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className='mb-10'>
          <p className='font-playfair font-semibold text-4xl'>
            <span className='text-blue'>PRO</span>JECTS
          </p>
          <div className='flex justify-center mt-5'>
            <LineGradient width='w-2/3' />
          </div>
          <p className='mt-10 mb-7 font-playfair'>
            Here are some of my previous projects!
          </p>
        </div>
      </motion.div>

      {/* PROJECTS */}
      <div className='flex justify-center'>
        <motion.div
          className='sm:grid sm:grid-cols-2 gap-4'
          variants={container}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <Project
              key={project.id}
              title={project.name}
              image={project.image}
              description={project.description}
              link={project.live}
              github={project.github}
            />
          ))}
          {/* <Project title='Project 1' />
          <Project title='Project 2' />
          <Project title='Project 3' />


          <Project title='Project 4' />
          <Project title='Project 5' /> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
