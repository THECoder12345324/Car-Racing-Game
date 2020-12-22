var placecheck = 0;

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
        car1 = createSprite(350, 200, 50, 50);
        car1.addImage(car1img);
        car2 = createSprite(550, 200, 50, 50);
        car2.addImage(car2img);
        car3 = createSprite(750, 200, 50, 50);
        car3.addImage(car3img);
        car4 = createSprite(950, 200, 50, 50);
        car4.addImage(car4img);
        cars = [car1, car2, car3, car4];
    }
    play() {
        form.hide();
        //textSize(20);
        //text("Game started", width / 2 - 200, height / 2);
        Player.getPlayerInfo();
        if (allplayers !== undefined) {
            background(102, 102, 102);
            image(trackimg, 30, 0 - (height * 3.25), width, height * 5);
            //var displaypos = 130;
            var index = 0;
            var x = displayWidth / 6;
            var y = displayHeight;
            for (var plr in allplayers) {
                index += 1;
                x += 250;
                y = displayHeight - allplayers[plr].distance;
                cars[index - 1].x = x;
                cars[index-1].y = y;
                if (index === player.index) {
                    fill("red");
                    ellipseMode(RADIUS)
                    ellipse(x, y, 60, 60);
                    textSize(20);
                    fill("white");
                    text("You", x - 25, y - 80);
                    camera.position.x = displayWidth / 2;
                    camera.position.y = cars[index-1].y;
                }
                else {
                    //cars[index-1].shapeColor = "black";
                }
            }
        }
        if (player.distance > 3800) {
            gamestate = 2;
            placecheck += 1;
            game.updateState(gamestate);
        }
        if (placecheck == 1) {
            place += 1
        }
        if (keyIsDown(UP_ARROW) && player.index !== null && gamestate === 1) {
            player.distance += 10;
            player.update();
        }

        drawSprites();

    }
    end() {
        console.log("Game Ended");
        textSize(20);
        fill("black");
        text("The game ended!!!", width / 2 - 200, height / 2 - (height * 5));
        var displaypos = height / 2 + 200;
        if (allplayers !== undefined) {
            var index = 0;
            for (var plr in allplayers) {
                index += 1;
                displaypos += 200
                if (index === player.index) {
                    fill("red");
                }
                else {
                    fill("black");
                }
                text("" + player.name + "'s place: " + place, width / 2 - 100, displaypos - (height * 5));
            }
        }
    }
}