class Player{
    constructor() {
        this.name = null;
        this.distance=0;
        this.index = null;
    }
    getCount() {
        var playerCountref = database.ref('playerCount');
        playerCountref.on('value', function(data) {
            playerCount = data.val();
        })
    }
    update() {
        var playerindex='Players/Player'+this.index;
        database.ref(playerindex).set({
            name: this.name,
            distance: this.distance
        })
    }
    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }
    static getPlayerInfo() {
        var playerinforef = database.ref('Players');
        playerinforef.on('value', (data) => {
            allplayers = data.val();
        })
    }
}