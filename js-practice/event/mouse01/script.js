/*
对于 mouseover：

event.target —— 是鼠标移过的那个元素。
event.relatedTarget —— 是鼠标来自的那个元素（relatedTarget → target）。

mouseout 则与之相反：

event.target —— 是鼠标离开的元素。
event.relatedTarget —— 是鼠标移动到的，当前指针位置下的元素（target → relatedTarget）。
*/

container.onmouseover = container.onmouseout = handler 

function handler(event) {
    function str(el){
        if (!el) return "null"
        return el.className || el.tagName
    }
    
    log.value += event.type + ': ' + ' target=' + str(event.target) + ', relatedTarget=' + str(event.relatedTarget) + '\n'
    log.scrollTop = log.scrollHeight 

    if (event.type == 'mouseover') {
        event.target.style.background = 'pink'
    }

    if (event.type == 'mouseout') {
        event.target.style.background = ''
    }

}