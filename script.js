let scrolling = true;

function openContent(content) {
  let element = document.getElementById("content-" + content);
  let frame = document.getElementById("picture-" + content).parentElement;
  if (element == null) return;
  if (frame == null) return;

  element.style.display = "flex";
  element.classList.remove("goIn");
  element.classList.add("goOut");
  scrolling = false;
  window.scroll(frame.offsetLeft, frame.offsetTop);
}
function closeContent(content) {
  let element = document.getElementById("content-" + content);
  if (element == null) return;

  element.style.display = "flex";
  element.classList.remove("goOut");
  element.style.content = "none";
  scrolling = true;
  element.classList.add("goIn");
  setTimeout(() => {
    element.style.display = "none";
  }, 501);
}

window.addEventListener(
  "wheel",
  (e) => {
    if (scrolling) {
      window.scroll(window.scrollX + e.deltaY, window.scrollY);
    }
    e.preventDefault();
  },
  { passive: false }
);
