import Phaser from 'phaser'
import Game  from '../index'
class Preload extends Phaser.Scene{
    constructor(){
        super("Preload")
    }
    preload(){
        console.log('Preload this')
        console.log(this)
    }

    create(){
        let text = this.add.text( window.innerWidth/2, window.innerHeight/2, '点击屏幕开始游戏', { fill: '#000' });
        this.input.on('pointerdown', () => {
            console.log('开始游戏')
            this.scene.start('Play')
        })
    }

    update(){

    }
}

export default Preload