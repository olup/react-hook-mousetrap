import mousetrap from "mousetrap";
import { useEffect, useState } from "react";

/**
 * Use mousetrap hook
 *
 * @param  {(string | string[])} handlerKey - A key, key combo or array of combos according to Mousetrap documentation.
 * @param  { function } handlerCallback - A function that is triggered on key combo catch.
 */
export default (handlerKey, handlerCallback) => {
  const [trigger, setTrigger] = useState(false);
  useEffect(() => {
    mousetrap.bind(handlerKey, () => setTrigger(true));
    return () => {
      mousetrap.unbind(handlerKey);
    };
  }, []);

  useEffect(() => {
    if (trigger) {
      handlerCallback();
    }
    return () => {
      setTrigger(false);
    };
  }, [trigger]);
};
