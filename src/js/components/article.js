document.addEventListener("DOMContentLoaded",() => {
  const progressBar = document.querySelector('.progressbar');
  const section = document.querySelector('section');

  const scrollProgressBar = () => {
      let scrollDistance = -(section.getBoundingClientRect().top);
      let progressPercentage =
          (scrollDistance /
              (section.getBoundingClientRect().height -
                  document.documentElement.clientHeight)) * 100;

      let val = Math.floor(progressPercentage);
      progressBar.style.width = val + '%';

      if (val < 0) {
          progressBar.style.width = '0%';
      }
  };

  window.addEventListener('scroll', scrollProgressBar);
})
