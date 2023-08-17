const array = [
  "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0157/ability_0157_P1.webm",
  "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0157/ability_0157_P1.webm",
  "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0157/ability_0157_P1.webm",
  "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0157/ability_0157_P1.webm",
  "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0157/ability_0157_P1.webm",
  "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0157/ability_0157_P1.webm",
  "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0157/ability_0157_P1.webm",
  "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0157/ability_0157_P1.webm",
]

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-img");
const panes = $$(".tab-pane");
const videos = $$(".tab-video");

const tabActive = $(".tab-img.active");
requestIdleCallback(function () {});

tabs.forEach((tab, index) => {
  const pane = panes[index];
  const video = videos[index];
  tab.onclick = function () {
    $(".tab-img.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");
    $(".tab-video.active").classList.remove("active");

    this.classList.add("active");
    pane.classList.add("active");
    video.classList.add("active");
  };
});


