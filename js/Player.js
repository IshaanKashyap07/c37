class Player{
    constructor(){
        this.index = null;
        this.name = null;
        this.distance = 0;
    }

    getCount(){
       var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value",function(data){
            playerCount = data.val();
         })

    }

    updateCount(count){
      database.ref("/").update({
         'playerCount' : count
      });  

    }

    update(){
        var playerIndex = "players/player"+this.index;
        database.ref(playerIndex).set({
            'name': this.name,
            'distance':this.distance
            
        })
        
    }

    static getPlayerInfo(){
       var playerInfoRef = database.ref('players');
       playerInfoRef.on('value',(data)=>{
        allPlayers = data.val();
       }); 
    }
}


//allPlayers = {player1:{name:"Ishaan",distance:1220},
//player2:{name:"Isha",distance:2220},
//player3:{name:"Ekta",distance:1320},
// player4:{name:"Rahul",distance:4220}}
