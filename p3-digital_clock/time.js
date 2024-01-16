const clock=document.getElementById('clock')
// document.querySelector('#clock')

// console.log(date.toLocaleDateString())

setInterval(function(){
    let date=new Date()
    time=date.toLocaleTimeString()

    clock.innerHTML=`<span>${time}</span>`
    // console.log(date.toLocaleTimeString())
},1000)
