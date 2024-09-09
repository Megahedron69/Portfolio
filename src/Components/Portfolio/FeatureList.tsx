import { type FC } from "react";
import { IonIcon } from "@ionic/react";
import { type FeatureDetail } from "../../Utils/FeatsAndInfo";

interface FeaturesProps {
  features: FeatureDetail[];
}

const FeatureSection: FC<{ feature: FeatureDetail }> = ({ feature }) => {
  return (
    <div className="feature-section">
      {feature.title && (
        <div className="title-container">
          {feature.icon && (
            <span className="icon">
              <IonIcon icon={feature.icon} />
            </span>
          )}
          <h3 className="title">{feature.title}</h3>
        </div>
      )}

      {feature.description && (
        <p className="description">{feature.description}</p>
      )}

      {feature.deployURL && feature.gitURL && (
        <div className="button-container">
          <button className="get-button">
            <a href={feature.deployURL} target="_blank">
              Live Website
            </a>
          </button>
          <button className="git-button">
            <a href={feature.gitURL} target="_blank">
              Github
            </a>
          </button>
        </div>
      )}

      {feature.sections &&
        feature.sections.map((section, index) => (
          <FeatureSection key={index} feature={section} />
        ))}

      {feature.features && (
        <ul className="feature-list">
          {feature.features.map((item, index) =>
            typeof item === "string" ? (
              <li key={index} className="feature-item">
                {item}
              </li>
            ) : (
              <li key={index}>
                <FeatureSection feature={item} />
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
};

// Main Component
const FeaturesComponent: FC<FeaturesProps> = ({ features }) => {
  return (
    <div className="features-container">
      {features.map((feature, index) => (
        <FeatureSection key={index} feature={feature} />
      ))}
    </div>
  );
};

export default FeaturesComponent;
