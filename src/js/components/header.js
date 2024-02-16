document.addEventListener("DOMContentLoaded",() => {
  const themeSwitcher = document.querySelectorAll('.themeSwitcher');
  const burger = document.querySelectorAll(".burger");
  const nav = document.getElementById('navigation');
  const main = document.getElementById('main');
  const mainOpenStyles = 'dark:bg-[#1D1D1D] bg-white transition-all duration-500 absolute top-52 z-50 right-0 xl:right-10 w-full xl:w-fit';
  const mainDefaultStyles = 'dark:bg-[#1D1D1D] bg-white transition-all duration-500'
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
        main.className =mainOpenStyles;
      }else{
        nav.classList.add('hidden');
        main.className =mainDefaultStyles;
      }
    });
  })
  // console.log(!nav.classList.contains('hidden'))
  // main.addEventListener('click', () => {
  //   if(!nav.classList.contains('hidden')){
  //     nav.classList.add('hidden');
  //     main.className =mainDefaultStyles;
  //   }
  // });
});
