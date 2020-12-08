class Player{
    constructor() {

    }
    getCount() {
        var playerCountref = database.ref('playerCount');
        playerCountref.on('value', function(data) {
            playerCount = data.val();
        })
    }
    update(playername) {
        var playerindex='Player'+playerCount;
        database.ref(playerindex).set({
            name: playername
        })
    }
    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }
}