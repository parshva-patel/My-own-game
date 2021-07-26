var road ,roaodImage,alphaImage,maskImage,sanitizerImage,deltaImage
var gamaImage,boy,boyImage,vaccineImage,madicineImage
var scene,sceneImage,groung

var gameState=0
var score=0
var life=3

function preload(){
    maskImage=loadImage("mask.png")
    roadImage=loadImage("Road.png")
    alphaImage=loadImage("Alpha.png")
    sanitizerImage=loadImage("Sanitizer.png")
    deltaImage=loadImage("Delta.png")
    gamaImage=loadImage("Gama.png")
    vaccineImage=loadImage("Vaccine.png")
    madicineImage=loadImage("Madicines.png")
sceneImage=loadImage("backgroung.jpg")
}

function setup(){
    createCanvas(1000,600)
scene=createSprite(500,300,width,height)
scene.addImage(sceneImage)
scene.scale=2.1

}

function draw(){
    background("white")
    if (gameState===0){
        scene.velocityX=-3


    if (scene.x<0){
scene.x=scene.width/2
    }
    }
    drawSprites()
}