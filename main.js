(() => {
  // <stdin>
  window.onload = () => {
    const navGroups = querySelectorAll(".nav-group");
    navGroups.forEach((el) => {
      const controls = document.getElementById(el.dataset.controls);
      el.addEventListener("click", () => {
        if (controls.classList.contains("flex"))
          controls.classList.replace("flex", "hidden");
        else
          controls.classList.replace("hidden", "flex");
      });
    });
  };
})();
