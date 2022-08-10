const allsections = document.querySelectorAll('.section');

let options = {
  root: null,
  threshold: 0.15,
};
let revealSection = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  console.log(entry.target);
  entry.target.classList.remove('hidden');
  observer.unobserve(entry.target);
};
let sectionObserver = new IntersectionObserver(revealSection, options);
allsections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add('hidden');
});

const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
const navHeight = nav.getBoundingClientRect().height;

const stickNavbar = (entries) => {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else {
    nav.classList.remove('sticky');
  }
};
const navbarObserver = new IntersectionObserver(stickNavbar, {
  root: null,
  threshold: 0,
  rootmargin: `-${navHeight}px`,
});

navbarObserver.observe(header);
