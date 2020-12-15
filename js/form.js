class Form {
    constructor(){
        this.input = createInput("name");
        this.button = createButton("PLAY");
        this.greeting = createElement('h2');
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
                this.greeting.position(displayWidth / 2, displayHeight / 2);
            });
        }
    }
    hide() {
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
}