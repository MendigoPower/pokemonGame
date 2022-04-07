const monsters = {
    Emby: {
        position: {
            x: 360,
            y: 400,
        },
        image: {
            src: './img/embySprite.png'
        },
        frames: {
            max: 4,
            hold: 60
        },
        animate: true,
        name: 'Emby',
        attacks: [attacks.Tackle, attacks.Fireball]
    },
    Draggle: {
        position: {
            x: 1070,
            y: 150,
        },
        image: {
            src: './img/draggleSprite.png'
        },
        frames: {
            max: 4,
            hold: 60
        },
        animate: true,
        isEnemy: true,
        name: 'Draggle',
        attacks: [attacks.Tackle, attacks.Fireball]
    }
}
