const posts = []

const images = [
    'https://dr.savee-cdn.com/things/6/0/ddba20ea875e5eba5e8856.jpg',
    'https://dr.savee-cdn.com/things/5/e/68f35e1404e45961765299.gif',
    'https://dr.savee-cdn.com/things/6/1/83d88d67b030d9aef082f8.jpg',
    'https://dr.savee-cdn.com/things/6/1/80259167b030d9aef046f9.jpg',
    'https://dr.savee-cdn.com/things/5/f/de5cc54d5cb418bb2bcaea.png',
    'https://dr.savee-cdn.com/things/6/1/6c578f1ff504a6334769b4.jpg',
    'https://dr.savee-cdn.com/things/6/1/94400a825d592e073f3693.png',
    'https://dr.savee-cdn.com/things/6/1/76ebbcfd9b0f8e00cf35d8.jpg',
    'https://dr.savee-cdn.com/things/5/f/a7ba986c46f2682c3c00f7.gif',
    'https://dr.savee-cdn.com/things/6/1/64711b0e69492ef09b7fd0.jpg',
    'https://dr.savee-cdn.com/things/6/1/86a41b67b030d9aef0abbd.jpg'
]

let imageIndex = 0;

for (let i = 1; i <= 80; i++) {
    let item = {
        id: i,
        title: `POST ${i}`,
        image: images[imageIndex]
    }
    posts.push(item);
    imageIndex++;
    if (imageIndex > images.length - 1) imageIndex = 0;
}

console.log(posts)