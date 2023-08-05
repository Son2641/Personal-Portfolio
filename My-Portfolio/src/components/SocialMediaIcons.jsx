const SocialMediaIcons = () => {
  return (
    <div className='flex justify-center md:justify-start my-10 gap-3'>
      <a
        className='hover:opacity-50 transition duration-500'
        href='https://www.linkedin.com/in/louie-jason-miranda-36ba2b158'
        target='_blank'
        rel='noreferrer'
      >
        <img alt='linkedin-link' src='../assets/linkedin.png' />
      </a>
      <a
        className='hover:opacity-50 transition duration-500'
        href='mailto:jason.miranda09@gmail.com'
        target='_blank'
        rel='noreferrer'
      >
        <img alt='email-to' src='../assets/gmail.png' />
      </a>
      <a
        className='hover:opacity-50 transition duration-500'
        href='https://github.com/Son2641'
        target='_blank'
        rel='noreferrer'
      >
        <img alt='github-link' src='../assets/github.png' />
      </a>
      <a
        className='hover:opacity-50 transition duration-500'
        href='https://gitlab.com/Son2641'
        target='_blank'
        rel='noreferrer'
      >
        <img alt='gitlab-link' src='../assets/gitlab.png' />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
