const xBtn= document.querySelector('.x-btn')
const menuAnim=document.querySelector('.animation-menu')

const diseble=()=>{
    menuAnim.classList.add('.diseble')
}

xBtn.addEventListener('click',diseble)