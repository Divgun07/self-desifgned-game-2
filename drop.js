class drop {
    constructor(x,y){
        this.image=loadImage("drop.jpg");
this.body=Bodies.circle(x,y,10);
this.x=x;
this.y=y;
this.radius=10;
World.add(world,this.body);
//this.body.velocityY= 3;

    }
  display(){
  imageMode(CENTER);
image(this.image,this.body.position.x,this.body.position.y,10,10);

  }
  
}
