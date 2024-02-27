import React, { useState, useEffect } from "react";

import { WordCloudData } from "../../constants/constants";

const ReactWordCloud = () => {
  const [reactWordCloudLoaded, setReactWordCloudLoaded] = useState(false);

  useEffect(() => {
    // Load ReactWordcloud dynamically on the client side
    import("react-wordcloud").then((ReactWordcloud) => {
      if (!reactWordCloudLoaded) {
        setReactWordCloudLoaded(true);
      }
    });
  }, [reactWordCloudLoaded]);

  if (!reactWordCloudLoaded) return null;

  const ReactWordcloudComponent = React.lazy(() => import("react-wordcloud"));

  return (
    <div style={{ height: "auto", width: "auto" }}>
      <React.Suspense fallback={<div>Loading...</div>}>
        <ReactWordcloudComponent words={WordCloudData} />
      </React.Suspense>
    </div>
  );
};

export default ReactWordCloud;
