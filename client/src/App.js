// App.js
import React, { useState } from "react";

import ArcsData from "./components/ArcsData";
import CustomRoutes from "./components/CustomRoutes";
import GetArcsButton from "./components/GetArcsButton";
import MyTestForm from "./components/MyTestForm";

function App() {
  const [arcs, setArcs] = useState([]);

  const onArcsFetched = (arcsData) => {
    setArcs(arcsData);
  };

  return (
    <div>
      <GetArcsButton onArcsFetched={onArcsFetched} />
      <ArcsData arcs={arcs} />
      <CustomRoutes />
      <MyTestForm />
    </div>
  );
}

export default App;
