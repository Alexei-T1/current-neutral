

class Vector {
  constructor(len, angle, startPoint = { x: 0, y: 0}, lineColor = 'black', lineWidth = 1)
  {
    this.len = len;
    this.angle = angle;
    this.color = lineColor;
    this.lineWidth = lineWidth;

    this.startPoint = startPoint;
    this.endPoint = { x: this.len * Number(Math.cos(this.toRadian(this.angle)).toFixed(2)) + this.startPoint.x,
      y: this.startPoint.y - this.len * Number(Math.sin(this.toRadian(this.angle)).toFixed(2))};
  }

  toRadian(angle) {
    const k = Math.PI / 180;
    return angle * k;
  }

  draw(field) {

    const [ xS, yS ] = [ this.startPoint.x, this.startPoint.y]; 
    const [ xE, yE ] = [ this.endPoint.x, this.endPoint.y]; 

    field.beginPath();
    field.moveTo(xS,yS);
    field.lineWidth = this.lineWidth;
    field.lineTo(xE, yE);
    field.strokeStyle = this.color; 
    field.stroke();
  }

}


export { Vector }