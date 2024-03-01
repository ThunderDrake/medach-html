import { easepick, RangePlugin } from '@easepick/bundle';
const picker = new easepick.create({
  element: document.getElementById('datepicker'),
  css: function(s) {
    console.log(s)
    /* to load default style into shadow dom */
    const cssLinks = ["https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.0/dist/index.css"]
    cssLinks.forEach(cssLink => {
        const link = document.createElement('link');
        link.href = cssLink;
        link.rel = 'stylesheet';
        const onReady = () => {
        this.cssLoaded++;

        if (this.cssLoaded === cssLinks.length) {
            this.ui.wrapper.style.display = '';
        }
        };
        link.addEventListener('load', onReady);
        link.addEventListener('error', onReady);
        this.ui.shadowRoot.append(link);
    })

    /* append custom style css */
    const css = `
        .container.range-plugin {
            box-shadow: none;
            font-family: Helvetica, sans-serif;
        }
        .dayname {
          width: 30px;
          height: 40px;
        }

        .day {
          width: 30px;
          height: 40px;
          font-weight: bold;
        }
        .calendar>.days-grid>.day{
          height: 40px;
          min-width:auto;
          max-width:auto;
          min-height:auto;
          max-height:auto;
          display:flex;
          justify-content:center;
          align-items:center;
        }
        .range-plugin-tooltip {
          background-color: rgba(154, 140, 240, 0.2);
        }
        .container.range-plugin .calendar>.days-grid>.day.end, .container.range-plugin .calendar>.days-grid>.day.start{
          background-color: rgba(154, 140, 240, 1);
          border-radius:100%;
          width:20px;
          height:20px;
        }
        .container.range-plugin .calendar>.days-grid>.day.in-range{
          background-color: rgba(154, 140, 240, 0.2);

        }
        .container.range-plugin .calendar>.days-grid>.day.end:after{
          content:none;
        }
        .container.range-plugin .calendar>.days-grid>.day.start:after{
          content:none;
        }
    `
    const style = document.createElement('style');
    const styleText = document.createTextNode(css);
    style.appendChild(styleText);

    this.ui.shadowRoot.append(style);
    this.ui.wrapper.style.display = '';
},
  lang: 'ru-RU',
  inline: true,
  plugins: [RangePlugin],
  tooltip: false,
  tooltipNumber	:false
});
