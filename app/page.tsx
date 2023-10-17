import Image from 'next/image'
import { BsTerminal, BsFillMoonFill, BsStackOverflow, BsEnvelope } from "react-icons/bs";
import ProjectCard from './components/ProjectCard';
import { BiLogoReact, BiLogoNodejs, BiLogoMongodb, BiLinkExternal, BiMessageAltDetail, BiLogoLinkedin } from "react-icons/bi"
import { SiExpress } from "react-icons/si"
import ReviewStars from './components/ReviewStars';
import { AiOutlineGithub, AiOutlineSend, AiOutlineTwitter } from 'react-icons/ai';
import { TbHandRock } from 'react-icons/tb';
import Reveal from './components/Reveal';
// import projects from './data/projects';

export default function Home() {

  return (
    <div className='bg-[#0a0a0a] text-white'>

      {/* Navbar */}

      <nav className='flex justify-between py-8 px-12' data-aos="fade-up">
        <div>
          <Image width={50} height={50} src="/favicon-32.png" alt='Portfolio - Bilal Zahid Full Stack Developer' />
        </div>
        <div className='space-x-8 flex items-center'>
          <button className='toggleMode'><BsFillMoonFill className='h-6 w-6' /></button>
          <button>Resume</button>
          <button className='transition-all duration-300 text-primary border-2 rounded-3xl py-2 text-md px-4 border-primary hover:bg-primary hover:text-white'>Say Hello</button>
        </div>
      </nav>


      {/* Hero */}
      <div className='flex flex-col items-center pt-20 px-4 md:px-0'>
        <Reveal y={200}>
          <>
            <h1 className='font-bold text-4xl md:text-5xl text-center'>Software Developer, Full Stack Developer</h1>
            <p className='text-center text-gray-200 text-2xl mt-4 mb-10'>I love developing things that live on the internet.</p>
          </>
        </Reveal>
        <Reveal duration={1} userX={200} delay={0.5}>
          <Image className='rounded-full mb-20' src="/avatar.png" alt='Avatar-Bilal Zahid' width={250} height={250} />
        </Reveal>

        <Image alt='Devices' src="/hero-devices.svg" width={900} height={400} />
      </div>

      {/* Introduction */}

      <div className='bg-primary pt-32 pb-60 text-center'>
        <h2 className='font-bold text-3xl mb-8'>Hi, I&apos;m Bilal. Nice to meet you.</h2>
        <p className='max-w-xl mx-auto text-lg'>I've been on a fulfilling journey as a full-stack developer for over a year now. I have worked remotely for agencies and individuals and have had the pleasure of working with talented teams to develop digital products that meet the needs of both businesses and consumers. My quiet confidence and natural curiosity drive me to constantly improve, and I'm always excited to tackle the next software problem that comes my way.</p>
      </div>

      {/* Technologies */}
      <div className='mb-32 container flex md:flex-row flex-col px-2 md:px-10 mt-[-10rem]'>
        {/* Single technology Column */}
        <div className='text-center flex flex-col items-center py-16 px-8 border-2 border-bluish bg-[#141C3A]'>
          <div className="bg-secondary p-4 rounded-full mb-8">
            <BsTerminal className='text-black h-16 w-16' />
          </div>
          <h3 className='text-tertiary font-bold text-2xl'>Software</h3>
          <p className='text-bluish mb-8 text-lg'>I value simple software structure, clean design patterns, and thoughtful interactions.</p>

          <p className='text-primary mb-2 text-xl'>Things I enjoy making:</p>
          <span className='text-bluish mb-8 text-lg'>UX, UI, Web, Apps</span>

          <p className='text-primary mb-2 text-xl'>Tools:</p>
          <ul className='text-bluish text-center text-lg'>
            <li>Electron</li>
            <li>C</li>
            <li>React Native</li>
            <li>Python</li>
            <li>Github</li>
            <li>SQL</li>
          </ul>
        </div>

        <div className='text-center flex flex-col items-center py-16 px-8 border-2 border-bluish bg-[#141C3A]'>
          <div className="bg-secondary p-4 rounded-full mb-8">
            <BsTerminal className='text-black h-16 w-16' />
          </div>
          <h3 className='text-tertiary font-bold text-2xl'>Software</h3>
          <p className='text-bluish mb-8 text-lg'>I value simple software structure, clean design patterns, and thoughtful interactions.</p>

          <p className='text-primary mb-2 text-xl'>Things I enjoy making:</p>
          <span className='text-bluish mb-8 text-lg'>UX, UI, Web, Apps</span>

          <p className='text-primary mb-2 text-xl'>Tools:</p>
          <ul className='text-bluish text-center text-lg'>
            <li>Electron</li>
            <li>C</li>
            <li>React Native</li>
            <li>Python</li>
            <li>Github</li>
            <li>SQL</li>
          </ul>
        </div>

        <div className='text-center flex flex-col items-center py-16 px-8 border-2 border-bluish bg-[#141C3A]'>
          <div className="bg-secondary p-4 rounded-full mb-8">
            <BsTerminal className='text-black h-16 w-16' />
          </div>
          <h3 className='text-tertiary font-bold text-2xl'>Software</h3>
          <p className='text-bluish mb-8 text-lg'>I value simple software structure, clean design patterns, and thoughtful interactions.</p>

          <p className='text-primary mb-2 text-xl'>Things I enjoy making:</p>
          <span className='text-bluish mb-8 text-lg'>UX, UI, Web, Apps</span>

          <p className='text-primary mb-2 text-xl'>Tools:</p>
          <ul className='text-bluish text-center text-lg'>
            <li>Electron</li>
            <li>C</li>
            <li>React Native</li>
            <li>Python</li>
            <li>Github</li>
            <li>SQL</li>
          </ul>
        </div>

      </div>


      {/* RECENT WORK */}
      <div className='text-center space-y-6 py-20'>
        <h2 className='text-tertiary font-bold text-3xl'>My Recent Work</h2>
        <p className='text-bluish'>Here are a few past projects I've worked on. Want to see more? <a className='text-blue-600 transition-all duration-300 underline hover:decoration-transparent' href='mailto:bilalzhd0@gmail.com'>Email me</a>.</p>
      </div>

      {/* Project Cards */}
      <div className='container flex flex-col items-center pb-20'>
        <div className='flex md:flex-row flex-col md:space-x-10'>
          <Image src="/work/oware.png" alt='Oware' height={350} width={350} className='rounded-2xl' />
          <Image src="/work/oware.png" alt='Oware' height={350} width={350} className='my-10 md:my-0 rounded-2xl' />
          <Image src="/work/oware.png" alt='Oware' height={350} width={350} className='rounded-2xl' />
        </div>
        <div className='flex md:flex-row flex-col justify-center md:space-x-10 mt-10 mb-20'>
          <Image src="/work/oware.png" alt='Oware' height={350} width={350} className='rounded-2xl' />
          <Image src="/work/oware.png" alt='Oware' height={350} width={350} className='rounded-2xl my-10 md:my-0' />
          <Image src="/work/oware.png" alt='Oware' height={350} width={350} className='rounded-2xl' />
        </div>

        <button className='transition-all duration-300 text-primary border-2 rounded-3xl py-[10px] text-lg px-8 border-primary hover:bg-primary hover:text-white'>
          <a href="">Visit Showwcase</a>
        </button>

      </div>
      {/* My Projects */}
      <div className='border-bottom mb-10 border-gray-200'>
        <div className='bg-primary pt-32 pb-60 text-center'>
          <h2 className='font-bold text-3xl mb-8'>My Projects</h2>
          <p className='max-w-xl mx-auto text-lg'>I'm a bit of a project junky. There are some projects that I have built using different technologies.</p>
        </div>
        <div className='container mx-auto mt-[-10rem]'>
          <div className='flex mb-10 justify-center md:flex-row flex-col w-full'>
            <ProjectCard link='https://mern-admin.app' description='A data-oriented, responsive admin panel dashboard.'>
              <BiLogoReact className="w-10 h-10" />
              <BiLogoNodejs className="w-10 h-10" />
              <SiExpress className="w-10 h-10" />
              <BiLogoMongodb className="w-10 h-10" />
            </ProjectCard>
            <ProjectCard link='https://mern-admin.app' description='A data-oriented, responsive admin panel dashboard.'>
              <BiLogoReact className="w-10 h-10" />
              <BiLogoNodejs className="w-10 h-10" />
              <SiExpress className="w-10 h-10" />
              <BiLogoMongodb className="w-10 h-10" />
            </ProjectCard>
            <ProjectCard link='https://mern-admin.app' description='A data-oriented, responsive admin panel dashboard.'>
              <BiLogoReact className="w-10 h-10" />
              <BiLogoNodejs className="w-10 h-10" />
              <SiExpress className="w-10 h-10" />
              <BiLogoMongodb className="w-10 h-10" />
            </ProjectCard>
          </div>
          <div className='flex justify-center md:flex-row flex-col w-full'>
            <ProjectCard link='https://mern-admin.app' description='A data-oriented, responsive admin panel dashboard.'>
              <BiLogoReact className="w-10 h-10" />
              <BiLogoNodejs className="w-10 h-10" />
              <SiExpress className="w-10 h-10" />
              <BiLogoMongodb className="w-10 h-10" />
            </ProjectCard>
            <ProjectCard link='https://mern-admin.app' description='A data-oriented, responsive admin panel dashboard.'>
              <BiLogoReact className="w-10 h-10" />
              <BiLogoNodejs className="w-10 h-10" />
              <SiExpress className="w-10 h-10" />
              <BiLogoMongodb className="w-10 h-10" />
            </ProjectCard>
            <ProjectCard link='https://mern-admin.app' description='A data-oriented, responsive admin panel dashboard.'>
              <BiLogoReact className="w-10 h-10" />
              <BiLogoNodejs className="w-10 h-10" />
              <SiExpress className="w-10 h-10" />
              <BiLogoMongodb className="w-10 h-10" />
            </ProjectCard>
          </div>

          {/* RECENT WORK */}
          <div className='text-center space-y-10 py-20 flex flex-col items-center'>
            <div className='space-y-6'>
              <h2 className='text-tertiary font-bold text-3xl'>Interested in collaborating with me?</h2>
              <p className='text-bluish'>I&apos;m always open to discussing product work or partnership opportunities.</p>
            </div>
            <button className='transition-all items-center gap-2 duration-300 text-primary border-2 rounded-3xl py-3 text-md px-5 text-xl border-primary hover:bg-primary hover:text-white flex'>
              <BiMessageAltDetail /> Start a conversation
            </button>
          </div>
        </div>
      </div>
      {/* PROJECTS WITH WORDPRESS */}
      <div id='wordpress-work' className='border-t border-gray-200/50 p-4 md:p-20'>
        <h2 className='text-tertiary font-bold text-3xl text-center mb-10'>Projects created with WordPress</h2>

        <div id="cards" className="flex md:flex-row flex-col gap-6">
          {/* single card */}
          <div className="bg-[#141C3A] shadow-lg text-bluish flex md:flex-row flex-col p-10 mr-0 rounded-xl items-center justify-between gap-6">
            <Image src="/work/madinakabob.jpg" className='rounded-xl' height={300} width={300} alt="" />
            <div className="flex flex-col justify-center gap-4">
              <h4 className="text-xl text-center">GTA Luggage</h4>
              <p className='text-center'>Elementor, WooCommerce, Product Swatches, YITH, AIOSEO</p>
              <button className='bg-blue-500 justify-center flex items-center gap-2 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300'>
                <BiLinkExternal />
                <span className='hidden md:block'>gtaluggage.com</span>
              </button>
            </div>
          </div>
          <div className="bg-[#141C3A] shadow-lg text-bluish flex md:flex-row flex-col p-10 mr-0 rounded-xl items-center justify-between gap-6">
            <Image src="/work/madinakabob.jpg" className='rounded-xl' height={300} width={300} alt="" />
            <div className="flex flex-col justify-center gap-4">
              <h4 className="text-xl text-center">GTA Luggage</h4>
              <p className='text-center'>Elementor, WooCommerce, Product Swatches, YITH, AIOSEO</p>
              <button className='bg-blue-500 justify-center flex items-center gap-2 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300'>
                <BiLinkExternal />
                <span className='hidden md:block'>gtaluggage.com</span>
              </button>
            </div>
          </div>
          {/* single card end */}
        </div>
        <div id="cards" className="flex md:flex-row flex-col gap-6 my-6">
          {/* single card */}
          <div className="bg-[#141C3A] shadow-lg text-bluish flex md:flex-row flex-col p-10 mr-0 rounded-xl items-center justify-between gap-6">
            <Image src="/work/madinakabob.jpg" className='rounded-xl' height={300} width={300} alt="" />
            <div className="flex flex-col justify-center gap-4">
              <h4 className="text-xl text-center">GTA Luggage</h4>
              <p className='text-center'>Elementor, WooCommerce, Product Swatches, YITH, AIOSEO</p>
              <button className='bg-blue-500 justify-center flex items-center gap-2 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300'>
                <BiLinkExternal />
                <span className='hidden md:block'>gtaluggage.com</span>
              </button>
            </div>
          </div>
          <div className="bg-[#141C3A] shadow-lg text-bluish flex md:flex-row flex-col p-10 mr-0 rounded-xl items-center justify-between gap-6">
            <Image src="/work/madinakabob.jpg" className='rounded-xl' height={300} width={300} alt="" />
            <div className="flex flex-col justify-center gap-4">
              <h4 className="text-xl text-center">GTA Luggage</h4>
              <p className='text-center'>Elementor, WooCommerce, Product Swatches, YITH, AIOSEO</p>
              <button className='bg-blue-500 justify-center flex items-center gap-2 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300'>
                <BiLinkExternal />
                <span className='hidden md:block'>gtaluggage.com</span>
              </button>
            </div>
          </div>
          {/* single card end */}
        </div>
      </div>
      {/* Review Section */}
      <div className='text-center text-tertiary p-4 md:pt-20 md:pb-32 md:px-20'>
        <h2 className='font-bold text-3xl mb-2'>Already Worked With Me?</h2>
        <p className='mb-4'>Rate my work below</p>
        <form className='flex flex-col items-center w-full gap-4'>
          <ReviewStars />
          <textarea className='bg-[#141C3A] resize-none rounded-xl w-full md:max-w-2xl border border-tertiary focus:outline-none p-4 text-white' name="reviewText" id="reviewText" rows={6} ></textarea>
          <button className='transition-all duration-300 text-primary border-2 rounded-3xl py-2 text-lg px-4 border-primary hover:bg-primary hover:text-white flex items-center gap-4'>
            Submit review <AiOutlineSend />
          </button>
        </form>
      </div>

      {/* Footer inner card start */}
      <div className='relative z-1 md:mb-[-8rem] bg-[#141C3A] gap-4 md:gap-0 my-4 md:my-0 flex md:flex-row flex-col justify-between items-center text-white p-16 mx-10 rounded-2xl shadow shadow-gray-900 mt--2'>
        <h4 className='text-3xl font-bold'>Start a project</h4>
        <p className='max-w-md text-center text-lg'>Interested in working together? We should queue up a time to chat. I'll buy the coffee.</p>
        <button className='transition-all duration-300 text-primary border-2 rounded-3xl py-2 text-xl px-5 border-primary hover:bg-primary hover:text-white flex items-center gap-4'>
          <TbHandRock />
          Let&apos;s do this
        </button>
      </div>
      {/* Footer inner card end */}
      <footer className='bg-primary pt-52 pb-20 px-32 text-center text-[#d9bcff]'>

        <p className='text-2xl md:max-w-xs mx-auto'>Living, learning, & leveling up one day at a time.</p>
        <div className='flex gap-8 justify-center icons mt-10 mb-16'>
          <div className="border-2 border-tertiary p-3 rounded-full hover:bg-[#d9bcff] hover:text-primary transition-all duration-300">
            <AiOutlineTwitter className='h-6 w-6' />
          </div>
          <div className="border-2 border-tertiary p-3 rounded-full hover:bg-[#d9bcff] hover:text-primary transition-all duration-300">
            <AiOutlineGithub className='h-6 w-6' />
          </div>
          <div className="border-2 border-tertiary p-3 rounded-full hover:bg-[#d9bcff] hover:text-primary transition-all duration-300">
            <BiLogoLinkedin className='h-6 w-6' />
          </div>
          <div className="border-2 border-tertiary p-3 rounded-full hover:bg-[#d9bcff] hover:text-primary transition-all duration-300">
            <BsStackOverflow className='h-6 w-6' />
          </div>
          <div className="border-2 border-tertiary p-3 rounded-full hover:bg-[#d9bcff] hover:text-primary transition-all duration-300">
            <BsEnvelope className='h-6 w-6' />
          </div>
        </div>

        <p className='text-xl flex gap-2 justify-center text-center'>
          <span>&copy;</span> Bilal Zahid</p>
      </footer>
    </div>
  )
}



