class Form {
    constructor(){

    }
    display() {
        //var title = createElement('h1');
        //title.html("Multiplayer Car Racing Game");
        //title.position(width / 2, 30);

        var input = createInput("name");
        //input.position(width / 2, height / 2);

        var button = createButton("PLAY");
        //button.position(width / 2, (height / 4) * 3);
        var click=false;

        var greeting = createElement('h2');

        if (!click) {
            button.mousePressed(function(){
                input.hide();
                button.hide();
                click = true;

                var name = input.value();
                playerCount += 1;
                player.update(name);
                player.updateCount(playerCount);

                greeting.html("Hello, "+name+" please wait for the game to start");
                greeting.position(width / 2, height / 2);
            });
        }
    }
}