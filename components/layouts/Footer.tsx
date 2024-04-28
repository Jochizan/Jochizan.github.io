import { memo } from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <small className='text-1rem'>sitio diseñado por </small>
      <a className='style-none' href='https://www.linkedin.com/in/jochizan'>
        @jochizan
      </a>
    </footer>
  );
};

export default memo(Footer);
