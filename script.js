const scenes = {
    portada: {
        image: "assets/portada.png",
        text: "SISTEMA 25|21: Cargando partida... 9 de Octubre. Cielo, presiona a Snoopy para desbloquear el primer capítulo.",
        showAvatars: false,
        secret: "Kike dice: Estaba tan nervioso que mi procesador iba a 1000%, pero verte valía cualquier bug.",
        achievement: "NUEVA PARTIDA INICIADA",
        options: [{ text: "PRESS START ►", next: "miedo" }]
    },
    miedo: {
        image: "assets/miedo.png",
        text: "CAPÍTULO 1: El Salto. Tenía un miedo increíble porque me gustabas demasiado. No sabía si lanzarme, pero me animé a enviarte ese TikTok.",
        showAvatars: true,
        secret: "Kike dice: Fue como lanzar una moneda al aire... ¡y por suerte cayó de mi lado!",
        achievement: "LOGRO: VALENTÍA +100",
        options: [{ text: "SIGUIENTE", next: "broma" }]
    },
    broma: {
        image: "assets/cap1.png",
        text: "Creíste que era broma... hasta que al día siguiente te dije que era muy en serio. No era una mentira, moría por salir contigo.",
        showAvatars: true,
        secret: "Kike dice: Mi corazón dio un vuelco cuando confirmaste que sí ibas.",
        achievement: "LOGRO: CITA CONFIRMADA",
        options: [{ text: "EL DÍA DE LA CITA", next: "nervios" }]
    },
    nervios: {
        image: "assets/estresado.png",
        text: "Estaba tan nervioso que no sabía ni qué ropa ponerme. Solo sabía que quería que fuera el día más especial para ti.",
        showAvatars: true,
        secret: "Kike dice: Me probé todo el closet buscando el outfit perfecto.",
        achievement: "LOGRO: NERVIOS DE ACERO",
        options: [{ text: "EL RAMO", next: "flores" }]
    },
    flores: {
        image: "assets/flores.png",
        text: "CAPÍTULO 2: El Detalle. Antes de pasar por ti, compré gerberas y les puse carritos. Yo ya sabía que eran tus favoritas porque te investigué.",
        showAvatars: true,
        secret: "Kike dice: Ver tu cara cuando viste los carritos en el ramo fue mi momento favorito.",
        achievement: "LOGRO: DETECTIVE DE GERBERAS",
        options: [{ text: "LLEGANDO AL CAFÉ", next: "starbucks" }]
    },
    starbucks: {
        image: "assets/starbucks.png",
        text: "CAPÍTULO 3: La Conexión. En el Starbucks me encantó que tenías demasiado tema de conversación. Me enamoré de cómo piensas.",
        showAvatars: true,
        secret: "Kike dice: Me respondiste mil dudas sin que yo tuviera que preguntar nada. Eres mágica.",
        achievement: "LOGRO: CONEXIÓN TOTAL",
        options: [{ text: "TUS OJOS", next: "mirada" }]
    },
    mirada: {
        image: "assets/mirada-enamorada.png",
        text: "No dejaba de mirarte, te veías hermosa. Mirarte a los ojos hacía que mi respiración fuera más rápida. Solo quería que el tiempo se detuviera.",
        showAvatars: true,
        secret: "Kike dice: Estaba hipnotizado por tu belleza, el café era lo de menos.",
        achievement: "LOGRO: MIRADA ENAMORADA",
        options: [{ text: "AL BILLAR", next: "billar_idea" }]
    },
    billar_idea: {
        image: "assets/idea_billar.png",
        text: "No quería que la cita terminara, así que te invité al billar. Me dijiste que sí y nos fuimos directo al Deportivo Sarape.",
        showAvatars: true,
        secret: "Kike dice: No planeé nada más, pero contigo la plática fluyó tanto que el tiempo no alcanzaba.",
        achievement: "LOGRO: EXTRA INNINGS",
        options: [{ text: "EN EL JUEGO", next: "sarape" }]
    },
    sarape: {
        image: "assets/mer-villar.png",
        text: "CAPÍTULO 4: El Sarape. No era un lugar lujoso, pero fue increíble. Descubrí que eres súper competitiva y eso me encantó.",
        showAvatars: true,
        secret: "Kike dice: Casi ni jugamos por estar hable y hable. Fue perfecto.",
        achievement: "LOGRO: FAN #1 DE ACEREROS",
        options: [{ text: "LA TISA", next: "tisa" }]
    },
    tisa: {
        image: "assets/tiza.png",
        text: "Te vi tisa en el cachete y me acerqué a limpiarte. Fue un gesto esporádico pero con seguridad. Me dijiste después que eso te puso nerviosa.",
        showAvatars: true,
        secret: "Kike dice: Yo estaba igual de nervioso por dentro, ¡pero tenía que ser valiente!",
        achievement: "LOGRO: MOVIMIENTO MAESTRO",
        options: [{ text: "SIN DISTRACCIONES", next: "pelicula" }]
    },
    pelicula: {
        image: "assets/billar-pelicula.png",
        text: "Recreé la escena de 'El Viaje Más Largo', acercándome para decirte 'sin distracciones'. Fue tan espontáneo que supe que eras la mujer de mis sueños.",
        showAvatars: true,
        secret: "Kike dice: Ese momento se sintió como una película real contigo.",
        achievement: "LOGRO: PROTAGONISTA FAVORITA",
        options: [{ text: "EL REGRESO", next: "casa" }]
    },
    casa: {
        image: "assets/caminocorrecto.png",
        text: "Te dejé en tu casa y regresé mega enamorado. Esa cita me bastó para saber que eres todo lo que amo y todo lo que quiero.",
        showAvatars: true,
        secret: "Kike dice: Desde ese 9 de octubre, mi mundo cambió por completo.",
        achievement: "LOGRO: HOME RUN DEL AMOR",
        options: [{ text: "PREGUNTA FINAL...", next: "propuesta" }]
    },
    propuesta: {
        image: "assets/home.png",
        text: "He recorrido todas las bases contigo. Cielo, después de aquel 9 de octubre... ¿Quieres ser mi novia?",
        showAvatars: true,
        secret: "¡SNOOPY ESTÁ LISTO PARA EL FESTEJO!",
        achievement: "¡ÚLTIMA MISIÓN!",
        options: [
            { text: "¡SÍ, ACEPTO! <3", next: "final_feliz" },
            { text: "NO (ERROR 404)", next: "error_bucle" }
        ]
    },
    error_bucle: {
        image: "assets/error.png",
        text: "SYSTEM ERROR: El botón 'NO' ha sido deshabilitado. No puedes escapar de este final feliz.",
        showAvatars: true,
        secret: "Snoopy dice: ¡Intenta de nuevo! El destino ya eligió.",
        achievement: "BUG DETECTADO",
        options: [
            { text: "¡ESTÁ BIEN, SÍ! <3", next: "final_feliz" },
            { text: "REINTENTAR NO", next: "error_bucle" }
        ]
    },
    final_feliz: {
        image: "assets/final.png",
        text: "¡COMPILACIÓN EXITOSA! Gracias por ser mi 9 de octubre favorito. ¡TE AMO!",
        showAvatars: true,
        secret: "Snoopy dice: ¡Han ganado el juego de la vida!",
        achievement: "100% COMPLETADO",
        options: []
    }
};

