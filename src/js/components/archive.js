import noUiSlider from 'nouislider';
document.addEventListener("DOMContentLoaded",() => {
  const gridArchive = document.querySelector('.archiveGrid');
  const classicArchive = document.querySelector('.archiveClassic');
  const inlineBtn = document.querySelector('.apply-inline');
  const gridBtn = document.querySelector('.apply-grid');
  // const cards=[{
  //   image: {
  //     url: '../../img/monkey.png',
  //     alt:'Monkey image'
  //   },
  //   firstTags: ['Инфографика','Материал спонсирован'],
  //   title:'В роговице обнаружены патрульные Т-лимфоциты',
  //   description:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  //   date:'28.06.2022',
  //   author: 'Лев Рублёв',
  //   views: 192,
  //   t:'1.6',
  //   secondTags:

  // }]
  if(inlineBtn){
    console.log(inlineBtn)
    inlineBtn.addEventListener('click', () => {
      gridArchive.classList.remove('hidden');
      gridArchive.classList.add('flex');

      classicArchive.classList.add('hidden');
    });
  }
  if(gridBtn){
    console.log(gridBtn)

    gridBtn.addEventListener('click', () => {
    console.log(gridBtn)

      gridArchive.classList.add('hidden');
      gridArchive.classList.remove('flex');

      classicArchive.classList.remove('hidden');
    });
  }
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
