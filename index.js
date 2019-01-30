import mousetrap from "mousetrap";
import { useEffect, useState } from "react";

export default handlerMap => {
  const [index, setIndex] = useState(-1);
  useEffect(() => {
    handlerMap.map((handler, index) => {
      mousetrap.bind(handler.keys, () => setIndex(index));
    });
    return () => {
      handlerMap.map(handler => {
        mousetrap.unbind(handler.keys);
      });
    };
  }, []);

  useEffect(
    () => {
      if (index > -1) {
        handlerMap[index].action();
      }
      return () => {
        setIndex(-1);
      };
    },
    [index]
  );
};
