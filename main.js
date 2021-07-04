(() => {
  // <stdin>
  window.onload = () => {
    const navGroups = document.querySelectorAll(".nav-group");
    navGroups.forEach((el) => {
      const controls = document.getElementById(el.dataset.controls);
      const icon = document.getElementById(`${el.dataset.controls.slice(0, -8)}-indicator`);
      el.addEventListener("click", () => {
        if (controls.classList.contains("flex")) {
          controls.classList.replace("flex", "hidden");
          icon.classList.replace("rotate-90", "rotate-0");
        } else {
          controls.classList.replace("hidden", "flex");
          icon.classList.replace("rotate-0", "rotate-90");
        }
      });
    });
  };
})();
