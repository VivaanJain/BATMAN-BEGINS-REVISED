class Umbrella {


    constructor(x, y) {
     
         var options = {

              'isStatic': true
    


         }


         this.body = Bodies.rectangle(x, y, 20, 20, options)
         this.width = 60;
         bat1=loadImage("walking_2.png")
         this.height = 70;

         World.add(world, this.body);

    }


    display() {

         var pos = this.body.position;

       image(bat1,pos.x,pos.y);
    }


}