let isSnoopyFound = false;
let isTypewriterDone = false;
let currentSceneKey = 'portada';
const bgMusic = document.getElementById('bg-music');

// MECÁNICA DE PERSUASIÓN
const kikePhrases = [
    "¡Te juro que ese día no podía ni respirar de los nervios!",
    "Mer, cada pixel de este código lo hice pensando en ti.",
    "¿Ya viste qué bonitas te quedan las gerberas?",
    "Ese 9 de octubre fue el mejor bug de mi sistema.",
    "Si me dices que sí, ¡mi corazón hará un home run!",
    "Oye... te ves hermosa hoy."
];

const merPhrases = [
    "¿Será que Kike de verdad está tan enamorado?",
    "Recuerdo que ese café sabía a pura felicidad...",
    "¿Debería decirle que sí? Mmm...",
    "¡Qué detallista salió este muchacho!",
    "Ese momento en el billar me puso nerviosa."
];

function setupAvatars() {
    const kikeBtn = document.getElementById('kike-btn');
    const merBtn = document.getElementById('mer-btn');
    const bubbleKike = document.getElementById('bubble-kike');
    const bubbleMer = document.getElementById('bubble-mer');

    kikeBtn.onclick = () => {
        const msg = kikePhrases[Math.floor(Math.random() * kikePhrases.length)];
        bubbleKike.innerText = msg;
        bubbleKike.style.visibility = 'visible';
        setTimeout(() => { bubbleKike.style.visibility = 'hidden'; }, 3500);
    };

    merBtn.onclick = () => {
        const msg = merPhrases[Math.floor(Math.random() * merPhrases.length)];
        bubbleMer.innerText = msg;
        bubbleMer.style.visibility = 'visible';
        setTimeout(() => { bubbleMer.style.visibility = 'hidden'; }, 3500);
    };
}

