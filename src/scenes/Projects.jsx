import LineGradient from '../components/LineGradient';
import { motion } from 'framer-motion';
import useMediaQuery from '../hooks/useMediaQuery';

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, description, link }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const mobileOverlayStyles = `absolute bottom-0 opacity-80 h-1/2 w-full bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(' ').join('-').toLowerCase();
  const isAboveSmallScreens = useMediaQuery('(min-width:768px)');
  return isAboveSmallScreens ? (
    <motion.div
      variants={projectVariant}
      className='relative'
    >
      <div className={overlayStyles}>
        <p className='text-2xl font-playfair'>{title}</p>
        <p className='mt-7'>{description}</p>
        <a
          href={link}
          target='_blank'
          rel='noreferrer'
          className='font-semibold text-red text-lg tracking-widest mt-4 hover:bg-deep-blue hover:text-white duration-500 px-3 py-1'
        >
          LINK
        </a>
      </div>
      <img
        src={`../assets/${projectTitle}.png`}
        alt={projectTitle}
        className='w-full h-[400px] object-center'
      />
    </motion.div>
  ) : (
    <div className='relative'>
      <div className={mobileOverlayStyles}>
        <p className='text-2xl font-playfair'>{title}</p>
        <p className='mt-7'>{description}</p>
        <a
          href={link}
          target='_blank'
          rel='noreferrer'
          className='font-semibold text-red text-lg tracking-widest mt-4 hover:bg-deep-blue hover:text-white duration-500 px-3 py-1'
        >
          LINK
        </a>
      </div>
      <img
        src={`../assets/${projectTitle}.png`}
        alt={projectTitle}
        className='w-full h-[400px] object-center'
      />
    </div>
  );
};

const Projects = () => {
  return (
    <section
      id='projects'
      className='pt-48 pb-48'
    >
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
        <div>
          <p className='font-playfair font-semibold text-4xl'>
            <span className='text-red'>PRO</span>JECTS
          </p>
          <div className='flex justify-center mt-5'>
            <LineGradient width='w-1/3' />
          </div>
        </div>
        <p className='mt-10 mb-10'>
          These are some projects which helped me in expanding my knowledge and
          becoming a better developer.
        </p>
      </motion.div>
      {/* Project section */}
      <div className='flex justify-center'>
        <motion.div
          className='sm:grid sm:grid-cols-3'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={container}
        >
          {/* row 1 */}
          <div className='flex justify-center text-center items-center p-10 bg-red max-h-[400px] text-2xl font-playfair font-semibold '>
            BEAUTIFUL USER INTERFACES
          </div>
          <Project
            title='Project 1'
            description='Speed Typing Test app, let you check your typing speed in words per minute'
            link='https://arshali2774.github.io/FlashType'
          />
          <Project
            title='Project 2'
            description='Project name generator, it helps user in choosing names for their new project and also checks for domain availability.'
            link='https://arshali2774.github.io/NameIt'
          />
          {/* row 2*/}
          <Project
            title='Project 3'
            description='A static website with SVG animations and minimalist design using GRID.'
            link='https://wonderful-aryabhata-efd2da.netlify.app/'
          />
          <Project
            title='Project 4'
            description='A static website with SVG animations and minimalist design using FLEXBOX.'
            link='https://nifty-benz-321fd3.netlify.app/'
          />
          <Project
            title='Project 5'
            description='A blog website build using AstroJS, to understand how easy is to use AstroJS.'
            link='https://elaborate-begonia-9d1333.netlify.app/'
          />
          <Project
            title='Project 6'
            description='My old portfolio, a static website with SVG animations and minimalist design using FLEXBOX.'
            link='https://hungry-allen-930542.netlify.app/'
          />
          {/* <Project title='Project 5' /> */}
          {/* row 2*/}
          {/* <Project title='Project 6' />
          <Project title='Project 7' /> */}
          <div className='flex justify-center text-center items-center p-10 bg-blue  max-h-[400px] text-2xl font-playfair font-semibold col-span-2'>
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Projects;
