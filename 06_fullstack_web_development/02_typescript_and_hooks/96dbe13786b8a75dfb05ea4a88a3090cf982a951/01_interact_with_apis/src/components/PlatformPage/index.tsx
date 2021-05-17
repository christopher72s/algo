import React from "react";

import type from "../../types/Platform";

const PlatformPage = (): JSX.Element => {
  const [platform, setplatform] = React.useState<type.Platform[]>([]);

  React.useEffect(() => {
    fetch("https://videogames-sparta.herokuapp.com/platforms", { headers: { accept: "application/json" } }).then(
      async (response) => {
        setplatform(await response.json());
      },
    );
  }, []);

  return (
    <div>
      {platform.map(({ name }) => {
        return (
          <div key={name}>
            <p> {name}!</p>
          </div>
        );
      })}
    </div>
  );
};
export default PlatformPage;

/* <select class="ice-cream" name="ice-cream">
    <option value="">Select One …</option>
    <option value="chocolate">Chocolate</option> */
