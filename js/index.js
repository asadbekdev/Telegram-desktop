const elBtn = document.querySelector('.accountModal-btn');
const elModal = document.querySelector('.accountModal');
const elModalDismisBtn = document.querySelector('.modal-dismis');
const elDarkModeBtn = document.querySelector(".toggle-icon")
let elInputMessage = document.querySelector('.typing-area');
const elMessageForm = document.querySelector('.typing-form');
const body =  document.querySelector("body")
const elModalHeadPart = document.querySelector('.modal-head-part');


let messages = JSON.parse(localStorage.getItem('messagess')) || [];
let count = 0;

const messagesOutput = document.querySelector('.messages-ul');

displayMessage(messages)
function displayMessage(array) {

    messagesOutput.innerHTML = "";

    for(let i = 0; i < array.length; i++) {
        let messageItem = document.createElement('li');
        let messageItemText = document.createElement('p');
        messageItemText.classList.add('sent-text');
        messageItemText.textContent = array[i].message;
        messageItem.classList.add('messages-li')

        messageItem.appendChild(messageItemText);
        messagesOutput.appendChild(messageItem);
    }
}

elMessageForm.addEventListener('submit', e => {
    e.preventDefault();

    let inputValue = elInputMessage.value;

    // const elEmojiesBtns = document.querySelectorAll('.emojies');
    
    // elEmojiesBtns.forEach(emojiItem => {
    //     emojiItem.addEventListener('click', e=> {
    //         inputValue = emojiesBtns.textContent
    //     })
    // })


   if(inputValue !== '') {
    messages.push({
        message: inputValue ,
        id: count++
    });
   }




   localStorage.setItem('messagess', JSON.stringify(messages));

   elInputMessage.value = '';
    elInputMessage.focus();


    displayMessage(messages)
})



elBtn.addEventListener('click', () => {
    elModal.classList.add('abc')
})

elModal.addEventListener('click', (e) => {
    if(e.target.classList.contains('accountModal')) {
        elModal.classList.remove('abc');
    }
})

elModalDismisBtn.addEventListener('click', (e) => {
    elModal.classList.remove('abc');
})

elDarkModeBtn.addEventListener('click', event => {
    body.classList.toggle('dark-mode')
})

