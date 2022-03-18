import React from "react";
import useStore from "./store";

function Mp() {
  const { data } = useStore();

  return (
    <>
      {data &&
        data.map((el) => (
          <ul key={el.id}>
            <li>{el.name}</li>
            <li>{el.age}</li>
            <li>{el.job}</li>
          </ul>
        ))}
    </>
  );
}

export default Mp;
