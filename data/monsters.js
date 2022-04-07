const embyImage = new Image()
embyImage.src = './img/embySprite.png'

const draggleImage = new Image()
draggleImage.src = './img/draggleSprite.png'

const monsters = {
    Emby: {
            position: {
                x: 360,
                y: 400,
            },
            image: embyImage,
            frames: {
                max: 4,
                hold: 60
            },
            animate: true,
            name:'Emby',
            attacks: [attacks.Tackle, attacks.Fireball]
        },
        Draggle: {
            position: {
                x: 1070,
                y: 150,
            },
            image: draggleImage,
            frames: {
                max: 4,
                hold: 60
            },
            animate: true,
            isEnemy: true,
            name:'Draggle',
            attacks: [attacks.Tackle,attacks.Fireball ]
        }
    }
