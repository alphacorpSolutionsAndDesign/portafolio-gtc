import { skills } from "@/data/profile";

export function SkillsMarquee() {
  const repeatedSkills = [...skills, ...skills];
  return (
    <div className="marquee mt-10" aria-label="Tecnologías">
      <ul className="marquee-track">
        {repeatedSkills.map((skill, index) => (
          <li className="skill-pill" key={`${skill}-${index}`} aria-hidden={index >= skills.length}>
            <span className="size-1.5 rounded-full bg-accent" />
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
