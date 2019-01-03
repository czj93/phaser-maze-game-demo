

## tilemap 设置碰撞 ， 碰撞检测
    Y 轴方向

http://labs.phaser.io/edit.html?src=src\game%20objects\tilemap\collision\tile%20callbacks.js    

``` 
    // game config
    physics: {
        default: 'arcade',  // 选择无力引擎
        arcade:{ gravity: { y: 200 } }  // Y 轴方向重力 200
    }

    // 设置需要碰撞检测的 tile
        setCollision  setCollisionBetween ...
        layer.setCollision(3)
    // 通过 physics 创建需要碰撞检测的物体
    var player = this.physics.add.image()

    // 添加碰撞检测
    this.physics.add.collider(player, layer);

```




### 注意
    键盘控制物体，并于墙壁实现碰撞检测，无论如何都设置不了
    主要问题在于  我通过改变 对象的 x y 属性来使对象移动，这无法实现碰撞检测
