import { BiLogoReact, BiLogoNodejs, BiLogoMongodb, BiLinkExternal } from "react-icons/bi"
import { SiExpress } from "react-icons/si"
type CardProps = {
    description: string
    link: string
    children: React.ReactNode
}
function ProjectCard({ description, link, children }: CardProps) {
    return (
        <div className="bg-[#141C3A] shadow-lg text-bluish flex flex-col py-10 px-3 mr-0 md:mr-6 rounded-xl items-center justify-center gap-6">
          <div className="flex gap-2">
            {children}
          </div>
          <p className="md:max-w-[18rem] text-center">{description}</p>
          <button className='bg-blue-500 flex items-center gap-2 text-white px-4 py-2 rounded-lg'>
            <BiLinkExternal /> {link.slice(8, 20) + "..."}
            </button>
        </div>
    )
}

export default ProjectCard