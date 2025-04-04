import { SkillItem } from "About/About.style";

interface Props{
    readonly skill?:string,
    readonly desc?:string;
  }
export const SkillItemList = ({skill,desc}:Props) => {
    return (
        <SkillItem>
            <div className="front"><span>{skill}</span></div>
            <div className="back"><span>{desc}</span></div>
        </SkillItem>
    )
}