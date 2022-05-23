var koushikPressed = false, karthikPressed = false, dharshithPressed = false, gurucharanPressed = false
var gnanasreePressed = false, jeevaPressed = false, vyshnaviPressed = false, sherlyPressed = false


function preload(){
  clickImg = loadImage("clickHere.png")


  koushikImage = loadImage("koushikGame.png")
  karthikImage = loadImage("karthikGame.png")
  dharshithImage = loadImage("dharshithGame.png")
  gurucharanImage = loadImage("guruCharanGame.png")
  gnanasreeImage = loadImage("gnanasreegames.png")
  jeevajenireethImage = loadImage("jeevajenireethGame.png")
  vyshnaviImage = loadImage("vyshnaviGame.png")
  sherlyImage = loadImage("sherlyGame.png")

}

function setup() {
  createCanvas(windowWidth,windowHeight);

 koushikGame = createSprite(100,height/2-100,200,200)
 koushikGame.addImage(koushikImage)
 koushikGame.scale = 0.5
 koushikGame.visible = false
 button1 =  createSprite(100,height/2+20, 50, 50);
 button1.addImage(clickImg)
 button1.scale = 0.5

 karthikGame = createSprite(width/2-200,height/2-100,200,200)
 karthikGame.addImage(karthikImage)
 karthikGame.scale = 0.5
 karthikGame.visible = false
 button2 =  createSprite(width/2-200,height/2+20, 50, 50);
 button2.addImage(clickImg)
 button2.scale = 0.5

 dharshithGame = createSprite(width/2+200,height/2-100,200,200)
 dharshithGame.addImage(dharshithImage)
 dharshithGame.scale = 0.5 
 dharshithGame.visible = false
 button3 =  createSprite(width/2+200,height/2+20, 50, 50);
 button3.addImage(clickImg)
 button3.scale = 0.5

 gurucharanGame = createSprite(width-100,height/2-100,200,200)
 gurucharanGame.addImage(gurucharanImage)
 gurucharanGame.scale = 0.5 
 gurucharanGame.visible = false
 button4 =  createSprite(width-100,height/2+20, 50, 50);
 button4.addImage(clickImg)
 button4.scale = 0.5

 gnanasreeGame = createSprite(100,height-100,200,200)
 gnanasreeGame.addImage(gnanasreeImage)
 gnanasreeGame.scale = 0.8
 gnanasreeGame.visible = false
 button5 =  createSprite(100,height/2+110, 50, 50);
 button5.addImage(clickImg)
 button5.scale = 0.5


 jeevajenireethGame = createSprite(width/2-200,height-100,200,200)
 jeevajenireethGame.addImage(jeevajenireethImage)
 jeevajenireethGame.scale = 0.5 
 jeevajenireethGame.visible = false
 button6 =  createSprite(width/2-200,height/2+110, 50, 50);
 button6.addImage(clickImg)
 button6.scale = 0.5

 vyshnaviGame = createSprite(width/2+200,height-100,200,200)
 vyshnaviGame.addImage(vyshnaviImage)
 vyshnaviGame.scale = 0.5 
 vyshnaviGame.visible = false
 button7 =  createSprite(width/2+200,height/2+110, 50, 50);
 button7.addImage(clickImg)
 button7.scale = 0.5

 sherlyGame = createSprite(width-100,height-100,100,200)
 sherlyGame.addImage(sherlyImage)
 sherlyGame.scale = 0.5 
 sherlyGame.visible = false
 button8 =  createSprite(width-100,height/2+110, 50, 50);
 button8.addImage(clickImg)
 button8.scale = 0.5




}

function draw() {
  background(rgb(100,200,100)); 

  fill("brown")
  textSize(25)
  text("Games designed by the students", width/2-200,50)

  fill("brown")
  textSize(15)
  text("Designed by Koushik", 100-70,height/2+40+10)
  text("Designed by Karthik", width/2-200-70,height/2+40+10)
  text("Designed by Dharshith", width/2+200-75,height/2+40+10)
  text("Designed by Guru Charan", width-100-85,height/2+40+10)
  text("Designed by Gnana Sree", 100-80,height/2+110-20)
  text("Designed by Jeeva Jenireeth", width/2-200-90,height/2+110-20)
  text("Designed by Vyshnavi", width/2+200-75,height/2+110-20)
  text("Designed by Sherly", width-100-65,height/2+110-20)


  if(koushikPressed==true && karthikPressed==true && dharshithPressed==true && gurucharanPressed==true && gnanasreePressed==true && jeevaPressed==true && vyshnaviPressed==true && sherlyPressed==true){
  fill("green")
  textSize(30)
  text("Tap on the game images to start playing..", width/2-250,100)
  }


  if(mousePressedOver(button1)){
    koushikGame.visible = true
    koushikPressed = true
  }

  if(mousePressedOver(button2)){
    karthikGame.visible = true
    karthikPressed = true
  }

  if(mousePressedOver(button3)){
    dharshithGame.visible = true
    dharshithPressed = true
  }

  if(mousePressedOver(button4)){
    gurucharanGame.visible = true
    gurucharanPressed = true
  }

  if(mousePressedOver(button5)){
    gnanasreeGame.visible = true
    gnanasreePressed = true
  }

  if(mousePressedOver(button6)){
    jeevajenireethGame.visible = true
    jeevaPressed = true
  }

  if(mousePressedOver(button7)){
    vyshnaviGame.visible = true
    vyshnaviPressed = true
  }

  if(mousePressedOver(button8)){
    sherlyGame.visible = true
    sherlyPressed = true
  }


  if(mousePressedOver(koushikGame) && karthikPressed == true){
    window.open("https://studio.code.org/projects/gamelab/gjYsKBWCkaXb1rX_KtTUYl7aPmwfz2oELn-YR_MAFDo", "_blank")
  }

  if(mousePressedOver(karthikGame) && karthikPressed == true){
    window.open("https://studio.code.org/projects/gamelab/RSFkPhj5GwZqy5WIVWtcokKwKrje7o3VHY9FKfIClwY", "_blank")
  }

  if(mousePressedOver(dharshithGame) && dharshithPressed == true){
    window.open("https://studio.code.org/projects/gamelab/5O7Cx4W6M9m4HnE2BhPKCOhcw8nMuEbmvnQDSUR8mWs", "_blank")
  }

  if(mousePressedOver(gurucharanGame) && gurucharanPressed == true){
    window.open("https://studio.code.org/projects/gamelab/nIYrll4tr-qSromYGF9q7ipJCVCUrTcguPCjtc2vfGo", "_blank")
  }

  if(mousePressedOver(gnanasreeGame) && gnanasreePressed == true){
    window.open("https://studio.code.org/projects/spritelab/1-fR-f3Y_9cUXTv6d4fwlZq29-GY8XOxdCGDh2HzWlk/edit", "_blank")
  }

  if(mousePressedOver(jeevajenireethGame) && jeevaPressed == true){
    window.open("https://editor.p5js.org/bhavanidasireddy21/full/bML3Dd7z-", "_blank")
  }

  if(mousePressedOver(vyshnaviGame) && vyshnaviPressed == true){
    window.open("https://studio.code.org/projects/gamelab/EiTk-zt3GhwXEhZA78MhJoGW7BEbzAoM7M7fHR8GbFk", "_blank")
  }

  if(mousePressedOver(sherlyGame) && sherlyPressed == true){
    window.open("https://studio.code.org/projects/gamelab/1ndDCohUnV_-1OkZwyo2OJ1t-PJFMVs8r-5fDOrz8Zg", "_blank")
  }


  drawSprites();
}
