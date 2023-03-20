import { VectorAxe } from "./VectorAxe.js";

class VectorN extends VectorAxe {
  constructor(startPoint, endPoint, lineWidth = 1, color = 'blue') {
    super();
    this.startPoint = startPoint;
    this.endPoint = { x: endPoint.x + this.startPoint.x, y: -endPoint.y + this.startPoint.y };

    this.color = color;
    this.lineWidth = lineWidth;
    [ this.len, this.angle ] =  this.getAngLen({x: 0, y: 0}, endPoint);   
  }

  draw(field, arrow = true) {
    const [ xS, yS ] = [ this.startPoint.x, this.startPoint.y]; 
    const [ xE, yE ] = [ this.endPoint.x, this.endPoint.y]; 
    
    if(this.len === 0) {
      field.beginPath();
      field.moveTo(xS,yS);
      field.arc(xS, yS, 5, 0, 360);
      field.fillStyle = this.color;
      field.fill();
      return;
    }
    field.beginPath();
    field.moveTo(xS,yS);
    field.lineWidth = this.lineWidth;
    field.lineTo(xE, yE);
    field.strokeStyle = this.color; 
    field.stroke();
    
    if(arrow) { this.drawArray(field, 'blue', 2, 15, 15) }     
  }

  getAngLen(start, end) {
    let len = Math.sqrt((start.x + end.x)**2 + (start.y + end.y)**2);
    let angle = this.toDeg(Math.acos((start.x + end.x) / len));
 
    angle = angle >= 90 && end.y < 0 ? angle + (180 - angle)*2 : angle < 90 && end.y < 0
    ? 360 - angle : angle;
    len = Number(len.toFixed(0));

    return [ len, angle ];
  }

}

export { VectorN }