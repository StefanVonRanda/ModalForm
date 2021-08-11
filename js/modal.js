// Encapsulated modal logic
(() => {
  document.onclick = (e) => {
    const target = e.target;
    // check for modal identifier
    if (target.getAttribute("data-toggle") == "modal") {
      if (target.hasAttribute("data-target")) {
        const modalID = target.getAttribute("data-target");
        // offset modal position by target height
        document.querySelector("#" + modalID + " .modal-window").style.top =
          target.offsetTop - target.offsetHeight + "px";
        // reveal the correct modal at target position
        document.getElementById(modalID).classList.add("open");
      }
    }
    // hide modal if target is dismiss or isn't modal-window
    if (
      target.hasAttribute("data-dismiss") ||
      target.classList.contains("modal")
    ) {
      const modal = document.querySelector('[class="modal open"]');
      modal.classList.remove("open");
    }
  };
})();
