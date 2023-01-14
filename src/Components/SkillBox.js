import React, { useState, useEffect } from "react";
import "./../styles/SkillBox.css";

export default function SkillBox(props) {
  return (
    <>
      <div className="competence">{props.name}</div>
    </>
  );
}
