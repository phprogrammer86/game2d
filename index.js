

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d'); // criando um context para o canvas

//passando as dimensoes para o canvas
canvas.width = 1024
canvas.height = 576

const scaledCanvas = {
    width: canvas.width / 4,
    height: canvas.height / 4
}

const floorCollisions2D = []
for (let i = 0; i < floorCollisions.length; i += 36) {
    floorCollisions2D.push(floorCollisions.slice(i, i + 36))
}

const collisionBlocks = []
floorCollisions2D.forEach((row, y) => {
    row.forEach((Symbol, x) => {
        if (Symbol === 202) {
            collisionBlocks.push(
                new CollisionBlocks({
                    position: {
                        x: x * 16,
                        y: y * 16,
                    }
                })
            )
        }
    })
})

const gravity = 0.5;

const player = new Player({
    x: 0,
    y: 0,
});
const player2 = new Player({
    x: 300,
    y: 100,
});

const keys = {
    d: {
        pressed: false,
    },
    a: {
        pressed: false,
    }
}

const background = new Sprite({
    position: {
    x: 0,
    y: 0,
    },
    imageSrc: './assets/background.png',
})

function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle ="#ffffff"; 
    c.fillRect(0, 0, canvas.width, canvas.height); 

    c.save()
      
    background.update();
    collisionBlocks.forEach((collisionBlock) => {
        collisionBlock.update()
    })
    c.restore()


    player.update();
    player2.update();

    player.velocity.x = 0
    if (keys.d.pressed) player.velocity.x = 2
    else if (keys.a.pressed) player.velocity.x = -1

    

}

animate()

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'd':
        keys.d.pressed = true;
        break
        case 'a':
        keys.a.pressed = true;
        break
        case 'w':
        player.velocity.y = -20     
        break
    }
})

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'd':
        keys.d.pressed = false;
        break
        case 'a':
        keys.a.pressed = false;
        break
       
    }
})



