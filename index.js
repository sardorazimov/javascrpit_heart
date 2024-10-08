
onload = function (){
c = canvas.getContext('2d');
canvas.width = W = innerWidth;
canvas.height = H = innerHeight/2;
var y, x = 0, t = t2 = -1.6, x2, y2, xSave;
c.lineWidth = 1;
c.strokeStyle = "red";
c.fillStyle = "rgba(0,0,0,.02)"
var heart = false;
function draw(){
 c.fillRect(0, 0, canvas.width, canvas.height);
 c.save();
 c.translate(0, H/2);
 c.beginPath();
 if(heart == false){
     c.moveTo(x,y);
     x+=1.7;
     y = 2/Math.sin(x);
     c.lineTo(x,y);
 }
 else{
     c.moveTo(x,y);
     x = (32 * (Math.sin(t))**3) * 3 + xSave; 
     y = (21 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t)) * -3;
     c.lineTo(x,y);
     c.moveTo(x2,y2);
     x2 = (32 * (Math.sin(t2))**3) * 3 + xSave; 
     y2 = (21 * Math.cos(t2) - 5 * Math.cos(2*t2) - 2 * Math.cos(3*t2) - Math.cos(4*t2)) * -3;
     c.lineTo(x2,y2);
     if(t<1.7){
        t+=.1; 
        t2-=.1;
     }else{
         heart = false;
     }
 }
 if(x > W/4 && x < W/2 && heart == false){
     heart = true;
     xSave = x * 2;
     x2 = x;
     y2 = y;
     t = t2 = -1.6;
 }
 c.stroke();
 c.restore();
 requestAnimationFrame(draw);
   if(x > W){
       x = 0;
   }
}
requestAnimationFrame(draw);
} 
