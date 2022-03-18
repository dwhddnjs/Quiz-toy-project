import React from "react";
import useStore from "./store";

function Counter() {
  const { count } = useStore();
  return <p>이종원 나이 {count}</p>;
}

export default Counter;
