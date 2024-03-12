document.addEventListener('DOMContentLoaded',()=>{
  let weekDays = document.querySelectorAll('.datepicker-day');
  let selectedDays = document.querySelectorAll('.day-selected');
  let daysarray = Array.from(weekDays)
  let daysBetween = [];

  weekDays.forEach((day,i) => {
    day.addEventListener('click', () => {
      day.classList.add('day-selected')
      day.classList.add('!h-[30px]')

      setTimeout(() => { weekDays = document.querySelectorAll('.datepicker-day');
      selectedDays = document.querySelectorAll('.day-selected');},100)

      if(selectedDays.length >1){
        selectedDays.forEach((selectedDay) => {
          selectedDay.classList.remove('day-selected')
          selectedDay.classList.remove('!h-[30px]')


          setTimeout(() => {
            weekDays = document.querySelectorAll('.datepicker-day');
            selectedDays = document.querySelectorAll('.day-selected');
        },100)

        })
        if(daysBetween && daysBetween.length >0){
          weekDays.forEach((day) => {
            // Поиск элемента с классом 'selected-range-first' внутри текущего элемента day и его удаление
            let selectedRangeFirst = day.querySelector('.selected-range-first');
            if (selectedRangeFirst) {
              day.removeChild(selectedRangeFirst);
            }

            // Поиск элемента с классом 'selected-range' внутри текущего элемента day и его удаление
            let selectedRange = day.querySelector('.selected-range');
            if (selectedRange) {
              day.removeChild(selectedRange);
            }

            // Поиск элемента с классом 'selected-range-last' внутри текущего элемента day и его удаление
            let selectedRangeLast = day.querySelector('.selected-range-last');
            if (selectedRangeLast) {
              day.removeChild(selectedRangeLast);
            }
          });
        }
      }
        if(selectedDays.length ==1){
          setTimeout(()=>{
            weekDays.forEach((day) => {
              let dayText = parseInt(day.textContent.split(" ").join(''), 10);
              let startDayText = parseInt(selectedDays[0].textContent.split(" ").join(''), 10);
              let endDayText = parseInt(selectedDays[1].textContent.split(" ").join(''), 10);

              // Проверяем, является ли день одним из первых дней недели
              const firstDaysOfWeek = [5, 12, 19, 26];
              const isFirstDayOfWeek = firstDaysOfWeek.includes(dayText);

              // Сравниваем с начальной и конечной датой
              if (dayText >= startDayText && dayText <= endDayText) {
                if (dayText === startDayText) {
                  let start = document.createElement('div');
                  start.className = 'selected-range-first';
                  day.appendChild(start);
                } else if (dayText === endDayText) {
                  let end = document.createElement('div');
                  end.className = 'selected-range-last';
                  if(!isFirstDayOfWeek){
                    day.appendChild(end);

                  }
                } else if (dayText > startDayText && dayText < endDayText) {
                  let between = document.createElement('div');
                  between.className = 'selected-range';
                  if (isFirstDayOfWeek) {
                    between.classList.add('selected-range-startweek'); // Добавляем класс для первых дней недели
                  }
                  day.appendChild(between);
                }
                daysBetween.push(day);
              }
            });

          },100)

        }
    })
  })


})
