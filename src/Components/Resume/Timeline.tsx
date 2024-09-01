import { motion, useAnimation } from "framer-motion";
import { useEffect, type FC } from "react";
import { useInView } from "react-intersection-observer";
import { IonIcon } from "@ionic/react";

type TimelineItemProps = {
  title: string;
  date: string;
  description: string;
};

type TimelineProps = {
  TimelineObj: TimelineItemProps[];
  title: string;
  icon: string;
};

const TimelineItem: FC<TimelineItemProps> = ({ title, date, description }) => {
  const controls = useAnimation();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const lineVariants = {
    hidden: { height: 0 },
    visible: { height: "100%" },
  };

  return (
    <li className="timeline-item" ref={ref}>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={textVariants}
        transition={{ duration: 0.5 }}
      >
        <h4 className="h4 timeline-item-title">{title}</h4>
        <span>{date}</span>
        <p className="timeline-text">{description}</p>
      </motion.div>
      <motion.div
        className="timeline-line"
        initial="hidden"
        animate={controls}
        variants={lineVariants}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </li>
  );
};

const Timeline: FC<TimelineProps> = ({ TimelineObj, title, icon }) => {
  return (
    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          <IonIcon icon={icon} />
        </div>
        <h3 className="h3">{title}</h3>
      </div>
      <ol className="timeline-list">
        {TimelineObj.map((item, index) => {
          return (
            <TimelineItem
              key={index}
              title={item.title}
              date={item.date}
              description={item.description}
            />
          );
        })}
      </ol>
    </section>
  );
};

export default Timeline;
