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
