let webpage=document.querySelector('body')
let btn=document.querySelector('div')
console.log(btn)
console.log(webpage)

btn.addEventListener('click',function(){
    webpage.classList.toggle('night')
    if(btn.textContent === "🌙"){
        btn.textContent= "😎";
    }else{
        btn.textContent= "🌙";
    }
})