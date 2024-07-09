let sideBtnId = document.getElementById('sideBtnId')
let offerId =document.getElementById('offerId')
let body =document.getElementsByTagName('body')

sideBtnId.addEventListener('click',()=>{
    // offerId.style.display='block'

    if (offerId.style.display=='block') {
        offerId.style.display='none'
    }else{
        offerId.style.display='block'
    }
})


 