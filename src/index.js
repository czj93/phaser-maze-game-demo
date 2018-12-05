import Phaser from 'phaser';
import Preload from './Scene/Preload'
let game;

window.onload = function(){
    game = new Phaser.Game({
        type: Phaser.CANVAS,
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundColor: 0xdddddd,
        scene:[playGame, Preload]
    })
}


class playGame extends Phaser.Scene{
    constructor(){
        super("playGame")
    }
    preload(){
        console.log('preload')
    }

    create(){

    }

    update(){

    }
}