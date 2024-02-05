import { Label, Slider } from "mobrix-ui";
import { SkillSetProps } from "./types";

const SkillSet = ({ skills }: SkillSetProps) => (
  <div className="flex flex-col px-3">
    {skills.map((skill) => (
      <div className="flex flex-col py-1 mb-7">
        <Label className="m-auto text-2xl text-center px-3">{skill.name}</Label>
        <Slider
          style={{
            height: "fit-content",
          }}
          className="mt-3"
          hover={false}
          readOnly
          value={skill.expertise}
        />
      </div>
    ))}
  </div>
);

export default SkillSet;
