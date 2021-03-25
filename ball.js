class Ball {
    constructor(x,y) {
      var options = {
          isStatic:false,
         restitution:1,
          friction:0,
          density:0.5
      }
    
      this.body = Bodies.circle(x,y,25,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      translate(pos.x,pos.y);
      ellipseMode(RADIUS);
      fill("darkblue");
      ellipse(0, 0, 25,25 );
  }
}

