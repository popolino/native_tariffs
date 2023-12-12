import React, { useEffect, useState } from "react";

const Fade = ({ in: enter, timeout = 100, children }) => {
  const [open, setOpen] = useState(enter);
  useEffect(() => {
    if (enter) {
      setOpen(true);
      return;
    }
    const timeoutId = setTimeout(() => {
      setOpen(enter);
    }, timeout);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [enter]);
  if (!open) return <></>;
  return (
    <div
      className={enter ? "fade-in" : "fade-out"}
      style={{ animationDuration: `${timeout}ms` }}
    >
      {children}
    </div>
  );
};

export default Fade;
