const ring = document.querySelectorAll('.ring');
const duration = 24;
const numItems = 32;

for (let i = 0; i < numItems; i++){
    const item = document.createElement('i');
    const hue = i * 98;
    const delay = (duration /numItems) * i;
    const rx = Math.random() * 360;
    const xy = Math.random() * 360;
    const rz = Math.random() * 360;

    item.style.setProperty('--delay','${delay}s');
    item.style.setProperty('--hue', hue);
    item.style,setProperty('--rx', '${rx}deg');
    item.style.setProperty('--ry','${ry}deg');
    item.style.setProperty('--rz', '${rz}deg');
    item.style.borderColor = 'hs1(${hue}, 100%, 75%)';
    item.style.boxShadow =  
    '0 0 1em hs1(${hue}, 100%, 75%)  Insert,0 0 1em hs1(${hue}, 100%, 75%)';
    item.style.animationDelay = '${delay}s';
    ring.appendchild(item);
}