import mousetrap from "mousetrap";
import { useEffect, useRef } from "react";

/**
 * Use mousetrap hook
 *
 * @param  {(string | string[])} handlerKey - A key, key combo or array of combos according to Mousetrap documentation.
 * @param  { function } handlerCallback - A function that is triggered on key combo catch.
 */
export default (handlerKey, handlerCallback) => {
  let actionRef = useRef(null);
  actionRef.current = handlerCallback;

  useEffect(() => {
    mousetrap.bind(handlerKey, (evt, combo) => {
      typeof actionRef.current === "function" && actionRef.current(evt, combo);
    });
    return () => {
      mousetrap.unbind(handlerKey);
    };
  }, [handlerKey]);
};
