const wordsList_en = [
    "abruptly",
    "absurd",
    "abyss",
    "affix",
    "askew",
    "avenue",
    "awkward",
    "axiom",
    "azure",
    "bagpipes",
    "bandwagon",
    "banjo",
    "bayou",
    "beekeeper",
    "bikin",
    "blitz",
    "blizzard",
    "boggle",
    "bookworm",
    "boxcar",
    "boxful",
    "buckaro",
    "buffalo",
    "buffoon",
    "buxo",
    "buzzard",
    "buzzing",
    "buzzwords",
    "caliph",
    "cobweb",
    "cockiness",
    "croquet",
    "crypt",
    "curacao",
    "cycle",
    "daiquiri",
    "dirndl",
    "disavow",
    "dizzying",
    "duplex",
    "dwarves",
    "embezzle",
    "equip",
    "espionag",
    "euouae",
    "exodus",
    "faking",
    "fishhook",
    "fixable",
    "fjord",
    "flapjac",
    "flopping",
    "fluffiness",
    "flyb",
    "foxglove",
    "frazzled",
    "frizzled",
    "fuchsia",
    "funny",
    "gabby",
    "galaxy",
    "galvanize",
    "gazebo",
    "giaour",
    "gizmo",
    "glowworm",
    "glyph",
    "gnarly",
    "gnostic",
    "gossip",
    "grogginess",
    "haiku",
    "haphazar",
    "hyphen",
    "iatrogenic",
    "icebox",
    "injury",
    "ivory",
    "ivy",
    "jackpo",
    "jaundice",
    "jawbreaker",
    "jaywal",
    "jazziest",
    "jazzy",
    "jelly",
    "jigsaw",
    "jinx",
    "jiujitsu",
    "jockey",
    "jogging",
    "joking",
    "jovial",
    "joyful",
    "juicy",
    "jukebox",
    "jumbo",
    "kayak",
    "kazoo",
    "keyhole",
    "khaki",
    "kilobyt",
    "kiosk",
    "kitsch",
    "kiwifruit",
    "klutz",
    "knapsack",
    "larynx",
    "length",
    "lucky",
    "luxury",
    "lymp",
    "marquis",
    "matrix",
    "megahertz",
    "microwave",
    "mnemonic",
    "mystify",
    "naphtha",
    "nightclub",
    "nowadays",
    "numbskull",
    "nymph",
    "onyx",
    "ovary",
    "oxidize",
    "oxygen",
    "pajama",
    "peekaboo",
    "phlegm",
    "pixe",
    "pizazz",
    "pneumonia",
    "polka",
    "pshaw",
    "psyche",
    "puppy",
    "puzzlin",
    "quartz",
    "queue",
    "quip",
    "quixotic",
    "quiz",
    "quizzes",
    "quorum",
    "razzmatazz",
    "rhubarb",
    "rhythm",
    "rickshaw",
    "schnapps",
    "scratch",
    "shiv",
    "snazzy",
    "sphinx",
    "spritz",
    "squawk",
    "staff",
    "strength",
    "strengths",
    "stretc",
    "stronghold",
    "stymied",
    "subway",
    "swivel",
    "syndrom,",
    "thriftlss,",
    "thumbscre",
    "topaz",
    "transcipt,",
    "transress",
    "translant,",
    "triphhong,",
    "twelfth",
    "twelfth,",
    "unknown",
    "unworthy",
    "unzip",
    "uptown",
    "vaporize",
    "vixen",
    "vodka",
    "voodoo",
    "vortex",
    "voyeurism",
    "walkway",
    "waltz",
    "wave",
    "wavy",
    "waxy",
    "wellspring",
    "wheezy",
    "whiskey",
    "whizzing",
    "whomever",
    "wimpy",
    "witchcraft",
    "wizard",
    "woozy",
    "wristwatch",
    "wyvern",
    "xylophone",
    "yachtsman",
    "yippee",
    "yoked",
    "youthful",
    "yummy",
    "zephyr",
    "zigzag",
    "zigzagging",
    "zilch",
    "zipper",
    "zodiac",
    "zombi"
];
const wordsList_ptbr = [
    "Axioma",
    "Azulejo",
    "Blitz",
    "Catarro",
    "Coçar",
    "Crespo",
    "Cripta",
    "Duplex",
    "Fúcsia",
    "Girar",
    "Gnostico",
    "Haicai",
    "Hera",
    "Hifen",
    "Ictericia",
    "Indigno",
    "Intrigante",
    "Jazz",
    "Linfa",
    "Marfim",
    "onix",
    "Psique",
    "Quartzo",
    "Quiz",
    "Quorum",
    "Tonto",
    "Topazio",
    "Torpor",
    "Valsa",
    "Vaporizar",
    "Vertiginoso",
    "Vicissitude",
    "Vortice",
    "Xilofone",
    "Apicultor",
    "Agronomo",
    "Auditor",
    "Bartender",
    "Cerimonialista",
    "Chef",
    "Coach",
    "Desembargador",
    "Despachante",
    "Endocrinologista",
    "Embaixador",
    "Gerentologo",
    "Headhunter",
    "Interprete",
    "Juiz",
    "Nanotecnologo",
    "Nutrologo",
    "Pizzaiolo",
    "Perito",
    "Quiroprata",
    "Roteirizador",
    "Silvicultor",
    "Trader",
    "Taquigrafo",
    "Turismologo",
    "Albatroz",
    "Alpaca",
    "Anchova",
    "Bacalhau",
    "Badejo",
    "Barracuda",
    "Beluga",
    "Cagado",
    "Chinchila",
    "Craca",
    "Dromedario",
    "Escaravelho",
    "Gerbo",
    "Gnu",
    "Gralha",
    "Hamster",
    "Lemure",
    "Lhama",
    "Lince",
    "Marreco",
    "Melro",
    "Ocapi",
    "Ouriço",
    "Pelicano",
    "Percevejo",
    "Pirilampo",
    "Quati",
    "Rouxinol",
    "Sanguessuga",
    "Surucucu",
    "Tapir",
    "Texugo",
    "Vison",
    "Zebu",
    "Ampulheta",
    "Anzol",
    "Almofariz",
    "Bide",
    "Botija",
    "Candelabro",
    "Daguerreotipo",
    "Dedaleira",
    "Desfibrilador",
    "Diapasão",
    "Echarpe",
    "Estribo",
    "Fagote",
    "Fantoche",
    "Forceps",
    "Freezer",
    "Guidão",
    "Navalha",
    "Jaleco",
    "Modem",
    "Narguile",
    "Nebulizador",
    "Novelo",
    "Oboe",
    "Oximetro",
    "Pendulo",
    "Quepe",
    "Selim",
    "Sintetizador",
    "Spray",
    "Urinol",
    "Vuvuzela",
    "Webcam",
    "Xadrez",
    "Xequere",
    "Xilofone",
    "Ziper",
    "Abrico",
    "Alfarroba",
    "Bergamota",
    "Ciriguela",
    "Cranberry",
    "Dende",
    "Feijoa",
    "Groselha",
    "Imbu",
    "Jenipapo",
    "Kiwi",
    "Lichia",
    "Mexerica",
    "Nectarina",
    "Nespera",
    "Pequi",
    "Pistache",
    "Pomelo",
    "Puça",
    "Saguaraji"
]
var currentWord = "WORD";

