import React, { useState } from "react";

export const HideOrNotHide = () => {
  const [changerText, setbuttonText] = React.useState(true);

  if (changerText === true) {
    return (
      <div>
        <button onClick={() => setbuttonText(false)}>Hide content:</button>
        <p>Some text</p>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={() => setbuttonText(true)}>reveal content:</button>
      </div>
    );
  }
};
