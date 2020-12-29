class Game{
    constructor(c,t){
        this.character = c;
     
        if(t === "Ice Age"){
            this.track = loadImage("sprites/BG 4.jpg");
        }
        if(t === "Desert"){
           this.track = loadImage("sprites/BG 6.jpg");
        }
        this.carimage = loadImage("sprites/"+c+".png");
    }
    playWithai(){
      canvas.clear();
      console.log(this.track);
      canvas.background(this.track,windowWidth,windowHeight);
      
    
    }
    start(){
     player1 = createSprite(100,200,50,50);
     player1.addImage(this.carimage);

    }
}