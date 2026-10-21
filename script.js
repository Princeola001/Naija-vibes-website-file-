
function likeVideo(button) {
  const count = button.querySelector("b");
  count.textContent = Number(count.textContent) + 1;
}

function showComments() {
  document.getElementById("comments").style.display = "block";
}

function hideComments() {
  document.getElementById("comments").style.display = "none";
}

function addComment() {
  const input = document.getElementById("commentInput");
  const list = document.getElementById("commentList");
  const text = input.value.trim();

  if (!text) return;

  if (list.textContent === "Be the first to comment!") {
    list.textContent = "";
  }

  const item = document.createElement("p");
  item.textContent = "💬 " + text;
  list.appendChild(item);
  input.value = "";
}

function uploadVideo(event) {
  const file = event.target.files[0];
  if (!file) return;

  if (!file.type.startsWith("video/")) {
    alert("Please select a video.");
    return;
  }

  const video = document.createElement("video");
  video.src = URL.createObjectURL(file);
  video.controls = true;
  video.playsInline = true;
  video.style.width = "100%";

  const feed = document.getElementById("feed");
  feed.innerHTML = "";
  feed.appendChild(video);
}

function uploadVideo(event) {
  const file = event.target.files[0];

  if (!file) return;

  if (window.currentVideoURL) {
    URL.revokeObjectURL(window.currentVideoURL);
  }

  window.currentVideoURL = URL.createObjectURL(file);

  let player = document.getElementById("videoPlayer");

  if (!player) {
    player = document.createElement("video");
    player.id = "videoPlayer";
    player.controls = true;
    player.playsInline = true;
    player.style.width = "100%";
    player.style.maxHeight = "500px";
    player.style.borderRadius = "18px";
    player.style.marginTop = "20px";

    const feed = document.getElementById("feed");
    feed.prepend(player);
  }

  player.src = window.currentVideoURL;
  player.load();
  player.play().catch(() => {});
}