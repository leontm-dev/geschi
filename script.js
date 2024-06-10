function openContent(content) {
  switch (content) {
    case "merten":
      document.getElementById(`content-${content}`).classList.add("show");
      break;
    case "maarten":
      document.getElementById("content-maarten").classList.add("show");
      break;
    case "robin":
      document.getElementById("content-robin").classList.add("show");
      break;
    case "leon":
      document.getElementById("content-leon").classList.add("show");
      break;
    default:
      break;
  }
  return;
}
function closeContent(content) {
  switch (content) {
    case "merten":
      document.getElementById("content-merten").classList.remove("show");
      break;
    case "maarten":
      document.getElementById("content-maarten").classList.remove("show");
      break;
    case "robin":
      document.getElementById("content-robin").classList.remove("show");
      break;
    case "leon":
      document.getElementById("content-leon").classList.remove("show");
      break;
    default:
      break;
  }
  return;
}
