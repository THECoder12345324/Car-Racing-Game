class Form {
    constructor(){
        this.input = createInput("name");
        this.button = createButton("PLAY");
        this.reset = createButton("Reset");
        this.greeting = createElement('h2');
        this.displayallnames = createElement('h6');
        this.allplayers = allplayers;
        this.click=false;
    }
    display() {
        if (!this.click) {
            this.button.mousePressed(() => {
                this.input.hide();
                this.button.hide();
                this.click = true;

                player.name = this.input.value();
                playerCount += 1;
                player.index = playerCount;
                player.update();
                player.updateCount(playerCount);

                this.greeting.html("Hello, "+player.name+" please wait for the game to start");
                this.greeting.position(displayWidth / 2 - 250, displayHeight / 2 - 100);
                
                Player.getPlayerInfo();
                var displaypos = 120;
                console.log("Went Inside")
                console.log(allplayers);
                for (var plr in this.allplayers) {
                    console.log("Went Inside Here as well");
                    displaypos += 50;
                    fill("black");
                    textSize(20);
                    text("Name:" + this.allplayers[plr].name, width / 2, height /2);
                    //this.displayallnames.html("" + allplayers[plr].name, 10, 20 + displaypos);
                    //this.displayallnames.position();
                }
            });
            this.reset.position(displayWidth - 100,displayHeight - 100)
            this.reset.mousePressed(() => {
                player.updateCount(0);
                game.updateState(0);
            })
        }
    }
    hide() {
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
}