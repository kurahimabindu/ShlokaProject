class Paper{
  constructor(x,y,r){
     var options = {
         isStatic: false,
         restitution: 0.2,   
         friction:0.5,
         density:2.5
     }
     this.x = x
     this.y = y
     this.r = r
     this.body = Bodies.circle(this.x,this.y,this.r,options)
     World.add(world,this.body)
  }
  display(){
  var pos =this.body.position;
  var angle = this.body.angle;
  push();
  translate(pos.x, pos.y);
 rotate(angle);
 ellipseMode(RADIUS)
  fill("red")
  ellipse(0,0,this.r,this.r);    //why r instead of r/2?
  pop();
  }
}