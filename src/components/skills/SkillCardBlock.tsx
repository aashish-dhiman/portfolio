import React from "react";
import {
  ReactOriginal,
  NextjsOriginal,
  JavascriptOriginal,
  MaterialuiOriginal,
  NodejsOriginal,
  MysqlOriginal,
  MongodbOriginal,
  PythonOriginal,
  GithubOriginal,
  GitOriginal,
  FigmaOriginal,
  TypescriptOriginal,
  ReduxOriginal,
  BootstrapOriginal,
  CplusplusOriginal,
  CsharpOriginal,
  Css3Original,
  GraphqlPlain,
  SqldeveloperOriginal,
  JiraOriginal,
  TailwindcssOriginal,
  ExpressOriginal,
  SlackPlain,
  PostmanOriginal,
  Html5Original,
  COriginal,
  PrismaOriginal,
} from "devicons-react";
import skill from "@/assets/skill.png";
import Image from "next/image";

interface Props {
  icon: string;
  name: string;
}

const SkillCardBlock = ({ icon, name }: Props) => {
  let IconComponent = null;
  switch (icon) {
    case "ReactOriginal":
      IconComponent = ReactOriginal;
      break;

    case "COriginal":
      IconComponent = COriginal;
      break;
    case "NextjsOriginal":
      IconComponent = NextjsOriginal;
      break;

    case "PostmanOriginal":
      IconComponent = PostmanOriginal;
      break;
    case "ReduxOriginal":
      IconComponent = ReduxOriginal;
      break;
    case "Css3Original":
      IconComponent = Css3Original;
      break;
    case "TailwindcssOriginal":
      IconComponent = TailwindcssOriginal;
      break;
    case "PrismaOriginal":
      IconComponent = PrismaOriginal;
      break;
    case "FigmaOriginal":
      IconComponent = FigmaOriginal;
      break;
    case "BootstrapOriginal":
      IconComponent = BootstrapOriginal;
      break;
    case "JavascriptOriginal":
      IconComponent = JavascriptOriginal;
      break;
    case "MaterialuiOriginal":
      IconComponent = MaterialuiOriginal;
      break;
    case "NodejsOriginal":
      IconComponent = NodejsOriginal;
      break;
    case "ExpressOriginal":
      IconComponent = ExpressOriginal;
      break;

    case "MysqlOriginal":
      IconComponent = MysqlOriginal;
      break;

    case "MongodbOriginal":
      IconComponent = MongodbOriginal;
      break;

    case "PythonOriginal":
      IconComponent = PythonOriginal;
      break;

    case "CplusplusOriginal":
      IconComponent = CplusplusOriginal;
      break;
    case "CsharpOriginal":
      IconComponent = CsharpOriginal;
      break;
    case "SqldeveloperOriginal":
      IconComponent = SqldeveloperOriginal;
      break;
    case "GraphqlPlain":
      IconComponent = GraphqlPlain;
      break;
    case "GithubOriginal":
      IconComponent = GithubOriginal;
      break;
      break;
    case "GitOriginal":
      IconComponent = GitOriginal;
      break;
    case "JiraOriginal":
      IconComponent = JiraOriginal;
      break;
    case "Html5Original":
      IconComponent = Html5Original;
      break;
    case "TypescriptOriginal":
      IconComponent = TypescriptOriginal;
      break;
    default:
      break;
  }
  return (
    <div className="flex cursor-pointer flex-row items-center justify-evenly gap-3 rounded-md px-4 py-3 transition-all duration-150 ease-in-out hover:bg-gray-800 md:gap-4">
      {IconComponent ? (
        <div>
          <IconComponent className="scale-[150%]" />
        </div>
      ) : (
        <Image
          src={skill}
          alt="skill"
          width={20}
          height={20}
          className="-mr-1"
        />
      )}
      <div className="text-sm sm:text-base">{name}</div>
    </div>
  );
};

export default SkillCardBlock;
