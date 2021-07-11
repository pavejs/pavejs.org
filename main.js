(() => {
  // <stdin>
  var focusSearch = () => {
    const el = document.getElementById("docs-search");
    el.focus();
    scrollTo(0);
  };
  var BINDS = [
    {keys: ["Ctrl", "/"], fn: focusSearch}
  ];
  window.onload = () => {
    const pressedKeys = new Set();
    const watchedKeyGroups = BINDS.map(({keys}) => keys);
    const watchedKeys = watchedKeyGroups.flat();
    document.addEventListener("keydown", (e) => watchedKeys.indexOf(e.key) !== -1 && pressedKeys.add(e.key));
    document.addEventListener("keyup", (e) => watchedKeys.indexOf(e.key) !== -1 && pressedKeys.delete(e.key));
    watchedKeyGroups.map((keyArr) => {
      keyArr.forEach((i) => {
      });
    });
  };
})();
