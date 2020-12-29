const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var loobyimg;
var Startimg;
var looby;
var b;
var hr;
var sec;
var min;
var player1;
var g;
var canvas;
var gameState = 0;

function preload(){
 Startimg = loadImage("sprites/BG 12.png");
 loobyimg = loadImage("sprites/BG 8.jpg");
 characterimg = loadImage("sprites/BG 9.png");
 sound1 = loadSound("sprites/Doraemon Piano Song.mp3");

}
function setup(){
 canvas = createCanvas(windowWidth,windowHeight);
 hr = hour();
 sec = second();
 min = minute();
 form = new Form();
 form.displayStart();
 background(Startimg,width,height);
}

function draw(){
 if(gameState === 2){
    g = new Game(looby.character.value(),looby.backgroundtrack.value());
    g.start();
    g.playWithai(); 
 }
 
}