const PTBR = "pt-br";
const EN = "en"
var lang = EN;

const GREEN = "rgb(175, 225, 175)";
const RED = "rgb(225, 175, 175)";
const GRAY = "rgb(225, 225, 225)";

const usedLettersDiv = document.getElementById("usedLettersDiv");
const wordDiv = document.getElementById("wordDiv");
const hangmanImg = document.getElementById("hangmanImg");
const images = [
    "Images/Hangman_0.png",
    "Images/Hangman_1.png",
    "Images/Hangman_2.png",
    "Images/Hangman_3.png",
    "Images/Hangman_4.png",
    "Images/Hangman_5.png"
];
var errors = 0;
var canPlay = true;

var wlDiv = document.getElementById("wlDiv");

function ChangeLang(){
    if(lang == EN){
        lang = PTBR;
        document.getElementById("langChanger").setAttribute("src", "Images/langPTBR.png");

        document.getElementById("title").innerText = "Jogo da Forca";
        document.getElementById("header").innerText = "Jogo da Forca";
        document.getElementById("keyboardLabel").innerText = "Tente Uma Letra:";
        document.getElementById("restartButton").innerText = "Tentar Novamente";
    }
    else if(lang == PTBR){
        lang = EN;
        document.getElementById("langChanger").setAttribute("src", "Images/langEN.png");

        document.getElementById("title").innerText = "Hangman";
        document.getElementById("header").innerText = "Hangman";
        document.getElementById("keyboardLabel").innerText = "Try a Letter:";
        document.getElementById("restartButton").innerText = "Try Again";
    }
    StartGame();
}

