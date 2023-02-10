const stars=document.querySelectorAll('.star')
stars.forEach((star, i)=>{
    star.onclick = function(){
        let starlevel=i+1;
        stars.forEach((star,j)=>{
           if(starlevel >=j+1){
            star.innerHTML='&#9733'

           }
           else{
            star.innerHTML="&#9734";
           }
        })
  
    }
})
