class Game {
    constructor(){

    }
    getState() {
        var gamestateref = database.ref("gameState")
        gamestateref.on("value", function(data){
            gamestate = data.val();
        })
    }
    updateState(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
        if (gamestate === 0) {
            player = new Player();
            var playercountref = await database.ref("playerCount").once("value");
            if (playercountref.exists()) {
                playerCount = playercountref.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }
        car1 = createSprite(100, 200, 50, 50);
        car2 = createSprite(300, 200, 50, 50);
        car3 = createSprite(500, 200, 50, 50);
        car4 = createSprite(700, 200, 50, 50);
        cars = [car1, car2, car3, car4];
    }
    play() {
        form.hide();
        //textSize(20);
        //text("Game started", width / 2 - 200, height / 2);
        Player.getPlayerInfo();
        if (allplayers !== undefined) {
            //var displaypos = 130;
            var index = 0;
            var x = 0;
            var y;
            for (var plr in allplayers) {
                index += 1;
                x += 200;
                y = displayHeight - allplayers[plr].distance;
                cars[index - 1].x = x;
                cars[index-1].y = y;
                if (index === player.index) {
                    cars[index-1].shapeColor = "red";
                    camera.position.x = displayWidth / 2;
                    camera.position.y = cars[index-1].y;
                }
                else {
                    cars[index-1].shapeColor = "black";
                }
            }
            
        }
        if (keyIsDown(UP_ARROW) && player.index !== null) {
            player.distance += 10;
            player.update();
        }

        drawSprites();

    }
}