document.getElementById('lake').onclick =function(){
    alert("Lake Clicked")
}

document.getElementById('jatayu').addEventListener('click',function(e) {
    alert('Clicked on Jatayu Earth Centre')
    console.log(e)
    console.log(e.timeStamp)
}, false)
//types, timestamp, defaultPrevented, 
// target, toElement, srcElement, currentTarget
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode

//event propagation