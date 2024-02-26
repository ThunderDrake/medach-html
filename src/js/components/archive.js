import noUiSlider from 'nouislider';
document.addEventListener("DOMContentLoaded",() => {
  let html5Slider = document.getElementById('html5');
let formatSlider = document.getElementById('dateslider');

  if(html5Slider || formatSlider){
    noUiSlider.create(html5Slider, {
      start: [2534, 32000],
      connect: true,
      range: {
          'min': 0,
          'max': 50000
      }
  });
  let inputNumber = document.getElementById('input-number');
  let inputNumber2 = document.getElementById('input-number2');

  html5Slider.noUiSlider.on('update', function (values, handle) {

      let value = values[handle];

      if (handle) {
          inputNumber.value = Math.round(value);
      } else{
        inputNumber2.value = Math.round(value);
      }
  });
  inputNumber.addEventListener('change', function () {
      html5Slider.noUiSlider.set([null, this.value]);
  });

  noUiSlider.create(formatSlider, {
      // Values are parsed as numbers using the "from" function in "format"
      start: ['2002', '2018'],
      connect: true,

      range: {
          'min': 1995,
          'max': 2024
      },
      tooltips: {
          // tooltips are output only, so only a "to" is needed
          to: function(numericValue) {
              return Math.round(numericValue);
          }
      }
  });
  }


})
