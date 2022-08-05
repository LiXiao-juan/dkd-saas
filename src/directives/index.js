export const imgError = {
  inserted(el, { value }) {
    el.addEventListener("error", () => {
      el.src = value;
    });
  },
};