function renderScene(sceneKey) {
    currentSceneKey = sceneKey;
    const scene = scenes[sceneKey];
    if(!scene) return;

    // EFECTO FLASHBACK
    const screen = document.querySelector('.screen-area');
    const staticDiv = document.createElement('div');
    staticDiv.className = 'tv-static';
    screen.appendChild(staticDiv);
    setTimeout(() => staticDiv.remove(), 400); 

    isSnoopyFound = false;
    isTypewriterDone = false;
    
    document.getElementById('scene-img').src = scene.image;
    document.getElementById('typewriter-text').innerHTML = "";
    document.getElementById('options-container').innerHTML = "";
    
    const snoopy = document.getElementById('snoopy-egg');
    snoopy.classList.remove('hidden');
    snoopy.style.top = (Math.random() * 40 + 10) + "%";
    snoopy.style.left = (Math.random() * 60 + 5) + "%";

    const kBox = document.getElementById('kike-box');
    const mBox = document.getElementById('mer-box');
    if (scene.showAvatars) {
        kBox.classList.remove('hidden');
        mBox.classList.remove('hidden');
    } else {
        kBox.classList.add('hidden');
        mBox.classList.add('hidden');
    }

    let i = 0;
    function type() {
        if (i < scene.text.length) {
            document.getElementById('typewriter-text').innerHTML += scene.text.charAt(i);
            i++;
            setTimeout(type, 30);
        } else {
            isTypewriterDone = true;
            checkAndUnlock(); 
        }
    }
    type();

    snoopy.onclick = () => {
        document.getElementById('modal-achievement-title').innerHTML = `<span class="nes-text is-warning" style="font-size:10px">${scene.achievement}</span>`;
        document.getElementById('modal-content-text').innerText = scene.secret;
        document.getElementById('dialog-snoopy').showModal();
    };

    renderButtons(scene.options);
}

function renderButtons(options) {
    const container = document.getElementById('options-container');
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = "nes-btn is-primary btn-locked";
        btn.innerText = opt.text;
        btn.onclick = () => {
            if (bgMusic.paused) {
                bgMusic.volume = 0.5;
                bgMusic.play();
            }
            if (opt.next === 'final_feliz') lanzarConfetiFull();
            renderScene(opt.next);
        };
        container.appendChild(btn);
    });
}

function checkAndUnlock() {
    if (isSnoopyFound && isTypewriterDone) {
        document.querySelectorAll('.nes-btn').forEach(b => b.classList.remove('btn-locked'));
    }
}

// LOGROS VISUALES
function mostrarLogro(nombre) {
    const popup = document.getElementById('achievement-popup');
    const nameLabel = document.getElementById('achievement-name');
    if(popup && nameLabel) {
        nameLabel.innerText = nombre;
        popup.classList.add('show-achievement');
        setTimeout(() => popup.classList.remove('show-achievement'), 4000);
    }
}

document.getElementById('btn-close-modal').onclick = (e) => {
    e.preventDefault();
    document.getElementById('dialog-snoopy').close();
    isSnoopyFound = true; 
    document.getElementById('snoopy-egg').classList.add('hidden');
    mostrarLogro(scenes[currentSceneKey].achievement); 
    checkAndUnlock(); 
};

function lanzarConfetiFull() {
    var duration = 15 * 1000;
    var animationEnd = Date.now() + duration;
    var interval = setInterval(function() {
        var timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);
        confetti({ 
            particleCount: 50, spread: 360, 
            origin: { x: Math.random(), y: Math.random() - 0.2 },
            zIndex: 9999
        });
    }, 250);
}

// LLUVIA DE SAKURA DETRÁS DE LA RADIO
function crearLluviaSakura() {
    const container = document.getElementById('sakura-container');
    if (!container) return;
    const totalPetals = 25; 
    for (let i = 0; i < totalPetals; i++) {
        crearPetalo(container);
    }
}

function crearPetalo(container) {
    const petal = document.createElement('div');
    petal.className = 'petal';

    // Salen de la esquina superior izquierda
    const startFromTop = Math.random() > 0.5;
    if (startFromTop) {
        petal.style.top = '-10px';
        petal.style.left = Math.random() * 40 + 'vw'; 
    } else {
        petal.style.top = Math.random() * 40 + 'vh'; 
        petal.style.left = '-10px';
    }

    const size = Math.random() * 6 + 4 + 'px';
    petal.style.width = size;
    petal.style.height = size;

    // Velocidad muy lenta: 12 a 22 segundos
    const duration = Math.random() * 10 + 10 + 's';
    petal.style.animationDuration = duration;
    petal.style.animationDelay = Math.random() * 10 + 's';

    container.appendChild(petal);

    petal.addEventListener('animationend', () => {
        petal.remove();
        crearPetalo(container);
    });
}

window.onload = () => {
    renderScene('portada');
    setupAvatars();
    crearLluviaSakura(); 
};