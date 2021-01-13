class glass {
    constructor(x,y,width,height){
        this.image=loadImage("empty glass.jpg");
this.body=Bodies.rectangle(x,y,width,height);
World.add(world,this.body);

    }
  display(){
imageMode(CENTER)
image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);

  }
}
