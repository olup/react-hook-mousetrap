# react-hook-mousetrap

A quick react hook to trigger actions on specific key combination. It uses [mousetrap](https://github.com/ccampbell/mousetrap) to do the job, so any mousetrap combo or array of combo can be passed as option.

Import it like this :

```
import useMousetrap from "react-hook-mousetrap"
```

Then in your component :

```
// useMousetrap(<Keys>, <Callback>)
useMousetrap("ctrl+enter", // any mousetrap combo, or array of combo

      () => { // triggered on key combo
        // whatever. You can use your state in there too.
      });
```

**NOTE : If you want to trap keys in an `input` or `textarea` you need to add the mousetrap class to the element : `className="mousetrap"`**
