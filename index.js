import { VectorCurrent } from "./script/VectorCurrent.js";

const startPoint = {x: 150, y: 150};

const canvas = document.querySelector('.field');
[canvas.width, canvas.height ] =  [ startPoint.x * 2, startPoint.y * 2 ] ;

const field = canvas.getContext('2d');


const v1 = new VectorCurrent (150, 90, startPoint, 'rgba(255, 255, 000, 0.8)').draw(field);
const v3 = new VectorCurrent (150, 210, startPoint, 'rgba(255, 000, 000, 0.8)').draw(field);
const v2 = new VectorCurrent (150, 330, startPoint, 'rgba(000, 255, 000, 0.8)').draw(field);


 