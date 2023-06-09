import { Vector } from "./Vector.js";

class VectorAxe extends Vector {
  constructor(len, angle, startPoint, lineColor, lineWidth = 1) {
    super(len, angle, startPoint, lineColor, lineWidth);
  }

  draw(field, arrow = true) {
    super.draw(field);
    if(arrow) { this.drawArray(field) }     
  }

  drawArray(field, color = 'black', lineWidth = 1, angleArray = 10, len = 25 ) {

    const shortLen = Math.sin(this.toRadian(angleArray))*len*2;

    field.beginPath();
    let [ xS, yS ] = [ this.endPoint.x, this.endPoint.y ];
    let [ xE, yE ] = [ null, null];
    field.moveTo(xS, yS);
    
        [ xE, yE ] = [ xS - Math.cos(this.toRadian(angleArray - this.angle))*len, 
        yS - Math.sin(this.toRadian(angleArray - this.angle))*len ];
        field.lineWidth = lineWidth;
        field.lineTo(xE, yE);
        [ xS, yS ] = [ xE, yE ];
        [ xE, yE ] = [ xS - Math.cos(this.toRadian(90 + this.angle))*shortLen, 
        yS + Math.sin(this.toRadian(90 + this.angle))*shortLen];
        field.lineWidth = 1;
        field.lineTo(xE, yE);
        field.closePath();
    
    field.fillStyle = color;
    field.fill(); 
  }

}

export { VectorAxe }