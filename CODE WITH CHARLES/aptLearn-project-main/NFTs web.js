const navlink = document.querySelector('.navlinks');
const body = document.querySelector('body');
const Sct2CardContainer = document.querySelector(".Sct2CardContainer");
const handleShowSideBar = () => {
    navlink.classList.add("navlinksShown");
    body.classList.add('bodyUnScroll');
};
const handleRemoveSideBar = () => {
  navlink.classList.remove("navlinksShown");
  body.classList.remove("bodyUnScroll");
};

const handleScrollRight = () => {
  Sct2CardContainer.scrollBy(800, 0);
};
const handleScrollLeft = () => {
  Sct2CardContainer.scrollBy(-800, 0);
};