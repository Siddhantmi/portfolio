import Container from '@/components/utility/Container';
import { TypingTitle } from '@/components/utility/CustomTexts';
import SocialIcon from '@/components/SocialIcon';
import {
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from '@/utils/icons';

const Footer = () => {
  return (
    <Container customStyles='mx-auto max-w-7xl px-4 pb-5 pt-5 text-slate-color sm:px-6   sm:pt-32 lg:px-8'>
      <TypingTitle title="Let's talk" />
      <p className=' text-md mt-8 w-full px-2 text-justify leading-normal sm:w-[550px] sm:px-5 sm:text-lg lg:ml-20 lg:w-[700px] lg:px-0 '>
       Feel free to reach out – I&apos;m here to help
        and chat!
      </p>
      <div className='mx-auto mt-4 flex w-full flex-col items-center justify-start px-2 sm:flex-row lg:ml-20 lg:w-[750px] lg:flex-row  lg:px-0  '>
        <div className='flex flex-col items-center'>
          <SocialIcon
            largeIcon={<MailIcon />}
            aHref='mailto:siddhantmishrabusy949@gmail.com'
            aText='siddhantmishrabusy949@gmail.com'
            width='w-[334px]'
            textStyle='font-semibold ml-2'
          />

          <SocialIcon
            largeIcon={<PhoneIcon />}
            aHref='tel:+917459939492'
            aText='+917459939492'
            width='w-[200px]'
            textStyle='font-semibold ml-1'
          />
        </div>
        <div className=' flex w-full flex-row flex-wrap items-center justify-center sm:w-48 '>
          <SocialIcon
            aHref='https://github.com/siddhantmi'
            icon={<GithubIcon />}
          />
          <SocialIcon
            aHref='https://bd.linkedin.com/in/siddhantmishra949'
            icon={<LinkedinIcon />}
          />
          <SocialIcon
            aHref='https://facebook.com/siddhantmishra949'
            icon={<FacebookIcon />}
          />
          <SocialIcon
            aHref='https://wa.me/917459939492'
            icon={<WhatsappIcon />}
          />
          <SocialIcon aHref='https://t.me/siddhantmishra949' icon={<TelegramIcon />} />{' '}
          <SocialIcon
            aHref='https://twitter.com/siddhantmishra'
            icon={<TwitterIcon />}
            width='hidden sm:block'
          />
        </div>
      </div>
      {/*  */}
    </Container>
  );
};

export default Footer;
