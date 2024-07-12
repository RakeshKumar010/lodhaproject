let sideBtnId = document.getElementById('sideBtnId')
let offerId =document.getElementById('offerId')
let body =document.getElementsByTagName('body')
const popupFormMain =document.querySelector('.popup-form-main')
const popupBrochureFormMain =document.querySelector('.popup-brochure-form-main')
const closeiBtn =document.querySelector('#closeiBtn')
const brochureCloseiBtn =document.querySelector('#brochureCloseiBtn')
const offerEnquiry =document.querySelector('#offerEnquiry')
const arrowBtn =document.querySelector('#arrowBtn')
const formHeader =document.querySelector('#formHeader')
const enquireFormRight =document.querySelector('#enquireFormRight')
const rightSpecialOffer =document.querySelector('#rightSpecialOffer')
// offerEnquiry.addEventListener('click',()=>{
// })
enquireFormRight.style.display='none'
rightSpecialOffer.addEventListener('click',()=>{
    if(enquireFormRight.style.display=='none'){

        enquireFormRight.style.display='block'
    }else{
        enquireFormRight.style.display='none'

    }
})
arrowBtn.addEventListener('click',()=>{
    // alert('hi')
    if (arrowBtn.style.transform=='') {
    arrowBtn.style.transform='rotate(180deg)';
    formHeader.style.display='block'
        
    }else{

        arrowBtn.style.transform='';
        formHeader.style.display='none'
    }

})
const popupShow =()=>{
    popupFormMain.style.display='flex'

}
const popupBrochureShow =()=>{
    popupBrochureFormMain.style.display='flex'

}

closeiBtn.addEventListener('click',()=>{
    popupFormMain.style.display='none'
})
brochureCloseiBtn.addEventListener('click',()=>{
    popupBrochureFormMain.style.display='none'
})
sideBtnId.addEventListener('click',()=>{
    // offerId.style.display='block'

    if (offerId.style.display=='block') {
        // sideBtnId.style.width='100%'
        offerId.style.display='none'
    }else{
        offerId.style.display='block'
    }
})


setTimeout(() => {
    offerEnquiry.click()
}, 5000);


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




 
 
 