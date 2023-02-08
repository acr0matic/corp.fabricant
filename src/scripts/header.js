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
    if (window.scrollY >= contentHeight) header.classList.add('header--background')
    else header.classList.remove('header--background')
  });
}