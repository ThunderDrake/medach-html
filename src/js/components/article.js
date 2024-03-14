document.addEventListener("DOMContentLoaded",() => {
  const progressBar = document.querySelector('.progressbar');
  const section = document.querySelector('.section');


if(progressBar && section) {
  const mappings = [
    {observe: '.scroll-title', change: '.scroll-doc', num:0, style: 'text-[#5F626F] font-medium scroll-doc'},
    {observe: '.scroll-title', change: '.scroll-doc', num:1, style: 'text-[#5F626F] font-medium scroll-doc'},
    {observe: '.scroll-title', change: '.scroll-doc', num:2, style: 'text-[#5F626F] font-medium scroll-doc'},
  ];

  mappings.forEach(mapping => {
    const observerTarget = document.querySelectorAll(mapping.observe);
    const elementToChange = document.querySelectorAll(mapping.change);
    // console.log(elementToChange[mapping.num])
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          elementToChange[mapping.num].className = mapping.style;;
        } else {
          // Возвращаем исходное состояние, если нужно
          elementToChange[mapping.num].className = 'text-[#9799A5] scroll-doc';
        }
      });
    });
    // console.log(observerTarget)
    if(observerTarget.length > 0) {
      observer.observe(observerTarget[mapping.num]);

    }
  });
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

}

})
