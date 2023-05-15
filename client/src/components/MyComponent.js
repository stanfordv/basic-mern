import React from "react";
import useFetch from "./useFetch";

const MyComponent = () => {
  const { loading, data } = useFetch("http://localhost:5000/api/data");

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

export default MyComponent;
