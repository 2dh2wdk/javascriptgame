const btn = document.querySelector('#button') // document.querySelector(아이디)는 그 아이디의 태그를 가져오는 것
const inputTag = document.querySelector('#input')
inputTag.focus()

btn.addEventListener('click', () => {
    const wordTag = document.querySelector('#word')
    const word = wordTag.textContent    // .은 ~의 라는 의미하는 것과 같다.
    const inputTag = document.querySelector('#input')
    const input = inputTag.value
    const errorTag = document.querySelector('#error')
    const lastIndex= word.length - 1
    const w = word[lastIndex]
    const i = input[0]
    if(w === i){
        wordTag.textContent = input
        errorTag.textContent = ''
        inputTag.value = ''
        inputTag.focus()
    } else{
        errorTag.textContent = '땡'
        inputTag.focus()
    }
    //string(문자열),number(숫자),boolean(T/F),object(객체),null,undefined,symbol
})