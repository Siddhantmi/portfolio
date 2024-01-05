import Image from 'next/image';
import Link from 'next/link';
import Container from './utility/Container';
import { TypingTitle } from './utility/CustomTexts';
import GithubCalendarComponent from './utility/GithubCalendar';

const GithubContribution = () => (
    <Container customStyles='mx-auto mb-0 mt-5 max-w-7xl px-2 sm:mt-20 sm:px-6 lg:px-8'>
        <div>
            {/* Coding Time and Lines */}
            <TypingTitle title='How Active I am! on Github' />
            <img
                src='https://github-widgetbox.vercel.app/api/profile?username=siddhantmi&data=followers,repositories,stars,commits&theme=nautilus'
                alt='github stats'
                className='mx-0 sm:mx-auto'
            />
            <div className='my-5 flex flex-col items-center justify-between gap-5 sm:mx-36 sm:gap-0 lg:flex-row  '>
                <img
                    src='https://github-readme-stats.vercel.app/api?username=siddhantmi&show_icons=true&theme=transparent'
                    alt='github stats'
                    className='mb-5 sm:mb-0'
                />
                {/* Top Language */}
                <img
                    src='https://github-readme-stats.vercel.app/api/top-langs/?username=siddhantmi&theme=transparent&layout=compact'
                    alt='github stats'
                />
            </div>
            <div className='mt-8 flex flex-col items-center justify-between gap-5 sm:mx-36 sm:mt-14 sm:gap-0 lg:flex-row'>
                My GitHub working chart
            </div>
            {/* Github Contribution Calender */}
            <GithubCalendarComponent />
        </div>
    </Container>
);

export default GithubContribution;
