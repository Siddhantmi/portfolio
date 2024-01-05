/* eslint-disable @next/next/no-img-element */

import Container from '@/components/utility/Container';
import Project from '@/sections/Project';


export default function AllProjects() {
  return (
    <>
      <Container customStyles='mx-auto mb-0 mt-5 max-w-7xl px-2 sm:mt-20 sm:px-6 lg:px-8'>
      <Project />
      </Container>
    </>
  );
}
