import "./style/Education.css";
import institute from "../../assets/Education/SchoolFinal.gif";

function EducationCard({ name, place, year, grades, course }) {
  return (
    <div className="Education-card-container">
      <img
        src={institute}
        alt="institute"
        height={70}
        width={70}
      />
      <br />
      <span style={{ fontSize: "20px" }}>
        <b>{name}</b>
      </span>
      <br />
      <span style={{ lineHeight: "2" }}>
        <i>{place}</i>
      </span>
      <br />
      <span>{course}</span>
      <br />
      <span>( {year} )</span>
      <br />
      <span>{grades}</span>
    </div>
  );
}

export default EducationCard;
