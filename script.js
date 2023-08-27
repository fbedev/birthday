const giftBox = document.getElementById('gift-box');
const picturesContainer = document.getElementById('pictures');

let isGiftBoxOpen = false;

giftBox.addEventListener('click', () => {
    if (!isGiftBoxOpen) {
        isGiftBoxOpen = true;
        giftBox.style.transform = 'rotateY(180deg)';
        setTimeout(() => {
            picturesContainer.style.display = 'block';
            dropPictures();
        }, 500);
    }
});

function dropPictures() {
    const pictureUrls = ['/pic1.jpg', '/pic2.jpg', '/pic3.jpg'];
    
    pictureUrls.forEach((url, index) => {
        const picture = document.createElement('div');
        picture.className = 'picture';
        picture.style.backgroundImage = `url(${url})`;
        picture.style.animation = `fall 1.5s ${index * 0.5}s both`;
        picturesContainer.appendChild(picture);
    });
}
