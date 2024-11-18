// Prelevo elementi HTML
const emailList = document.getElementById("email-list");
const listBtn = document.getElementById("list-btn");


/** Funzione che crea 10 email tramite chiamata API e le inserisce in una lista*/
const createEmailList = () => {
    emailList.innerHTML = '';
    for(let i = 0; i < 10; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp) => {
            console.log(resp);
            emailList.innerHTML += `<li class="pb-3"><a href="#">${resp.data.response}</a></li>`;
        })
    }
}

// Chiamata funzione che crea la lista di email
createEmailList();

// Al click del bottone vengono create 10 nuove email al posto delle precedenti
listBtn.addEventListener("click", createEmailList);