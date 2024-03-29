class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadImage("walking_1.png");
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        
        World.add(world, this.umbrella)

        this.bestMan = loadImage("Bestman-01.png");
        
    }

    display(){
        var pos = this.umbrella.position;
        
        imageMode(CENTER);

        image(this.image,pos.x,pos.y+70,300,300);

        
        if(frameCount >= 200){

            image(this.bestMan,pos.x,pos.y+70,300,300);

        }
    }
}
