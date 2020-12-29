class Player{
    constructor() {
        this.name = null;
        this.distance=0;
        this.index = null;
        this.place = null;
        this.saveplace = 0;
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
    getRank() {
        var rankref = database.ref("Rank");
        rankref.on("value", (data) => {
            this.place = data.val();
        })
    }
    static updateRank(rank) {
        database.ref('/').update({
            Rank: rank
        });
    }
    static getPlayerInfo() {
        console.log("Called");
        var playerinforef = database.ref('Players');
        playerinforef.on('value', (data) => {
            allplayers = data.val();
            //console.log(allplayers);
        })
    }
}