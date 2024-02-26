
document.addEventListener("DOMContentLoaded",() => {
  const accordionButtons = document.querySelectorAll(".see-button");
  const accordionContents = document.querySelectorAll(".accordion-content");

  accordionButtons.forEach((button,i) => {
    button.addEventListener("click", () => {
        console.log('test ver')
      if(button.childNodes[0].classList.contains('opacity-0')){
        button.childNodes[0].classList.add('opacity-100');
        button.childNodes[0].classList.remove('opacity-0');
        button.childNodes[3].classList.add('opacity-0');
        button.childNodes[3].classList.remove('opacity-100');
        setTimeout(()=>{
          button.childNodes[0].classList.remove('hidden');
          button.childNodes[3].classList.add('hidden');
        },500)
      }else{
        button.childNodes[0].classList.add('opacity-0');
        button.childNodes[0].classList.remove('opacity-100');
        button.childNodes[3].classList.remove('opacity-0');
        button.childNodes[3].classList.add('opacity-100');
        setTimeout(()=>{
          button.childNodes[0].classList.add('hidden');
          button.childNodes[3].classList.remove('hidden');
        },500)
      }


      if(accordionContents[i].classList.contains('one-col')){
        if(accordionContents[i].classList.contains("grid-rows-[1fr]")) {
          accordionContents[i].classList.remove("grid-rows-[1fr]");
          accordionContents[i].classList.remove("opacity-100");
          accordionContents[i].classList.add("grid-rows-[0fr]");
          accordionContents[i].classList.add("opacity-0");

          setTimeout(() => {
            accordionContents[i].classList.add("grid-cols-2");
            accordionContents[i].classList.remove("grid-cols-1");
          },500)

         }
         else{
          accordionContents[i].classList.remove("grid-rows-[0fr]");
          accordionContents[i].classList.remove("opacity-0");
          accordionContents[i].classList.add("grid-rows-[1fr]");
          accordionContents[i].classList.add("opacity-100");
          accordionContents[i].classList.remove("grid-cols-2");

          setTimeout(() => {
            accordionContents[i].classList.add("grid-cols-1");

          },500)

         }
      }else{
        if(accordionContents[i].classList.contains("grid-rows-[1fr]")) {
          accordionContents[i].classList.remove("grid-rows-[1fr]");
          accordionContents[i].classList.remove("opacity-100");
          accordionContents[i].classList.add("grid-rows-[0fr]");
          accordionContents[i].classList.add("opacity-0");
          accordionContents[i].classList.add("grid-cols-2");

          accordionContents[i].classList.remove("grid-cols-1");
          accordionContents[i].classList.remove("lg:grid-cols-2");
         }
         else{
          accordionContents[i].classList.remove("grid-rows-[0fr]");
          accordionContents[i].classList.remove("opacity-0");
          accordionContents[i].classList.add("grid-rows-[1fr]");
          accordionContents[i].classList.add("opacity-100");
          accordionContents[i].classList.add("grid-cols-1");
          accordionContents[i].classList.add("lg:grid-cols-2");
          accordionContents[i].classList.remove("grid-cols-2");
         }
      }

    });
  })

})
