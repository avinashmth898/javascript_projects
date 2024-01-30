document.getElementById('lake').onclick =function(){
    alert("Lake Clicked")
}
// To select individual tag(jatayu in this case)
// document.getElementById('jatayu').addEventListener('click',function(e) {
//     alert('Clicked on Jatayu Earth Centre')
//     console.log(e)
//     console.log(e.timeStamp)
// }, false)


//types, timestamp, defaultPrevented, 
// target, toElement, srcElement, currentTarget
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode

//event propagation


// To select the images tag (the parent tag)
// document.getElementById('images').addEventListener('click',function(e) {
//     alert('Clicked on images Earth Centre')
//     console.log(e)
//     console.log("Clicked Images")
// }, false)

// // To select individual tag(jatayu in this case)
// document.getElementById('jatayu').addEventListener('click',function(e) {
//     alert('Clicked on Jatayu Earth Centre')
//     console.log(e)
//     console.log("clicked Jatayu")
// }, false)

// inside to outside propagation bubbling mode if False/Default
// outside to Inside ropagation is capturing mode if True

document.getElementById('images').addEventListener('click',function(e) {
    alert('Clicked on images Earth Centre')
    console.log(e)
    console.log("Clicked Images")
}, true)

// To select individual tag(jatayu in this case)
document.getElementById('jatayu').addEventListener('click',function(e) {
    alert('Clicked on Jatayu Earth Centre')
    console.log(e)
    console.log("clicked Jatayu")
    // e.stopPropagation() // to stop the propagation
}, true)

document.getElementById('google').addEventListener('click',function(e){
    console.log("Google clicked")
    e.preventDefault()
}, false)