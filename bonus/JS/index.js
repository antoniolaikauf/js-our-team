
// creazione dell'array con dentro il team
const team=[
    {
        "nome":"wayne barnett",
        "role":"founder & ceo",
        "immagine":"file:///C:/boolean/js-our-team/img/wayne-barnett-founder-ceo.jpg"
    },
    {
        "nome":"angela caroll",
        "role":"chief editor",
        "immagine":"file:///C:/boolean/js-our-team/img/angela-caroll-chief-editor.jpg"
    },
    {
        "nome":"walter gordon",
        "role":"officemanager",
        "immagine":"file:///C:/boolean/js-our-team/img/walter-gordon-office-manager.jpg"
    },
    {
        "nome":"angela lopez",
        "role":"social media manager",
        "immagine":"file:///C:/boolean/js-our-team/img/angela-lopez-social-media-manager.jpg"
    },
    {
        "nome":"scott estrada",
        "role":"developer",
        "immagine":"file:///C:/boolean/js-our-team/img/scott-estrada-developer.jpg"
    },
    {
        "nome":"barbaran ramos",
        "role":"grafic designer",
        "immagine":"file:///C:/boolean/js-our-team/img/barbara-ramos-graphic-designer.jpg"
    }
]

// loop per selezzionare ogni oggetto
for (let i = 0; i < team.length; i++) {
    let ruoloPersonaIesima= team[i]
    // console.log(ruoloPersona);
    // creazione div 
    let card= document.createElement("div")
    // creazione h4 dove ci srà il nome della persona
    let titolo = document.createElement("h4")
    titolo.append(ruoloPersonaIesima.nome)

    // creazione dell immagine per inserirci l'immagine
    let img = document.createElement("img")
    img.src=ruoloPersonaIesima.immagine
    // mettiamo i 3 ruoli dentro al div 

    // funzione per card
    costruzione(img,titolo,card,ruoloPersonaIesima.role)    

 }



function costruzione(imgPersnaggio,nomePersonaggio,items,ruolo) {
    // costruzione della card
    items.append(imgPersnaggio)
    items.append(nomePersonaggio)
    items.append(ruolo)
    // mettiamo dentro la card dentro al div
    document.getElementById("persone-team").append(items)
}