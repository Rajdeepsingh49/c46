class Form{
    constructor(){
        this.button = createButton("START");
        this.title1 = createElement('h3'); 
        this.title2 = createElement('h4'); 
    }
   hide(){
       this.button.hide();
   }
    displayStart(){
      sound1.loop();
     
      this.title1.html("WELCOME GAMER");
      this.title1.position(60, 100);
      this.title1.style('font-size', '70px');
      this.title1.style('color', 'red');

      this.title2.html("PLEASE CLICK ON START");
      this.title2.position(80, 190);
      this.title2.style('font-size', '50px');
      this.title2.style('color', 'red');


     this.button.position(width-1230,height-400);
     this.button.style('width', '200px');
     this.button.style('height', '50px');
     this.button.style('background', 'yellow');
     
     this.button.mousePressed(()=>{
         console.log("Check");
         looby = new Looby();
         looby.display();
         this.title1.hide();
         this.title2.hide();
     })
     
    }
    
}