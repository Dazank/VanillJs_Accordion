let sections = document.querySelectorAll('section')
let paragraphs = document.querySelectorAll('.paragraph')


sections.forEach(section=>{
    section.addEventListener('click', e=>{
e.stopPropagation
if(e.target.tagName == 'DIV' || 'IMG'){
    section.lastChild.previousSibling.classList.toggle('closed_paragraph');
    section.lastChild.previousSibling.classList.toggle('open_paragraph');
    console.log(section.firstChild.nextElementSibling.firstChild.nextElementSibling)
     let plusButton = section.firstChild.nextElementSibling.firstChild.nextElementSibling
     let buttonSrc = plusButton.getAttribute('src');
     if (buttonSrc == './assets/images/icon-plus.svg'){
        plusButton.setAttribute('src','./assets/images/icon-minus.svg' )
     }
     else{
        plusButton.setAttribute('src','./assets/images/icon-plus.svg' )
     }
}

    })
})