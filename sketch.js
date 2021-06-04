var food,foodStock;
var dog,happyDog;
var database;

function preload(){
 dogImage=loadImage("doggie.png");
  happyDogImage=loadImage("happy.png");
}

function setup() {
 createCanvas(displayWidth,displayHeight);
database=firebase.database();

dog=createSprite(250,250,20,20);
dog.addImage(dogImage);

foodStock=database.ref("Food");
foodStock.on("value",readStock);


}



function draw() {
  background(46, 139, 87);  

if(keyWentDown(UP_ARROW)){
  writeStock(food);
  dog.addImage(happyDogImage);
}

  drawSprites();


  
}

function readStock(data){
  foodStock=data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}