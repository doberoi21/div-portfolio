import EducationCard from "./EducationCard";
import "./style/Education.css";
import HeadingSection from "../Heading-Section";

function EducationView() {
  const educationDetails = [
    {
      name: "Illinois Institute of Technology",
      place: "Chicago , USA",
      course: "Master of Computer Science",
      // grades: "Aggregate of 8.9 CGPA",
      year: "2024 - 2026",
    },
    {
      name: "Dronacharya College of Engineering",
      place: "Gurugram , India",
      course: "B.Tech - Computer Science Engineering",
      grades: "Aggregate of 8.9 CGPA",
      year: "2019 - 2023",
    },
    {
      name: "Mira Model School",
      place: "New Delhi , India",
      course: "Classes X  and XII",
      grades: "X : 9.6 CGPA , XII : 82.4% ",
      year: "2014 - 2019",
    },
  ];
  return (
    <section id="education">
    <div>
      <HeadingSection sectionName={"Education"} />
      <div className="Education-container">
        {educationDetails.map((educationDetail) => (
          <EducationCard
            name={educationDetail.name}
            place={educationDetail.place}
            year={educationDetail.year}
            course={educationDetail.course}
            grades={educationDetail.grades}
            key={educationDetail.id}
          />
        ))}
      </div>
    </div>
    </section>
  );
}

export default EducationView;
