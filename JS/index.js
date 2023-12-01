
// creazione dell'array con dentro il team
const team=[
    {
        "nome":"wayne barnett",
        "role":"founder & ceo",
        "immagine":" file:///C:/boolean/js-our-team/img/wayne-barnett-founder-ceo.jpg"
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
    // loop per prendere ogni singolo elemento degli oggetti
    for(let key in ruoloPersonaIesima){
        let caratteristichePersona=ruoloPersonaIesima[key];
        // display dentro console 
        console.log(key + "=" + caratteristichePersona);
        // display dentro html
        let contenitore= document.createElement("div");
        contenitore.append(key + " = " +caratteristichePersona)
        document.getElementById("persone-team").append(contenitore)

    }
 }



