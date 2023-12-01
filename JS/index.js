
// creazione dell'array con dentro il team
const team=[
    {
        "nome":"wayne barnett",
        "role":"founder & ceo",
        "immagine":"wayne-barnett-founder-ceo.jpg"
    },
    {
        "nome":"angela caroll",
        "role":"chief editor",
        "immagine":"angela-caroll-chief-editor.jpg"
    },
    {
        "nome":"walter gordon",
        "role":"officemanager",
        "immagine":"walter-gordon-office-manager.jpg"
    },
    {
        "nome":"angela lopez",
        "role":"social media manager",
        "immagine":"angela-lopez-social-media-manager.jpg"
    },
    {
        "nome":"scott estrada",
        "role":"developer",
        "immagine":"scott-estrada-developer.jpg"
    },
    {
        "nome":"barbaran ramos",
        "role":"grafic designer",
        "immagine":"barbara-ramos-graphic-designer.jpg"
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



