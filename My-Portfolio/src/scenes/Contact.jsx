import LineGradient from '../components/LineGradient';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import SocialMediaIcons from '../components/SocialMediaIcons';

const Contact = () => {
  const {
    register,
    trigger,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  const handleFormReset = () => {
    reset();
  };

  return (
    <section id='contact' className='contact py-20'>
      {/* HEADINGS */}
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className='flex justify-end w-full'
      >
        <div>
          <p className='font-playfair font-semibold text-4xl mt-20'>
            <span className='text-blue'>CONTACT ME</span> TO GET STARTED
          </p>

          <div className='flex md:justify-end my-5'>
            <LineGradient width='w-1/2' />
          </div>
        </div>
      </motion.div>

      {/* FORM & IMAGE */}
      <div className='md:flex md:justify-between gap-16 mt-5 rounded-md'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className='basis-1/2 flex justify-center'
        >
          <div className='flex flex-col'>
            <p className='font-playfair font-semibold text-4xl mb-5'>
              Have something in mind?
            </p>
            <p className='font-playfair font-semibold text-2xl'>
              Let's <span className='text-blue'>Collaborate!</span>
            </p>
            <SocialMediaIcons />
          </div>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className='basis-1/2 mt-10 md:mt-0'
        >
          <form
            target='_blank'
            onSubmit={onSubmit}
            action='https://getform.io/f/d0632692-7b3b-4cf1-8eb2-cbaacee17cb1'
            method='POST'
          >
            <input
              className='w-full bg-white font-semibold placeholder-opaque-black p-3 rounded-md text-black'
              type='text'
              placeholder="What's your name?"
              {...register('name', {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className='text-red mt-1'>
                {errors.name.type === 'required' && 'This field is required.'}
                {errors.name.type === 'maxLength' && 'Max length is 100 char.'}
              </p>
            )}

            <input
              className='w-full bg-white font-semibold placeholder-opaque-black p-3 mt-5 rounded-md text-black'
              type='email'
              placeholder="What's your email?"
              {...register('email', {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className='text-red mt-1'>
                {errors.email.type === 'required' && 'This field is required.'}
                {errors.email.type === 'pattern' && 'Invalid email address.'}
              </p>
            )}

            <textarea
              className='w-full bg-white font-semibold placeholder-opaque-black p-3 mt-5 rounded-md text-black'
              name='message'
              placeholder='Send me a message'
              rows='4'
              cols='50'
              {...register('message', {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className='text-red mt-1'>
                {errors.message.type === 'required' &&
                  'This field is required.'}
                {errors.message.type === 'maxLength' &&
                  'Max length is 2000 char.'}
              </p>
            )}
            <div className='flex gap-4'>
              <button
                className='p-5 bg-blue font-semibold text-white mt-5 hover:text-black transition duration-500 rounded-md'
                type='submit'
              >
                Send me a message
              </button>
              <button
                className='p-5 bg-blue font-semibold text-white mt-5 hover:text-black transition duration-500 rounded-md'
                type='button'
                onClick={handleFormReset}
              >
                Reset Form
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
