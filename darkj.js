document.querySelector(".toggle").addEventListener('click',clickk)
function clickk() {
    animation()
    document.querySelector("#lol").classList.toggle("dark")
    document.querySelector("#lol").classList.remove("notdark")
};
function animation(){
    document.querySelector(".toggle").classList.add("toggle2");
    setTimeout(function(){
        document.querySelector(".toggle").classList.remove("toggle2")
    },200)

}
document.addEventListener('keypress',function(event){
    if(event.key=="Enter"){
        clickk()
        
    }})
    document.addEventListener('keypress',function(events){
        if(events.key==" "){
            nodark()
            
        }
})
document.querySelector(".ytoggle").addEventListener('click',nodark)
function nodark(){
    animation2()
    document.querySelector("#lol").classList.toggle("notdark")
    document.querySelector("#lol").classList.remove("dark")
}
function animation2(){
    document.querySelector(".ytoggle").classList.add("ytoggle2");
    setTimeout(function(){
        document.querySelector(".ytoggle").classList.remove("ytoggle2")
    },200)

}