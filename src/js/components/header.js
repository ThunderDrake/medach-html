document.addEventListener("DOMContentLoaded",() => {
  const themeSwitcher = document.querySelectorAll('.themeSwitcher');
  const burger = document.querySelectorAll(".burger");
  const nav = document.getElementById('navigation');
  const main = document.getElementById('main');
  const mainOpenStyles = 'dark:bg-[#1D1D1D] bg-white transition-all duration-500 absolute top-96 md:top-64 xl:top-80 3xl:top-32 z-50 right-0 3xl:right-5 w-full 3xl:w-fit opacity-100';
  const mainDefaultStyles = 'dark:bg-[#1D1D1D] bg-white transition-all duration-500 opacity-100'
  const menuLinks = document.querySelectorAll('.menuLink');
  themeSwitcher.forEach((button)=>{
    button.addEventListener('click', () => {
      document.body.classList.toggle('dark');

      if (document.body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        document.body.dataset.theme='dark';
      } else {
        localStorage.setItem('theme', 'light');
        document.body.dataset.theme='light';

      }
    });

    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark');
    }
  })
  burger.forEach((button) => {
    button.addEventListener('click', () => {
      if(nav.classList.contains('hidden')){
        nav.classList.remove('hidden');
        nav.classList.remove('opacity-0');
        nav.classList.add('opacity-100');
        main.classList.add('opacity-0');
        main.classList.remove('opacity-100');


        setTimeout(()=>{
          main.classList.remove('opacity-0');
          main.classList.add('opacity-100');
          main.className =mainOpenStyles;

        },300)
        document.body.classList.add('overflow-hidden');
      }else{
        nav.classList.remove('opacity-100');
        nav.classList.add('opacity-0');
        main.classList.add('opacity-0');
        main.classList.remove('opacity-100');
        setTimeout(()=>{
          nav.classList.add('hidden');

          main.classList.remove('opacity-0');
          main.classList.add('opacity-100');
          document.body.classList.remove('overflow-hidden');
          main.className =mainDefaultStyles;

        },300)

      }
    });
  })
  menuLinks.forEach((link) => {
    link.addEventListener('click',()=>{
      nav.classList.remove('opacity-100');
        nav.classList.add('opacity-0');
        main.classList.add('opacity-0');
        main.classList.remove('opacity-100');
        setTimeout(()=>{
          nav.classList.add('hidden');

          main.classList.remove('opacity-0');
          main.classList.add('opacity-100');
          document.body.classList.remove('overflow-hidden');
          main.className =mainDefaultStyles;

        },300)

    })
  })
});
