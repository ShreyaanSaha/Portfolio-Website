import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { skills } from "../skills";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="skills" className="pt-10 pb-10">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32 mb-10">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            Welcome to the Skills section of my portfolio, where I showcase the diverse set of capabilities that define my professional profile.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="https://res.cloudinary.com/deqvxfp7f/image/upload/v1708677385/Portfolio/skills-image_npwf0b.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="https://res.cloudinary.com/deqvxfp7f/image/upload/v1708677385/Portfolio/skills-image_npwf0b.png" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div name="experience" className= "justify-center w-full h-screen">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-ful text-white">
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
                {
                    skills.map(({ id, src, title, style }) => (
                        <div key={id} className={`shadow-md hover:scale-110 duration-500 py-2 rounded-lg ${style}`}>
                          <img src={src} alt={title} className="h-50 w-20 mx-auto" />
                          <p className="mt-4">{title}</p>
                        </div>
                      ))
                }
            </div>
        </div>
    </div>
    </section>
  );
};

export default MySkills;
