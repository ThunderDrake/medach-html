
document.addEventListener("DOMContentLoaded",() => {
  const accordionButtons = document.querySelectorAll(".see-button");
  const accordionContents = document.querySelectorAll(".accordion-content");

  accordionButtons.forEach((button,i) => {
    button.addEventListener("click", () => {
        const seeButton = button.childNodes[1].nodeName!=='#text' ? button.childNodes[1] : button.childNodes[0];
        const unseeButton = (button.childNodes[3] && button.childNodes[3].nodeName!=='#text') ? button.childNodes[3] : button.childNodes[2];
      if(seeButton.classList.contains('opacity-0')){
        seeButton.classList.add('opacity-100');
        seeButton.classList.remove('opacity-0');
        unseeButton.classList.add('opacity-0');
        unseeButton.classList.remove('opacity-100');
        setTimeout(()=>{
          seeButton.classList.remove('hidden');
          unseeButton.classList.add('hidden');
        },500)
      }else{
        seeButton.classList.add('opacity-0');
        seeButton.classList.remove('opacity-100');
        unseeButton.classList.remove('opacity-0');
        unseeButton.classList.add('opacity-100');
        setTimeout(()=>{
          seeButton.classList.add('hidden');
          unseeButton.classList.remove('hidden');
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
