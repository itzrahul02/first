const checkbox=document.querySelectorAll('.checkbox')
const inputfields=document.querySelectorAll('.input')
const errorlabel=document.querySelector('.error-label')
const progressBar=document.querySelector('.error-label')
const progressValue=document.querySelector('.progress-value')
const value=document.querySelector('.value')

let n=0
checkbox.forEach((check)=>{
    check.addEventListener('click',(e)=>{
        
        const allfield=[...inputfields].every((e)=>{
            console.log(e.value)
            return e.value
        })
        console.log(allfield)
        if(allfield){
            check.parentElement.classList.toggle('completed')
            n+=1
            console.log(n)
            progressValue.style.width=`${(n * 100) / 3}%`
            value.innerHTML=`${n}`+'/3 completed'
            value.style.color='White'
        }
        else{
            progressBar.classList.add('show-error')
        }      
    })
})
inputfields.forEach((input)=>{
    input.addEventListener('focus',()=>{
        progressBar.classList.remove('show-error')
    })
})

