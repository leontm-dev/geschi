document.getElementById("picture-merten").addEventListener("click", (ev) => {
  document.getElementById("content-merten").style.display = "flex";
});
document.getElementById("picture-maarten").addEventListener("click", (ev) => {
  document.getElementById("content-maarten").style.display = "flex";
});
document.getElementById("picture-leon").addEventListener("click", (ev) => {
  document.getElementById("content-leon").style.display = "flex";
});
document.getElementById("picture-robin").addEventListener("click", (ev) => {
  document.getElementById("content-robin").style.display = "flex";
});
document.getElementById("picture-fazit").addEventListener("click", (ev) => {
  document.getElementById("content-fazit").style.display = "flex";
});

function openContent(content) {
  switch (content) {
    case "merten":
      document.getElementById(`content-${content}`).style.display = "flex";
      break;
    case "maarten":
      document.getElementById("content-maarten").style.display = "flex";
      break;
    case "robin":
      document.getElementById("content-robin").style.display = "flex";
      break;
    case "leon":
      document.getElementById("content-leon").style.display = "flex";
      break;
    default:
      break;
  }
  return;
}
function closeContent(content) {
  switch (content) {
    case "merten":
      document.getElementById("content-merten").style.display = "none";
      break;
    case "maarten":
      document.getElementById("content-maarten").style.display = "none";
      break;
    case "robin":
      document.getElementById("content-robin").style.display = "none";
      break;
    case "leon":
      document.getElementById("content-leon").style.display = "none";
      break;
    default:
      break;
  }
  return;
}
