// creating a random color hex value

const randomColor=function(){
    const hex ="0123456789ABCDEF"
    let color='#'
    for (let i = 0; i < 6; i++){
       
        color+=hex[Math.floor(Math.random()*16)];
        
    }
    return color;
};


console.log(randomColor())
const startChangingColor =function () {
    setInterval(bgChange,500)
    function bgChange(){
        document.body.style.backgroundColor = randomColor();
    }
}
const stopChangingColor =function() {
    clearInterval(startChangingColor)
}
document.getElementById('start').addEventListener('click',startChangingColor);
document.getElementById('stop').addEventListener('click',stopChangingColor);