//Create variables here

var dog,happyDog,foodS, foodStock,database;
function preload()
{
  //load images here
  
   dogImg=loadImage("dogImg.png")
   happyDog=loadImage("happyDogImg.png")

}

function setup() {
	createCanvas(500, 500);
  
  var dog=createSprite(0,0,0,0);
  World.add(world,dog)
  imageMode(CENTER);
  image(dogImg,dog.position.x,dog.position.y);

  database = firebase.database();

  foodStock=database.ref('Food');
  foodStock.on("Value",readStock);

}


function draw() {  

background(46, 139, 87);


if(keyWentDown(UP_ARROW)){


writeStock(foodS);
dog.addImage(happyDog)

}

  drawSprites();

  //add styles here
  fill("Blue");
  stroke("Yellow");
  text(foodS,120,20);
  textSize(20);

}

function readStock(data){

  foodS=data.val();

}

function writeStock(x){

if(x<=0){
  x=0;
}
else{

  x=x-1;
}


database.ref('/').update({

  Food:x
})

}