(() => {
  // <stdin>
  (function() {
    "use strict";
    const focusSearch = () => {
      const el = document.getElementById("docs-search");
      el.focus();
      window.scrollTo(0, 0);
    };
    const BINDS = [
      {keys: ["Control", "/"], fn: focusSearch}
    ];
    window.onload = () => {
      const pressedKeys = new Set();
      const watchedKeys = BINDS.map(({keys}) => keys).flat();
      const check = () => BINDS.map(({keys, fn}) => {
        if (keys.length !== pressedKeys.size)
          return;
        if (!keys.every((key) => pressedKeys.has(key)))
          return;
        return fn();
      });
      document.addEventListener("keydown", (e) => {
        if (watchedKeys.indexOf(e.key) !== -1)
          pressedKeys.add(e.key) && check();
      });
      document.addEventListener("keyup", (e) => {
        if (watchedKeys.indexOf(e.key) !== -1)
          pressedKeys.delete(e.key) && check();
      });
    };
  })();
})();
