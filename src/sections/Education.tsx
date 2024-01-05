import Image from 'next/image';
import { myEducation } from '@/utils/data';
import { fadeIn } from '@/utils/motion';
import Container from '@/components/utility/Container';
import TextContainer from '@/components/utility/TextContainer';
import { TypingTitle } from '@/components/utility/CustomTexts';

export default function Education() {
  return (
    <Container customStyles='mx-auto mb-0 mt-5 max-w-7xl overflow-hidden px-2 sm:mt-32 sm:px-6 lg:px-8'>
      <TypingTitle
        title={[
          'My',
          ' Work',
          ' Experience',
     

        ]}
      />

      <div className='mx-auto mt-12 flex w-full flex-col sm:w-4/5 lg:flex-row'>
        
        <TextContainer
          variants={fadeIn('left', 'spring', 0.9, 0.9)}
          customStyles=' flex flex-1 flex-col items-start justify-start'
        >
          {myEducation.map((experience) => (
            <TextContainer
              customStyles=' mx-2 my-4 flex w-full flex-row items-start justify-start sm:mx-0'
              key={experience.year}
            >
              <div className=' mr-12 '>
                <p className=' text-left text-base font-extrabold text-primary-color '>
                  {experience.year}
                </p>
              </div>
              <TextContainer customStyles='flex-1'>
                {experience.work.map((work) => (
                  <TextContainer
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    customStyles=' mb-4 flex flex-col items-start justify-start  '
                    data-tip
                    data-for={work.name}
                    key={work.name}
                  >
                    <div className='  text-left text-base font-extrabold text-primary-color '>
                      {work.name}
                    </div>
                    <div className=' p-text mt-[5px] text-left text-sm leading-normal text-slate-color-lighter '>
                      {work.company}
                    </div>
                    <div className='text-left text-xs text-slate-color '>
                      {work.desc}
                    </div>
                  </TextContainer>
                ))}
              </TextContainer>
            </TextContainer>
          ))}
        </TextContainer>
      </div>
    </Container>
  );
}
