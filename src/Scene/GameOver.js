class GameOver extends Phaser.Scene {
    constructor(){
        super('GameOver')
    }

    preload(){
        console.log('game over preload')
    }

    create(){
        let text = this.add.text( window.innerWidth/2, window.innerHeight/2, '游戏结束', { fill: '#000' });
    }

    update(){

    }
}

export default GameOver