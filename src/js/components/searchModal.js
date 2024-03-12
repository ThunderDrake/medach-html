document.addEventListener("DOMContentLoaded",(e)=>{
  const moreBtn = document.querySelectorAll('.more');
  const tags = document.querySelectorAll('.tags');
  moreBtn.forEach((btn,i)=>{
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      btn.childNodes[1].classList.toggle('rotate-180');

      tags[i].classList.toggle('max-h-[180px]');
    });
  })
  // moreBtn.addEventListener('click', () => {
  //   moreBtn.childNodes[1].classList.toggle('rotate-180');
  //   tags.classList.toggle('overflow-y-auto')
  //   tags.classList.toggle('overflow-hidden')

  // });
})
