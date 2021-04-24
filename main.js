 
 const body = document.querySelector("body");

 
 const O = document.querySelector(".PlayerO"); 

  const minibox = document.querySelectorAll(".mainbox"); 

  

  const x = document.querySelector(".PlayerX"); 

        const b1 = document.querySelector("#B1"); 
        const b2 = document.querySelector("#B2"); 
        const b3 = document.querySelector("#B3"); 
        const b4 = document.querySelector("#B4"); 
        const b5 = document.querySelector("#B5"); 
        const b6 = document.querySelector("#B6"); 
        const b7 = document.querySelector("#B7"); 
        const b8 = document.querySelector("#B8"); 
        const b9 = document.querySelector("#B9"); 
        
  const rstbot = document.querySelector(".button"); 

  const resetClick = () =>  {
return b1.innerHTML = '',b2.innerHTML = '' ,b3.innerHTML = '',b4.innerHTML = '',b5.innerHTML = '',b6.innerHTML = '',b7.innerHTML = '',b8.innerHTML = '',b9.innerHTML = ''

  } 
  const buttonx =() =>  {
return  b1.innerHTML = 'x', b2.innerHTML = 'x', b3.innerHTML = 'x'
  }
  const buttono = () => {
    return  b1.innerHTML = 'o'
          } 
       
  const rs = () => {
if (b1.innerHTML===b2.innerHTML && b1.innerHTML===b3.innerHTML && b1.innerHTML==='x'|| 
b4.innerHTML===b5.innerHTML && b4.innerHTML===b6.innerHTML && b4.innerHTML==='x'|| 
b7.innerHTML===b8.innerHTML && b7.innerHTML===b9.innerHTML && b7.innerHTML==='x'|| 
b1.innerHTML===b4.innerHTML && b1.innerHTML===b7.innerHTML && b1.innerHTML==='x'|| 
b2.innerHTML===b5.innerHTML && b2.innerHTML===b8.innerHTML && b2.innerHTML==='x'|| 
b3.innerHTML===b6.innerHTML && b3.innerHTML===b9.innerHTML && b3.innerHTML==='x'|| 
b1.innerHTML===b5.innerHTML && b1.innerHTML===b9.innerHTML && b1.innerHTML==='x'|| 
b3.innerHTML===b5.innerHTML && b3.innerHTML===b7.innerHTML && b3.innerHTML==='x' 
 ){
return 'the winner is x'
}
else if(b1.innerHTML===b2.innerHTML && b1.innerHTML===b3.innerHTML && b1.innerHTML==='o'|| 
b4.innerHTML===b5.innerHTML && b4.innerHTML===b6.innerHTML && b4.innerHTML==='o '|| 
b7.innerHTML===b8.innerHTML && b7.innerHTML===b9.innerHTML && b7.innerHTML==='o'|| 
b1.innerHTML===b4.innerHTML && b1.innerHTML===b7.innerHTML && b1.innerHTML==='o '|| 
b2.innerHTML===b5.innerHTML && b2.innerHTML===b8.innerHTML && b2.innerHTML==='o'|| 
b3.innerHTML===b6.innerHTML && b3.innerHTML===b9.innerHTML && b3.innerHTML==='o'|| 
b1.innerHTML===b5.innerHTML && b1.innerHTML===b9.innerHTML && b1.innerHTML==='o'|| 
b3.innerHTML===b5.innerHTML && b3.innerHTML===b7.innerHTML && b3.innerHTML==='o' )
 {return 'the winner is o'} 
 else return ''

  }
          
  const result  = document.querySelector(".Result");  
          result.innerHTML = rs()
    
