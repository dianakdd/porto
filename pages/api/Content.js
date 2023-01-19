// import images

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser, BiUserPlus } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine, RiUserAddLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Hero_person from "../../public/person.png";
// import Hero_person from "../../public/dev-ed-wave.png";
import { FaHtml5, FaCss3, FaNodeJs, FaReact, FaSass, FaFigma, FaPhoneAlt, FaUser, FaMapMarkerAlt, FaPaperPlane, FaDribbble, FaInstagram, FaLinkedin, FaRegListAlt, FaPager } from "react-icons/fa";

export const content = {
  
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#about",
      icon: BiUser,
    },
    {
      link: "#skill",
      icon: FaRegListAlt,
    },
    // {
    //   link: "#dark",
    //   icon: BsFillMoonStarsFill,
      
    // },
    {
      link: "#porto",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "JOHN",
    LastName: "ALEX",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "8+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "20+",
        text: "Projects Worked in my career",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },

  bios: [
    {
      id: 1,
      icon: <FaUser />,
      key: "Name",
      value: "Abeezarar"
    },
    {
      id: 2,
      icon: <FaPhoneAlt />,
      key: "Phone",
      value: "+959883271929"
    },
    {
      id: 3,
      icon: <FaPaperPlane />,
      key: "Email",
      value: "abee02@gmail.com"
    }
  ],
};
