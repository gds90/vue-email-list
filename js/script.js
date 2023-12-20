const {createApp} = Vue;

createApp({
    data(){
        return {
            emails:[] 
        }
    },
    created(){
        // tramite un ciclo For, richiamo l'API fornita per generare 10 indirizzi email random 
        for (let i=0; i<10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                // pusho l'indirizzo email generato nell'array emails
                this.emails.push(response.data.response);
            })
        }
    }
}).mount('#app')