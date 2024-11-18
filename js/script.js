// Prelevo elementi HTML
const emailList = document.getElementById("email-list");

// Chiamata API per le email
for(let i = 0; i < 10; i++){
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp) => {
        console.log(resp);
        emailList.innerHTML += `<li><a>${resp.data.response}</a></li>`;
    })
}