import type { FC } from "react";
import Timeline from "./Timeline";
import { EduTimeLine, CareerTimeline } from "../../Constants";
import { IonIcon } from "@ionic/react";
import { rocketOutline, bookOutline, trendingUpOutline } from "ionicons/icons";
import { skillTree } from "../../Constants";
import SkillCategory from "./Skills";
const Resume: FC = () => {
  return (
    <article className="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>
      <Timeline
        TimelineObj={EduTimeLine}
        title={"Education"}
        icon={bookOutline}
      />
      <Timeline
        TimelineObj={CareerTimeline}
        title="Career"
        icon={trendingUpOutline}
      />
      <section className="skill">
        <div className="title-wrapper">
          <div className="icon-box">
            <IonIcon icon={rocketOutline} />
          </div>
          <h3 className="h3">My Skills</h3>
        </div>
        <ul className="skills-list content-card">
          <SkillCategory
            title="Programming Languages"
            skills={skillTree.slice(0, 12)}
          />
          <SkillCategory title="Database" skills={skillTree.slice(12, 17)} />
          <SkillCategory title="Tools" skills={skillTree.slice(17, 28)} />
          <SkillCategory title="Frameworks" skills={skillTree.slice(28)} />
        </ul>
      </section>
    </article>
  );
};

export default Resume;
