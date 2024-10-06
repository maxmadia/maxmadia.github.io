// Possibilités pour chaque catégorie
const mmieOptions = [
    "Matériaux fabriqués ou transformés par l’Homme",
    "Propriétés physiques des matériaux",
    "Différentes formes d’énergie",
    "Conversions d'énergie dans des dispositifs simples",
    "Différents signaux",
    "Information"
];

const otcsOptions = [
    "Besoin",
    "Les évolutions d’un objet dans un contexte historique",
    "Solutions technologiques aux fonctions techniques",
    "Croquis",
    "Cycle de vie d'un objet technique",
    "Contraintes environnementales"
];

const otcs2Options = [
    "Un objet technique répondant à un besoin",
    "Objet technique et objet naturel",
    "Schéma",
    "Fonctions techniques",
    "Les évolutions d’un objet dans un contexte technologique",
    "Objet technique en sous-systèmes"
];

const potOptions = [
    "Chaîne d'information et la chaîne d'action d’un objet programmable",
    "Capteurs et actionneurs présents dans un objet programmable",
    "Algorithme simple pour modifier le comportement d’un objet technique",
    "Traduire un programme simple en langage naturel",
    "Programmer",
    "Critiquer un programme au regard du comportement observé de l'objet programmé"
];

const dcrOptions = [
    "Idées de solutions pour un problème technique donné",
    "Critères de performance",
    "Impact environnemental",
    "Maquette",
    "Planification des tâches au sein d'une équipe",
    "Répartition des tâches au sein d'une équipe"
];

// Fonction pour générer un tirage au sort aléatoire
function spinWheel(options) {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

// Fonction pour démarrer le tirage au sort avec clignotement visible
function startRoulette() {
    const wheels = [
        { id: 'wheelMMEI', options: mmieOptions },
        { id: 'wheelOTCS', options: otcsOptions },
        { id: 'wheelOTCS2', options: otcs2Options },
        { id: 'wheelPOT', options: potOptions },
        { id: 'wheelDCR', options: dcrOptions }
    ];

    wheels.forEach((wheel, index) => {
        const wheelElement = document.getElementById(wheel.id);
        let intervalId;
        let counter = 0;

        // Fonction pour afficher les choix successifs
        const changeOption = () => {
            const randomOption = spinWheel(wheel.options);
            wheelElement.innerHTML = randomOption;
            counter++;
        };

        // Démarre le clignotement des options toutes les 0,5 secondes
        intervalId = setInterval(changeOption, 500);  // Affiche un nouveau choix toutes les 0,5 secondes

        // S'arrête après 3 secondes et affiche le choix final
        setTimeout(() => {
            clearInterval(intervalId);
            const finalOption = spinWheel(wheel.options);
            wheelElement.innerHTML = `<strong>${finalOption}</strong>`;
        }, 3000);  // Arrête après 3 secondes
    });
}
