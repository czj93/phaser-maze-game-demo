class Play extends Phaser.Scene{
    constructor(){
        super("Play")
    }
    preload(){
        console.log('Play preload')
    }

    create(){
        let text = this.add.text( window.innerWidth/2, window.innerHeight/2, '游戏开始', { fill: '#000' });
        this.input.on('pointerdown', () => {
            console.log('游戏结束')
            // 打开下一个场景  并传值
            this.scene.start('GameOver', {  level: 4  })
        })
    }

    update(){

    }
}

export default Play