/**
 * Milestone 1
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.
Milestone 2
Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
BONUS
1- modificare la struttura dati fornita e valorizzare la proprietà "color" in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo "#" seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
2- popolare le options della select della milestone 3 dinamicamente.
Consigli del giorno
Come sempre, iniziamo prima di tutto dall'analisi e comprensione della consegna. Scomponiamo il problema in micro-passaggi logici che solamente in un secondo momento trasformeremo in codice.
Le icone presenti nella struttura dati fanno riferimento alla nota libreria Font Awesome, perciò come prima cosa assicuriamoci di aver inserito il link alla cdn nell'head della pagina.
Dopodiché, basandoci sul codice di riferimento nel sito di Font Awesome, analizziamo come è formato il tag <i> di un'icona qualsiasi, in particolare focalizziamoci sulle classi.
Come possiamo usare i dati presenti nella nostra struttura dati per creare l'elemento html nel modo corretto e visualizzare l'icona in pagina?
Inizialmente può essere sufficiente stampare dei semplici div, senza alcuno stile, con all'interno l'icona e uno span con il nome. Solamente quando la parte logica è completa, ci dedichiamo al css.
 */

//Struttura dati fornita
const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    }
];


function createOption() {
    /**
     * per ogni type creo un option
     * attacco l'option alla select ()
     */
    //Creo array con i type: 
    const optArray = [];
    for (let i =0; i< icons.length; i++) {
        if (optArray.indexOf(icons[i].type) === -1){
        optArray.push(icons[i].type);}
    }
    optArray.unshift('all');
    //console.log(optArray);
    let options= '';
    for(let x = 0; x < optArray.length; x++){
    const optTpl= `<option value="${optArray[x]}">${optArray[x].toUpperCase()}</option>`;
        options += `${optTpl}`;
    }
    select.innerHTML = options;
}
function createBox(icons){
    const{name, prefix, family, color} = icons;
    const tpl = ` <div class="col-12 col-md-4 col-lg-2">
                    <div class="card d-flex justify-content-center py-2 align-items-center ${color}">
                        <div class="${prefix}${family} ${prefix}${name}"></div>
                        <div class="">${name}</div>
                    </div>
                </div>`;
    return tpl;
}
// Milestone 3
function printBox(obj){
    const row = document.querySelector('.row');
    let boxes = '';
    for (let i = 0; i < obj.length; i++){
       box = createBox(obj[i]);
       boxes += box;
    }
    row.innerHTML = boxes;
}
function drawSelected(selected){
    document.querySelector('.row').innerHTML = '';
    const selectedArray = icons.filter((value) => {
        if (value.type === selected || selected === "all"){
            return true;
        } else {
            return false;
        }
    })
    //Disegno quei box --
    printBox(selectedArray);
}
function getValue(){
    //Prendo i valori della select
    drawSelected(this.value)
}
function init(){
    createOption()
    printBox(icons);
    const select = document.getElementById('select');
    select.addEventListener('change', getValue);
}

init()
