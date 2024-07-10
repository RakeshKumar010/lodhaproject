let sideBtnId = document.getElementById('sideBtnId')
let offerId =document.getElementById('offerId')
let body =document.getElementsByTagName('body')

sideBtnId.addEventListener('click',()=>{
    // offerId.style.display='block'

    if (offerId.style.display=='block') {
        // sideBtnId.style.width='100%'
        offerId.style.display='none'
    }else{
        offerId.style.display='block'
    }
})


const floorText=document.querySelectorAll('.floor-text')




floorText[0].addEventListener('click',()=>{
    floorText[0].classList.add('active')
    floorText[1].classList.remove('active')
    floorText[2].classList.remove('active')
    floorText[3].classList.remove('active')

})
floorText[1].addEventListener('click',()=>{
    floorText[1].classList.add('active')
    floorText[0].classList.remove('active')
    floorText[2].classList.remove('active')
    floorText[3].classList.remove('active')

})
floorText[2].addEventListener('click',()=>{
    floorText[2].classList.add('active')
    floorText[0].classList.remove('active')
    floorText[1].classList.remove('active')
    floorText[3].classList.remove('active')

})
floorText[3].addEventListener('click',()=>{
    floorText[3].classList.add('active')
    floorText[0].classList.remove('active')
    floorText[1].classList.remove('active')
    floorText[2].classList.remove('active')

    
})


const getstartId =document.getElementById('getstartId')



setTimeout(() => {
    getstartId.click()
}, 5000);

setInterval(()=>{
    getstartId.click()

},17000)
 
 