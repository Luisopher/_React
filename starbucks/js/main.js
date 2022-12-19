const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  // Logic..
  searchInputEl.focus();
});

// focus클래스 지정후 설정
searchInputEl.addEventListener("focus", function () {
  // focus될경우 focused라는 class를 추가!
  searchEl.classList.add("focused");
  // focus될경우 속성을 지정한다.
  searchInputEl.setAttribute("placeholder", "통합검색");
});

// focus클래스 지정삭제 설정
searchInputEl.addEventListener("blur", function () {
  // focus될경우 focused라는 class를 추가!
  searchEl.classList.remove("focused");
  // focus될경우 속성을 지정한다.
  searchInputEl.setAttribute("placeholder", "");
});

const badgeEl = document.querySelector(".badges");
//  _.throttle(함수, 시간); 지연된 함수실행가능! cdn 사용법!
window.addEventListener(
  "scroll",
  _.throttle(function () {
    if (window.scrollY > 500) {
      //gsap요소 사용법! gsap.to(요소, 지속시간, 옵션)
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
    } else {
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
    }
  }, 300)
);

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.4,
    opacity: 1,
  });
});

