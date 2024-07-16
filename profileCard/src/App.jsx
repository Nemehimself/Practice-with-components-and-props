import "./App.css";
import PropTypes from "prop-types";

const skills = [
  { skill: "HTML + CSS", level: "advanced", color: "#f16529", emoji: "💪🏾" },
  { skill: "JavaScript", level: "advanced", color: "#2965f1", emoji: "💪🏾" },
  { skill: "React", level: "advanced", color: "#f0db4f", emoji: "💪🏾" },
  { skill: "TypeScript", level: "intermediate", color: "#61dbfb", emoji: "👍" },
  { skill: "Web design", level: "intermediate", color: "#68a063", emoji: "👍" },
  { skill: "Git", level: "intermediate", color: "#4db33d", emoji: "👍" },
];

function App() {
  return (
    <div className="container">
      <Card />
    </div>
  );
}

function Card() {
  return (
    <div className="card">
      <Avatar />
      <Data />
      <Skillset />
    </div>
  );
}

function Avatar() {
  return <img src="public/Valentine Onyekachi Photo.jpeg" alt="avatar" />;
}

function Data() {
  return (
    <div className="data">
      <h1>Valentine Onyekachi</h1>
      <Intro />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <p>
        Hey, I&apos;m Valentine Onyekachi, a software engineer with a passion
        for building robust and scalable web applications. With a strong
        foundation in HTML, CSS, and JavaScript, I craft beautiful and intuitive
        user interfaces that engage and delight users. But I don&apos;t stop
        there – I bring these interfaces to life using React, harnessing its
        power to create dynamic and responsive frontend experiences.
      </p>
    </div>
  );
}

function Skillset() {
  return (
    <div>
      <ul className="skillList">
        {skills.map((skill, index) => (
          <Skill
            key={index}
            skill={skill.skill}
            emoji={skill.emoji}
            color={skill.color}
          />
        ))}

        {/* <Skill className="skill-html" emoji="💪🏾" name="HTML + CSS" />
        <Skill className="skill-js" emoji="💪🏾" name="JavaScript" />
        <Skill className="skill-rc" emoji="💪🏾" name="React" />
        <Skill className="skill-ts" emoji="👍" name="TypeScript" />
        <Skill className="skill-wd" emoji="👍" name="Web design" />
        <Skill className="skill-git" emoji="👍" name="Git" /> */}
      </ul>
    </div>
  );
}

function Skill({ skill, color, emoji }) {
  return (
    <li className="skill-item" style={{ backgroundColor: color }}>
      {emoji} {skill}
    </li>
  );
}

Skill.propTypes = {
  emoji: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default App;
