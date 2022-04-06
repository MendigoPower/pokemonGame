const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1360;
canvas.height = 760;

c.fillStyle = 'grey'
c.fillRect(0, 0, canvas.width, canvas.height);

const image = new Image();
image.src = './img/rainCouverTown.png';

const playerImage = new Image()
playerImage.src = './img/playerDown.png'

image.onload = () => {
    c.drawImage(image, -285, -1100);
    c.drawImage(playerImage, canvas.width / 2 - playerImage.width / 2, canvas.height / 2 - playerImage.height / 2);
}
