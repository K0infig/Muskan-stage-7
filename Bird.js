class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImg = loadImage("sprites/smoke.png");

    this.trajectory =[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    /*  
    position: (2)
    [0] : x
    [1] : y
    
    
    */

    if(this.body.velocity.x>10 && this.body.position.x>200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);

    }
    

    /*  
  trajectory: (n)
    [0] : Array(2)
          [
            [0]:x0
            [1]:y0
          ]
    [1] : Array(2)
     [
            [0]:x1
            [1]:y1
          ]
    [2]: Array(2)
     [
            [0]:x2
            [1]:y2
          ]
    [3]:Array(2)......n-1
    
    
    */
    //console.log(this.trajectory);

   for(var i=0; i<this.trajectory.length; i++){
        image(this.smokeImg, this.trajectory[i][0],this.trajectory[i][1]);
   }
  }
}
