import React from "react";

const SkillIcon = (props) => {
  const { icon, name } = props;
  return <img className="" src={icon} alt={name}></img>;
};

export default SkillIcon;
