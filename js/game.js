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
            gamestate: state
        });
    }
    start() {
        if (gamestate === 0) {
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
    }
}