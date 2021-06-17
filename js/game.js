class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
            console.log(gameState)
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player1_img);
    
    player2 = createSprite(800,500);
    player2.addImage("player2", player2_img);

    drops=createSprite(200,400,10,10);
    drops.shapeColor="red";

    players=[player1,player2];

        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                 image(hospital_img,0,0,displayWidth,displayHeight);
                 var x =100;
                 var y =200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     
                     players[index-1].x = x;
                     players[index-1].y = y;
                       
                     if(index === player.index){
                         
                        fill("black");
                        textSize(25);
                        text(allPlayers[plr].name ,x-25,y+25);

                         
                     }
                    fill(255);
                    textSize(20);
                     text("player 1 :"+allPlayers.player1.score,50,50);
                     text("player 2 :"+allPlayers.player2.score,50,80);
                 }
                

                 if(keyIsDown(UP_ARROW)){
                  drops.velocityY= -15;
                  
                if(drops.y<0 ){
                    drops.y=400;
                    drops.velocityY=0;
                }

                }
                 

                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 10
                    drops.x=-player.distance+400
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 10
                    drops.x=-player.distance+400
                    player.update();
                }
            
                 if (frameCount % 20 === 0) {
                     coronas = createSprite(random(100, displayWidth-100), 0, 100, 100);
                     coronas.velocityY = 6;
                     var rand = Math.round(random(1,3));
                     switch(rand){
                         case 1: coronas.addImage("coronas",c1_img);
                                 coronas.scale=0.3;
                         break;
                         case 2: coronas.addImage("coronas", c2_img);
                                 coronas.scale=0.2;
                         break;
                         case 3: coronas.addImage("coronas", c3_img);
                                 coronas.scale=0.2;
                         break;
                         
                     }
                     
                     if(player.score > 40 && player.score < 60){
                         coronas.addImage("coronas", c4deadly_img);
                         coronas.scale=0.4;

                         flag=1

                     }

                     coronaGroup.add(coronas);
                     
                 }
                 
                  if (player.index !== null) {
                  for(var i=0;i<coronaGroup.length;i++)  
                  {
                      if(coronaGroup.get(i).isTouching(players))
                      {
                          coronaGroup.get(i).destroy()
                        
                        if(flag===1)
                        {
                          player.score=player.score+10
                        }
                        else
                        {
                            player.score=player.score+1
                        }
                        player.update()
                      }
                      

                  }


                     
                  }
                
                  

         
         
        
         

    }

    end(){
       console.log("Game Ended");
    }
}