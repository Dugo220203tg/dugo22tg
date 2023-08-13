const $ = document.querySelector.bind(document);
const $$ = document.querySelector.bind(document);

const tabs = $$(".tab-img");
const panes = $$(".tab-pane");

const tabActive = $(".tab-img.active");
// const line = $(".tab .line");

// requestIdleCallback(function () {
//   line.style.left = tabActive.offset.left.offset.left + "px";
//   line.style.width = tabActive.offset.width + "px";
// });

tabs.forEach((tab, index) => {
  const pane = panes[index];
  tab.onclick = function () {
    $(".tab-img.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");

    // line.style.left = pane.offset.left + "px";
    // line.style.width = pane.offset.width + "px";
    this.classList.add("active");
    pane.classList.add("active");
  };
});
