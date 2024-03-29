class Drops{
    constructor(x, y){
        var options = { 
            'restitution':0.1,
            'friction':0.01
          }
          this.body = Bodies.circle(x, y, 5, options);
          this.radius = 5;
          World.add(world, this.body);

    }
   
    update(){
      if(this.body.position.y > height){
        Matter.Body.setPosition(this.body,{x:random(0, 500), y:random(0, 650)});
      }
    }
  
    display(){

        var pos = this.body.position

      noStroke();
      fill("blue");
      ellipseMode(RADIUS);
      ellipse(pos.x, pos.y, this.radius, this.radius);
    }
  }

