let scrolling = true;
let sliderIndex = 0;

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

function moveSlider(direction) {
  let element = document.getElementById("picture-leon").parentElement;
  if (direction === "rechts") {
    if (sliderIndex < 4) {
      sliderIndex++;
    } else {
      document.getElementById("control-right").disabled = true;
    }
  } else if (direction === "links") {
    if (sliderIndex > 0) {
      sliderIndex--;
    } else {
      document.getElementById("control-left").disabled = true;
    }
  }
  if (sliderIndex === 0) {
    document.getElementById("control-left").disabled = true;
    document.getElementById("control-right").disabled = false;
  } else if (sliderIndex === 4) {
    document.getElementById("control-left").disabled = false;
    document.getElementById("control-right").disabled = true;
  } else {
    document.getElementById("control-left").disabled = false;
    document.getElementById("control-right").disabled = false;
  }
  window.scrollTo({
    behavior: "smooth",
    left: element.offsetWidth * sliderIndex,
    top: element.offsetTop,
  });
  console.log(sliderIndex);
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
