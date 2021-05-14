//Create variables here
var dog, dog1, happyDog, database, foods, foodStock
function preload() {
  dog1 = loadImage("Dog.png")
  happyDog = loadImage("HappyDog.png")

  //load images here
}


function setup() {
  createCanvas(500, 500);
  database = firebase.database()
  dog = createSprite(250, 330, 20, 20)
  dog.addImage(dog1)
  dog.scale = 0.3
}

function readStock(data) {
  foods = data.val()
}

function writeStock(x) {

  if (x <= 0) {
    x = 0
  } else {
    x = x - 1
  }
  database.ref('/').update({
    Food: x
  })
}

function draw() {
  background(46, 139, 87)
  foodStock = database.ref('Food')
  foodStock.on("value", readStock)
  if (keyWentDown(UP_ARROW)) {
    writeStock(foods)
    dog.addImage(happyDog)
  }
  fill("white")
  textSize(20)
  text("Food Remaining:" + foods, 170, 200)
  textSize(15)
  text("Press up arrow key to feed this.dog!", 140, 20)
  drawSprites();
  //add styles here

}



