function startMove(obj,iTarget,fn){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var flag = true;
        for (var attr in iTarget){
        var iCur = 0;
        if (attr == 'opacity'){
            iCur = Math.round((getStyle(obj,attr))*100);
        }else {
            iCur = parseInt(getStyle(obj,attr));
        }
        
        var speed = (iTarget[attr]-iCur)/8;
        speed = speed >0?Math.ceil(speed):Math.floor(speed);
        if (iCur != iTarget[attr]){
            flag = false;
        }
        if (attr == 'opacity'){
            obj.style.filter = 'alpha(opacity:'+(iCur+speed)+')';
            obj.style.opacity = (iCur + speed)/100;
        }else {
            obj.style[attr] = iCur + speed +'px';
        }
    }
    if (flag){
        clearInterval(obj.timer);
        console.log('clear');
        if (fn) {
            console.log('xxssx');
            fn();
        }
    }
    },30)
    console.log('finished');
}
function getStyle(obj,attr){
    if (obj.currentStyle){
        return obj.currentStyle[attr];
    }else {
        return getComputedStyle(obj,false)[attr];
    }
}