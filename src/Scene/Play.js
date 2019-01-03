class Play extends Phaser.Scene{
    constructor(){
        super("Play")
    }
    preload(){
        console.log('Play preload')
    }

    create(){
        let text = this.add.text( window.innerWidth/2, window.innerHeight/2, '游戏开始', { fill: '#000' });
        let button  = this.add.text(window.innerWidth/2, window.innerHeight/2 - 50, '点击这里开始游戏', { fill: '#000' })
        this.input.on('pointerdown', () => {
            console.log('游戏结束')
            // 打开下一个场景  并传值
            this.scene.start('GameOver',  {  level: 4  })
        })

        // button.setInteractive()
        // button.on('pointerdown', () => {
        //     console.log('click button')
        // })
    }

    update(){

    }
}

export default Play