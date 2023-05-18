import React from "react";

const ArcsData = ({ arcs }) => {
  console.log("arcs", arcs);
  return (
    <div>
      <h1>Arcs Data</h1>
      <ul>
        {arcs.map((arc) => {
          return (
            <li key={arc.id}>
              <div>{arc.node}</div>
              <div>{arc.body}</div>
              <div>{arc.size}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ArcsData;
