import type { FC } from "react";
import { skillTree } from "../../Constants";
import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import "../../assets/css/MosaicStyles.css";
import "devicon/devicon.min.css";

type Skill = {
  name: string;
  icon?: string; // icon is optional
  svgURL?: string; // svgURL is optional
};

const shuffleArray = (array: Skill[]): Skill[] => {
  return array.sort(() => Math.random() - 0.5);
};

const Mosaic: FC = () => {
  const [shuffledSkills, setShuffledSkills] = useState<Skill[]>([]);
  const [hover, setHover] = useState(false);
  useEffect(() => {
    setShuffledSkills(shuffleArray([...skillTree]));
  }, []);

  // Split into 3 rows
  const rows = [
    shuffledSkills.slice(0, Math.ceil(shuffledSkills.length / 3)),
    shuffledSkills.slice(
      Math.ceil(shuffledSkills.length / 3),
      Math.ceil((2 * shuffledSkills.length) / 3)
    ),
    shuffledSkills.slice(Math.ceil((2 * shuffledSkills.length) / 3)),
  ];

  const renderIcons = (skills: Skill[]) => {
    return skills.map((skill, index) => (
      <div key={index} className="icon-wrapper" style={{ margin: "10px" }}>
        {skill.icon && (
          <i
            className={`${skill.icon} ${hover ? "colored" : ""} `}
            title={skill.name}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
            style={{ fontSize: "96px", color: hover == false ? "white" : "" }}
          ></i>
        )}
        {skill.svgURL && (
          <img
            src={skill.svgURL}
            alt={skill.name}
            title={skill.name}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
            style={{
              height: "96px",
              width: "96px",
              filter:
                hover == false ? "brightness(0) saturate(0) invert(1)" : "",
            }}
          />
        )}
      </div>
    ));
  };

  return (
    <div
      className="mosaic-container marquee-content"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {rows.map((row, index) => (
        <Marquee
          key={index}
          pauseOnHover={true}
          gradient={false}
          speed={50}
          className=""
        >
          {renderIcons(row)}
        </Marquee>
      ))}
    </div>
  );
};

export default Mosaic;
