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


 