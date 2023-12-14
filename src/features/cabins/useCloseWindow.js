import { useEffect, useRef } from "react";

function useCloseWindow({ close }) {
  const ref = useRef();

  useEffect(
    function () {
      function handleEvent(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          close();
        }
      }
      document.addEventListener("click", handleEvent, true);
      return () => document.removeEventListener("click", handleEvent, true);
    },
    [close]
  );
  return ref;
}

export default useCloseWindow;
