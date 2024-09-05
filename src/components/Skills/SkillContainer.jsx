import "./style/skill.css";

function SkillContainer({ skill }) {
  return (
    <div>
      <div className="skill-body-container">
        {skill.icon && (
          <img src={skill.icon} alt={skill.name} height={50} width={50} />
        )}
        {skill.name && <span>{skill.name}</span>}
      </div>
    </div>
  );
}

export default SkillContainer;
