import { VectorAxe } from "./script/VectorAxe.js";
import { VectorN } from "./script/VectorN.js";

function calcDiagramm (canvas, startPoint, { len90, len210, len330 }, optionN) {
  [canvas.width, canvas.height ] =  [ startPoint.x * 2, startPoint.y * 2 ];

  const field = canvas.getContext('2d');

  const axeOptions = { len : 150, angle: 90, startPoint: startPoint};
  const currentOptions = { len : 100, angle: 90, startPoint: startPoint};

  function createAxe ( { len, angle, startPoint } ) {
    const axe90 = new VectorAxe (len, angle, startPoint).draw(field);
    const axe210 = new VectorAxe (len, angle + 120, startPoint).draw(field);
    const axe330 = new VectorAxe (len, angle + 240, startPoint).draw(field);
  }
  createAxe(axeOptions);

  const cur90 = new VectorAxe (len90, currentOptions.angle, currentOptions.startPoint,
    'rgba(255, 255, 000, 0.7)', 8)
  const cur210 = new VectorAxe (len210, currentOptions.angle + 120, currentOptions.startPoint,
    'rgba(255, 000, 000, 0.7)', 8);
  const cur330 = new VectorAxe (len330, currentOptions.angle + 240, currentOptions.startPoint,
      'rgba(000, 255, 000, 0.7)', 8);
  cur90.draw(field, false);
  cur210.draw(field, false);
  cur330.draw(field, false);

  const endN = { x: cur90.getEnd().x + cur210.getEnd().x + cur330.getEnd().x - 3*startPoint.x, 
        y: -cur90.getEnd().y - cur210.getEnd().y - cur330.getEnd().y + 3*startPoint.y };


  const vN = new VectorN(startPoint, endN, 3, 'rgba(000, 000, 255, 1)');
  optionN.innerText =  `${vN.len}%`
  vN.draw(field);

}
  

const startPoint = {x: 150, y: 150};
const valueStart = 100;
const valueCur = { len90: 100, len210: 100, len330: 100 }
const canvas = document.querySelector('.field');
const optionN = document.querySelector('.neutral_current');

calcDiagramm(canvas, startPoint, valueCur, optionN) ;

const sliders = Array.from(document.querySelectorAll('.option'));
const labels = Array.from(document.querySelectorAll('label'));


sliders.forEach( (i) => {
  i.min = '0';
  i.max = '100';
  i.value = valueStart;
  i.addEventListener('input', (ev) => {
    if(ev.target.value || ev.target.value === 0) {

      switch (ev.target.id) {
        case 'yellow':
          valueCur.len90 = ev.target.value;
          labels[0].innerText = `${ev.target.value}%`;
          break;
        case 'green':
           valueCur.len330 = ev.target.value;
           labels[1].innerText = `${ev.target.value}%`;
           break;
        case 'red':
          valueCur.len210 = ev.target.value;
          labels[2].innerText = `${ev.target.value}%`;
          break;
      }
   
      calcDiagramm(canvas, startPoint, valueCur, optionN);
    }
  });
});



 