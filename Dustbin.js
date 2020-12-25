class Dusbin {
  constructor(x,y,width,height){
      var change = {
          'isStatic': true
      }
  
  this.body = Bodies.rectangle(x, y, width, height,change);
  this.width = width;         //why defined again
  this.height = height;       //why defined again
  
  World.add(world, this.body);
 
}
  display(){
 var pos =this.body.position;
          
  rectMode(CENTER);                   //?
  fill("white")                       //?
  rect(pos.x,pos.y,this.width,this.height);   //?
                                
  }
}