import { type FC } from "react";
import "../../assets/css/ChipStyles.css";
type chipProps = {
  name: string;
  icon?: string;
  svgURL?: string;
};
const Chip: FC<chipProps> = ({ name, icon, svgURL }) => {
  const color = "linear-gradient(45deg,#232526,#414345)";

  return (
    <div
      className="chip glowBorder"
      style={{
        background: color,
        borderImageSource: color,
      }}
    >
      <div className="avatar">
        {icon ? (
          <i className={icon + " colored"} title={name}></i>
        ) : (
          <img src={svgURL} alt={name} />
        )}
      </div>
      <span>{name}</span>
    </div>
  );
};

export default Chip;
