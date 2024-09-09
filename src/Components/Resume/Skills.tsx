import { type FC } from "react";
import Chip from "./Chips";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import type { Skill } from "../../Utils/Constants";
type SkillCategoryProps = {
  title: string;
  skills: Skill[];
};

const SkillCategory: FC<SkillCategoryProps> = ({ title, skills }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <li className="skills-item" ref={ref}>
      <div className="title-wrapper">
        <h5 className="h5">{title}</h5>
      </div>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <motion.div
            key={index} // Move key here to avoid React warnings
            initial={{
              opacity: 0,
              translateX: index % 2 === 0 ? -50 : 50,
              translateY: -50,
            }}
            animate={
              inView
                ? { opacity: 1, translateX: 0, translateY: 0 }
                : { opacity: 0 }
            }
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <Chip
              key={index}
              name={skill.name}
              icon={skill.icon}
              svgURL={skill.svgURL || ""}
            />
          </motion.div>
        ))}
      </div>
    </li>
  );
};

export default SkillCategory;