function StartGame(){
    wlDiv.style.display = "none";

    errors=0;
    hangmanImg.setAttribute("src", images[0]);
    canPlay = true;

    PainKeyboard(GRAY);
    EraseWrongLetters();
    EraseCurrentWord();
    PlaceWord(PickRandomWord((lang == EN ? wordsList_en : wordsList_ptbr)));
}

function EraseCurrentWord(){
    let letters = document.getElementsByClassName("letter");
    while(letters.length > 0)
        letters[0].parentElement.removeChild(letters[0]);
}
function EraseWrongLetters(){
    let usedLetters = document.getElementsByClassName("usedLetter");
    while(usedLetters.length > 0)
        usedLetters[0].parentElement.removeChild(usedLetters[0]);
}

function PickRandomWord(list){
    currentWord = list[Math.floor(Math.random()*list.length+1)].toUpperCase();
    return currentWord;
}

function PlaceWord(word){
    for(let i=0; i<word.length; i++){
        let letter = document.createElement("p");
        letter.setAttribute("class", "letter");
        letter.setAttribute("id", "l"+i);
        // letter.innerText = word[i].toString();
        wordDiv.appendChild(letter);
    }
}
function PlaceWrongLetter(letter){
    let l = document.createElement("p");
    l.setAttribute("class", "usedLetter");
    l.innerText = letter;
    usedLettersDiv.appendChild(l);
}
function PlaceRightLetter(letter){
    for(let i=0; i<currentWord.length; i++){
        if(currentWord[i] == letter)
            document.getElementById("l"+i).innerText = currentWord[i].toString();
    }
}

function PainKeyboard(color){
    let kbKeys = document.getElementsByClassName("kbKey");
    for(let i=0; i<kbKeys.length; i++)
        PaintKeyboardKey(kbKeys[i].getAttribute("id"), color);
}
function PaintKeyboardKey(key, color){
    document.getElementById(key).style.color = color;
}

function IsLetterInWord(letter){
    for(let i=0; i<currentWord.length; i++){
        if(currentWord[i] == letter)
            return true;
    }
    return false;
}
function IsWordComplete(){
    let letters = document.getElementsByClassName("letter");
    for(let i=0; i<letters.length; i++){
        if(letters[i].innerText == "")
            return false;
    }
    return true;
}

function TryLetter(l){
    if(!canPlay)
        return;
    if(IsLetterInWord(l)){
        PlaceRightLetter(l);
        PaintKeyboardKey("key"+l, GREEN);
        if(IsWordComplete())
            UserWon();

        return;
    }
    UserGuessedWrong();
    PlaceWrongLetter(l);
    PaintKeyboardKey("key"+l, RED);
}

function UserGuessedWrong(){
    if(++errors > 4)
        UserLost();
    hangmanImg.setAttribute("src", images[errors]);
}

function UserWon(){
    canPlay = false;

    wlDiv.innerText = lang == EN ? "You Won:)" : "Você Ganhou:)";
    wlDiv.style.display = "block";
    wlDiv.style.backgroundColor = GREEN;
}
function UserLost(){
    canPlay = false;

    wlDiv.innerText = lang == EN ? "You Lost:(" : "Você Perdeu:(";
    wlDiv.style.display = "block";
    wlDiv.style.backgroundColor = RED;
}