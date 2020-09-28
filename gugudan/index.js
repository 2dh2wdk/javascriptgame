document.querySelector('#click').addEventListener('click', ()=>{

a = document.querySelector('#first').value
b = document.querySelector('#second').value

if(a){
    if(b){
        document.querySelector('#result').textContent = a*b
    } else{
        document.querySelector('#result').textContent = '두번째 값을 입력하시오'
    }
} else {
    document.querySelector('#result').textContent = '첫번째 값을 입력하시오'
}
})