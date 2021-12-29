import "./Overview.scss";

import overviewUtilities from "../../../../assets/mountain-pass.svg";
import overviewCommunity from "../../../../assets/BirdsEyeC.svg";
import overviewGeneral from "../../../../assets/genBird.svg";

function getImage(type) {
  switch (type) {
    case "g":
      return overviewGeneral;
    case "c":
      return overviewCommunity;
    case "u":
      return overviewUtilities;
    default:
      return overviewGeneral;
  }
}

const useCasesG = [
  "Wildfire detection",
  "Risk management",
  "High resolution weather analysis",
];

const useCasesC = [
  "Wildfire detection",
  "Risk management",
  "Utility infrastructure monitoring",
  "High resolution weather analysis",
];

const useCasesU = [
  "Wildfire detection",
  "Risk management",
  "High resolution weather analysis",
  "Community asset monitoring",
  "Protect lives",
];

const descriptionG =
  "Perch Sensing offers a network of fire-detecting environmental sensors installed at high risk locations. The sensor network provides a widely distributed, high resolution view into large scale infrastructure. With the aid of real-time, geographic data, our sensors identify and resolve targeted risk factors.";
const descriptionU =
  "Perch Sensing offers a network of fire-detecting environmental sensors that mount to power lines for utility services. The sensor network provides a widely distributed, high resolution view into large scale infrastructure. With the aid of expressive geospatial data, our sensors identify and resolve targeted risk factors.";
const descriptionC =
  "Perch Sensing offers a network of fire-detecting environmental sensors that mount around the perimeter of communities. The sensor network provides a wide range, high resolution view into large scale infrastructure. With the aid of collected data, our sensors identify and resolve targeted risk factors, protecting communities and saving lives.";

export default function Overview(props) {
  let description;
  let useCases;
  let type = props.audience;

  switch (type) {
    case "g":
      description = descriptionG;
      useCases = useCasesG;
      break;
    case "c":
      description = descriptionC;
      useCases = useCasesC;
      break;
    case "u":
      description = descriptionU;
      useCases = useCasesU;
      break;
    default:
      description = descriptionG;
      useCases = useCasesG;
      break;
  }

  return (
    <section className="Overview">
      <img
        className="overview-display"
        src={getImage(props.audience)}
        alt="Perch Sensor alert"
        loading="lazy"
      />
      <div className="overview-info">
        <h2>A Bird's Eye View</h2>
        <p>{description}</p>
        <h4 className="use-case-title">Use Cases</h4>
        <ul>
          {useCases.map((useCase) => (
            <li key={useCase}>{useCase}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
