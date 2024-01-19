const display= document.querySelector('input')
// console.log(display)
let string='';

const nums=document.querySelectorAll(".keys,.keys1")
// console.log(nums)

const numsArray=Array.from(nums)
numsArray.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='DEL'){
            string=string.substring(0,string.length-1)
            display.value=string
        }else if (e.target.innerHTML=='RESET') {
            string=''
            display.value=string 
        }else if(e.target.innerHTML=='='){
            string= eval(string);
            display.value=string
        }else{
            string +=e.target.innerHTML
            display.value=string
            console.log(e.target.innerHTML)

        }
    })
})
