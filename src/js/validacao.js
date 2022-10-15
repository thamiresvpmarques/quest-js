const btn = document.querySelector('.btn');
const campoDeDados = document.querySelectorAll('.camp');
const obrigatorio = document.querySelectorAll('.camp-obrigatorio');

btn.addEventListener('click', function(event){
  event.preventDefault();
    campoDeDados.forEach((campoDeDados, todos) => {
       if (campoDeDados.value === ''){
          campoDeDados.classList.add('invalid');
          obrigatorio[todos].classList.add('camp-invalid')
          
        }else{
          campoDeDados.classList.remove('invalid');
          campoDeDados.classList.add('valid')
          obrigatorio[todos].classList.remove('camp-invalid')
        }

       
 });   
    

     
})