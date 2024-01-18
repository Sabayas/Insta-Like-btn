var con = document.querySelector("#container")
var love = document.querySelector("i")

con.addEventListener("dblclick", function(){
    love.style.transform = 'translate(-50%, -50%) scale(1.5)'
    love.style.opacity = 0.8
    
    setTimeout(function (){ 
        love.style.transform = 0;
    },1000)

    setTimeout(function(){
        love.style.opacity = 0;
            }, 2000);

    setTimeout(function(){
    love.style.transform = 'translate(-50%, -50%) scale(1.3)'
        
    }, 3000);
})