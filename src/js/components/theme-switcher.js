document.addEventListener("DOMContentLoaded",() => {
  const themeSwitcher = document.getElementById('themeSwitcher');
        console.log(localStorage.theme)
        themeSwitcher.addEventListener('click', () => {
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
});
