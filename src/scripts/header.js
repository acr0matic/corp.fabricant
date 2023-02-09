const header = document.getElementById('header');

if (header) {
  const content = header.querySelector('.header__content');
  let contentHeight = 0;

  SetHeight(content);
  window.addEventListener('resize', () => SetHeight(content));

  function SetHeight(target) {
    contentHeight = target.offsetHeight;
    document.documentElement.style.setProperty('--header-offset', -contentHeight + 'px');
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY >= contentHeight) header.classList.add(StyleСlass.header.background)
    else header.classList.remove(StyleСlass.header.background)
  });



  const mobile = document.querySelector('.mobile-menu');
  const mobileOverlay = document.querySelector('.mobile-menu__overlay');

  const mobileBurger = header.querySelector('.hamburger');

  mobileBurger.addEventListener('click', () => Menu());
  mobileOverlay.addEventListener('click', () => Menu());

  function Menu() {
    mobile.classList.toggle(StyleСlass.mobile.open);
    mobileBurger.classList.toggle('is-active')
    document.body.classList.toggle('disable-scroll');
  }
}