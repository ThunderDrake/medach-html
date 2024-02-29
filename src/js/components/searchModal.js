document.addEventListener("DOMContentLoaded",(e)=>{
  const moreBtn = document.getElementById('more');
  const tags = document.getElementById('tags');
  moreBtn.addEventListener('click', () => {
    moreBtn.childNodes[1].classList.toggle('rotate-180');
    tags.classList.toggle('overflow-y-auto')
    tags.classList.toggle('overflow-hidden')

  });
})
