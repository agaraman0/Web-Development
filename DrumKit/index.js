var btn = document.querySelectorAll('.drum');

function clk(btninnhtml) {
    // var btninnhtml = this.innerHTML;

    switch (btninnhtml) {
        
        case "w":
            var w = new Audio("sounds/tom-1.mp3");
            w.play();
            break;
        
        case "a":
            var a = new Audio("sounds/kick-bass.mp3");
            a.play();
            break;
        
        case "s":
            var s = new Audio("sounds/crash.mp3");
            s.play();
            break;
    
        case "d":
            var d = new Audio("sounds/tom-4.mp3");
            d.play();
            break;
    
        case "j":
            var j = new Audio("sounds/tom-3.mp3");
            j.play();
            break;

        case "k":
            var k = new Audio("sounds/tom-2.mp3");
            k.play();
            break;

        case "l":
            var l = new Audio("sounds/snare.mp3");
            l.play();
            break;
        
        default:
            console.log(btninnhtml)
            break;
    }
}

for(var i = 0;i<btn.length;i++){
    btn[i].addEventListener("click",function(){
        var btninnhtml = this.innerHTML;
        clk(btninnhtml);
        btnAnimation(btninnhtml);
    })
}

document.addEventListener("keydown",function(event){
    clk(event.key);
    btnAnimation(event.key);
})

function btnAnimation(word){
    var tag = document.querySelector('.'+word);
    tag.classList.add('pressed');
    setTimeout(function(){
        tag.classList.remove('pressed')
    }, 100);
}