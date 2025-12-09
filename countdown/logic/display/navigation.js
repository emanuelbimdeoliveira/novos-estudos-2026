const toNavigation = (id) => {
  document.querySelectorAll("section").forEach((sec) => {
    sec.classList.remove("d-flex");
    sec.classList.add("d-none");
  });

  const active = document.getElementById(id);
  active.classList.remove("d-none");
  active.classList.add("d-flex");
};

export { toNavigation };
