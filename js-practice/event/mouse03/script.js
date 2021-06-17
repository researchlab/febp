// table.onmouseover = function(event){
//     let target = event.target 
//     target.style.background = 'pink'
//     text.value += `over -> ${target.tagName}\n`
//     text.scrollTop = text.scrollHeight 
// }

// table.onmouseout = function(event) {
//     let target = event.target 
//     target.style.background = ''

//     text.value += `out <- ${target.tagName}\n`
//     text.scrollTop = text.scrollHeight 
// }

let currentElem = null 

table.onmouseover = function(event) {
    if (currentElem) return 

    let target = event.target.closest('td')

    if (!target) return 

    if (!table.contains(target)) return 

    currentElem = target 
    onEnter(currentElem)
}

table.onmouseout = function(event){

    if(!currentElem) return 

    let relatedTarget = event.relatedTarget 

    while(relatedTarget) {
        if (relatedTarget == currentElem) return 

        relatedTarget = relatedTarget.parentNode
    }

    ondragleave(currentElem)
    currentElem = null 
}

function onEnter(elem){
    elem.style.background = 'pink'
    text.value += `over -> ${currentElem.tagName}.${currentElem.className}\n`
    text.scrollTop = 1e6
}

function onLeave(elem){
    elem.style.background =''
    text.value += `out <- ${elem.tagName}.${elem.className}\n`
    text.scrollTop = 1e6
}