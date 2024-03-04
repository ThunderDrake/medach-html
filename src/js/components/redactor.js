document.addEventListener("DOMContentLoaded", ()=>{
  const postButton = document.getElementById("post");
  const firstFrom = document.querySelector(".where");
  const dayPicker = document.getElementById("day-picker");
  const yearPicker = document.getElementById("year-picker");
  const monthPicker = document.getElementById("month-picker");
  const prevHour = document.getElementById("prev-hour");
  const nextHour = document.getElementById("next-hour");
  const currentHour = document.getElementById("current-hour");
  const timeSelector = document.querySelector(".timeselector");
  const hourBack = document.getElementById("hour-back");
  const hourNext = document.getElementById("hour-next");
  const minuteBack = document.getElementById("minute-back");
  const minuteNext = document.getElementById("minute-next");
  const prevMinute = document.getElementById("prev-minute");
  const nextMinute = document.getElementById("next-minute");
  const currentMinute = document.getElementById("current-minute");
  const postLater = document.getElementById("post-later");
  const later = document.getElementById("later");
  const postNow = document.getElementById("post-now");
  postButton.addEventListener("click", () => {
    firstFrom.classList.toggle('hidden');
    firstFrom.classList.toggle('flex');
  });
  postLater.addEventListener("click", () => {
    if(later.classList.contains('hidden')){
      later.classList.toggle('hidden');
      later.classList.toggle('block');
    }

  });
  postNow.addEventListener("click", () => {
    if(later.classList.contains('block')){
    later.classList.toggle('hidden');
    later.classList.toggle('block');

  }
  });
  if(dayPicker){
    for(let i = 1; i<=31;i++){
      let newOption;
      if(i<10){
        newOption = new Option('0'+i, '0'+i)
      }else{
      newOption = new Option(i, i);
      }
      newOption.className="bg-[#323232]/60"
      dayPicker.prepend(newOption);
    }
  }
  if(monthPicker){
    let months = [
      "Января", "Февраля", "Марта", "Апреля",
      "Мая", "Июня", "Июля", "Августа",
      "Сентября", "Октября", "Ноября", "Декабря"
  ];

  for (let i = 0; i < months.length; i++) {
      let newOption = new Option(months[i],i )
      newOption.className="bg-[#323232]/60"

      monthPicker.prepend(newOption);
  }
  }
  if(yearPicker){
    for(let i = 1998; i<=2024;i++){
      let newOption;
      if(i<10){
        newOption = new Option('0'+i, '0'+i)
      }else{
      newOption = new Option(i, i);
      }
      newOption.className="bg-[#323232]/60"
      yearPicker.prepend(newOption);
    }
  }
  if(timeSelector){
    hourBack.addEventListener("click", ()=>{
      if(+currentHour.innerText > 1 ){
        prevHour.innerText = +prevHour.innerText-1;
        if(+prevHour.innerText==0){
          prevHour.innerText = ''
        }
        currentHour.innerText = +currentHour.innerText-1;
        nextHour.innerText = +currentHour.innerText+1;

      }else{
        console.log('no')
      }
    })
    hourNext.addEventListener("click", ()=>{
      console.log(+currentHour > 1 && +currentHour < 30)
      if(+currentHour.innerText >= 1 && +currentHour.innerText < 24 ){
        prevHour.innerText = +prevHour.innerText+1;

        nextHour.innerText = +currentHour.innerText+2;
        if(+currentHour.innerText>=23){
          nextHour.innerText = ''
        }
        currentHour.innerText = +currentHour.innerText+1;

      }
    })
    minuteBack.addEventListener("click", ()=>{
      if(+currentMinute.innerText > 1 ){
        prevMinute.innerText = +prevMinute.innerText-1;
        if(+prevMinute.innerText==0){
          prevMinute.innerText = ''
        }
        currentMinute.innerText = +currentMinute.innerText-1;
        nextMinute.innerText = +currentMinute.innerText+1;

      }else{
        console.log('no')
      }
    })
    minuteNext.addEventListener("click", ()=>{
      if(+currentMinute.innerText >= 1 && +currentMinute.innerText < 60 ){
        prevMinute.innerText = +prevMinute.innerText+1;

        nextMinute.innerText = +currentMinute.innerText+2;
        if(+currentMinute.innerText>=59){
          nextMinute.innerText = ''
        }
        currentMinute.innerText = +currentMinute.innerText+1;

      }
    })
    // const minuteBack = document.getElementById("minute-back");
    // const minuteNext = document.getElementById("minute-next");
    // const prevMinute = document.getElementById("prev-minute");
    // const nextMinute = document.getElementById("next-minute");
    // const currentMinute = document.getElementById("current-minute");
  }
})
