document.addEventListener("DOMContentLoaded",() => {
  const accordionButtons = document.querySelectorAll(".see-button");
  const accordionContents = document.querySelectorAll(".accordion-content");

  accordionButtons.forEach((button,i) => {
    button.addEventListener("click", () => {
      console.log(accordionContents[i].classList)

      if(accordionContents[i].classList.contains("grid-rows-[1fr]")) {
        accordionContents[i].classList.remove("grid-rows-[1fr]");
        accordionContents[i].classList.remove("opacity-100");
        accordionContents[i].classList.add("grid-rows-[0fr]");
        accordionContents[i].classList.add("opacity-0");

        console.log('now hidden')
       }
       else{
        accordionContents[i].classList.remove("grid-rows-[0fr]");
        accordionContents[i].classList.remove("opacity-0");
        accordionContents[i].classList.add("grid-rows-[1fr]");
        accordionContents[i].classList.add("opacity-100");
        console.log('now active')
       }
    });
  })

})
