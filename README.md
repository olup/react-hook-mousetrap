# react-hook-mousetrap

A quick react hook to trigger actions on specific key combination. It uses mousetrap to do the job, so any mousetrap combo or array of combo can be passed as option.

Import it like this :

```
import mousetrapHook from "react-hook-mousetrap"
```

Then in your component :

```
mousetrapHook([
    {
      keys: "ctrl+enter", // any mousetrap combo, or array of combo

      action: () => { // triggered on key combo
        // whatever. You can use your state in there too.
      }

    }
  ]);
```
