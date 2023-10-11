import Image from 'next/image'
import { BsTerminal, BsFillMoonFill } from "react-icons/bs";
import ProjectCard from './components/ProjectCard';
import { BiLogoReact, BiLogoNodejs, BiLogoMongodb, BiLinkExternal, BiMessageAltDetail } from "react-icons/bi"
import { SiExpress } from "react-icons/si"

// import projects from './data/projects';

export default function Home() {
  return (
    <div className='bg-[#0a0a0a] text-white'>

      {/* Navbar */}
      <nav className='flex justify-between py-8 px-12'>
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
        <h1 className='font-bold text-4xl md:text-5xl text-center'>Software Developer, Full Stack Developer</h1>
        <p className='text-center text-gray-200 text-2xl mt-4 mb-10'>I love developing things that live on the internet.</p>

        <Image className='rounded-full mb-20' src="/avatar.png" alt='Avatar-Bilal Zahid' width={250} height={250} />

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
        <div className='container flex justify-center md:flex-row flex-col flex-wrap mx-auto mt-[-10rem] '>
          {/* {projects.map((project, index) => (
          <div key={index} className='md:my-4'>
            <ProjectCard description={project.description} link={project.link} icons={project.icons} />
          </div>
          ))} */}
          <div className="bg-[#141C3A] shadow-lg text-bluish md:w-[23rem] md:h-80 flex flex-col py-10 px-3 mr-0 md:mr-6 rounded-xl items-center justify-center gap-6 mb-10 md:mb-0">
            <div className="flex gap-2">
              <BiLogoReact className="w-10 h-10" />
              <BiLogoNodejs className="w-10 h-10" />
              <SiExpress className="w-10 h-10" />
              <BiLogoMongodb className="w-10 h-10" />
            </div>
            <p className="md:max-w-[18rem] text-center">A data-oriented, responsive admin panel dashboard.</p>
            <button className='bg-blue-500 flex items-center gap-2 text-white px-4 py-2 rounded-lg'>
              <BiLinkExternal /> mern-admin.app
            </button>
          </div>
          <div className="bg-[#141C3A] shadow-lg text-bluish md:w-[23rem] md:h-80 flex flex-col py-10 px-3 mr-0 md:mr-6 rounded-xl items-center justify-center gap-6 mb-10 md:mb-0">
            <div className="flex gap-2">
              <BiLogoReact className="w-10 h-10" />
              <BiLogoNodejs className="w-10 h-10" />
              <SiExpress className="w-10 h-10" />
              <BiLogoMongodb className="w-10 h-10" />
            </div>
            <p className="md:max-w-[18rem] text-center">A data-oriented, responsive admin panel dashboard.</p>
            <button className='bg-blue-500 flex items-center gap-2 text-white px-4 py-2 rounded-lg'>
              <BiLinkExternal /> mern-admin.app
            </button>
          </div>
          <div className="bg-[#141C3A] shadow-lg text-bluish md:w-[23rem] md:h-80 flex flex-col py-10 px-3 mr-0 md:mr-6 rounded-xl items-center justify-center gap-6 mb-10">
            <div className="flex gap-2">
              <BiLogoReact className="w-10 h-10" />
              <BiLogoNodejs className="w-10 h-10" />
              <SiExpress className="w-10 h-10" />
              <BiLogoMongodb className="w-10 h-10" />
            </div>
            <p className="md:max-w-[18rem] text-center">A data-oriented, responsive admin panel dashboard.</p>
            <button className='bg-blue-500 flex items-center gap-2 text-white px-4 py-2 rounded-lg'>
              <BiLinkExternal /> mern-admin.app
            </button>
          </div>
          <div className="bg-[#141C3A] shadow-lg text-bluish md:w-[23rem] md:h-80 flex flex-col py-10 px-3 mr-0 md:mr-6 rounded-xl items-center justify-center gap-6 mb-10 md:mb-0">
            <div className="flex gap-2">
              <BiLogoReact className="w-10 h-10" />
              <BiLogoNodejs className="w-10 h-10" />
              <SiExpress className="w-10 h-10" />
              <BiLogoMongodb className="w-10 h-10" />
            </div>
            <p className="md:max-w-[18rem] text-center">A data-oriented, responsive admin panel dashboard.</p>
            <button className='bg-blue-500 flex items-center gap-2 text-white px-4 py-2 rounded-lg'>
              <BiLinkExternal /> mern-admin.app
            </button>
          </div>
          <div className="bg-[#141C3A] shadow-lg text-bluish md:w-[23rem] md:h-80 flex flex-col py-10 px-3 mr-0 md:mr-6 rounded-xl items-center justify-center gap-6 mb-10 md:mb-0">
            <div className="flex gap-2">
              <BiLogoReact className="w-10 h-10" />
              <BiLogoNodejs className="w-10 h-10" />
              <SiExpress className="w-10 h-10" />
              <BiLogoMongodb className="w-10 h-10" />
            </div>
            <p className="md:max-w-[18rem] text-center">A data-oriented, responsive admin panel dashboard.</p>
            <button className='bg-blue-500 flex items-center gap-2 text-white px-4 py-2 rounded-lg'>
              <BiLinkExternal /> mern-admin.app
            </button>
          </div>
          <div className="bg-[#141C3A] shadow-lg text-bluish md:w-[23rem] md:h-80 flex flex-col py-10 px-3 mr-0 md:mr-6 rounded-xl items-center justify-center gap-6 mb-10 md:mb-0">
            <div className="flex gap-2">
              <BiLogoReact className="w-10 h-10" />
              <BiLogoNodejs className="w-10 h-10" />
              <SiExpress className="w-10 h-10" />
              <BiLogoMongodb className="w-10 h-10" />
            </div>
            <p className="md:max-w-[18rem] text-center">A data-oriented, responsive admin panel dashboard.</p>
            <button className='bg-blue-500 flex items-center gap-2 text-white px-4 py-2 rounded-lg'>
              <BiLinkExternal /> mern-admin.app
            </button>
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
      <h2 className='text-tertiary font-bold text-3xl text-center mb-10'>Projects created with WordPress</h2>
    </div>
  )
} 