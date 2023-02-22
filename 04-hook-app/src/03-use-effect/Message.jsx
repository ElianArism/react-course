import { useEffect } from "react";

export const Message = () => {
  const onMouseMove = ({ x, y }) => console.log("moving", x, y);
  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <h3>User already exists.</h3>
    </>
  );
};
