import React from "react";

const SkillIcon = (props) => {
  const { icon, name } = props;
  return <img  src={icon} alt={name}></img>;
};

export default SkillIcon;
