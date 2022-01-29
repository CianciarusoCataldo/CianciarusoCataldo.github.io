import { SkillSetProps } from "./types";

const SkillSet = ({ skills }: SkillSetProps) => (
  <div className="flex flex-col px-3">
    {skills.map((skill) => (
      <div className="my-2 border-gray-400 border-b-2" key={skill.name}>
        <div className="flex flex-row py-1">
          <div className="flex flex-col w-1/2">
            <label
              htmlFor={skill.name}
              className="m-auto text-2xl text-center px-3"
            >
              {skill.name}
            </label>
          </div>
          <input
            id={skill.name}
            type="range"
            className="w-1/2"
            readOnly
            value={skill.expertise}
          />
        </div>
      </div>
    ))}
  </div>
);

export default SkillSet;
