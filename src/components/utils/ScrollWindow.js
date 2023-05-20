export function scrollWindow(users) {
  if (users) window.scrollTo({ top: 0 });

  window.scrollTo({
    top: document.querySelector("body").scrollHeight,
    behavior: "smooth",
  });
}
