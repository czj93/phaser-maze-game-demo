import Preload from './Scene/Preload'
import Play from './Scene/Play'
import GameOver from './Scene/GameOver'
let game;

window.onload = function(){
    game = new Phaser.Game({
        type: Phaser.CANVAS,
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundColor: 0xdddddd,
        scene:[Preload, Play, GameOver]
    })
}


export default game