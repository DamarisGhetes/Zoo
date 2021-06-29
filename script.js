const animale = { // obiectul principal, care conține ca proprietăți alte obiecte
    //-----------------------califar----------
  "califar-rosu": { // obiectul secundar - are ca proprietăți informațiile pentru pagina unui animal
    image: "imagini/califar1.jpg",
    nume: "Călifar roșu",
    habitat: {
      desc1:"Specie întâlnită mai mult în sudul şi estul Europei, Asia centrală şi sud-estul Chinei. Migrează pentru a ierna în subcontinentul indian. Este o specie caracteristică habitatelor de stepă, prezentă mai ales în apropierea lacurilor şi râurilor. În România trăieşte în zonele de şes şi munte, pe lângă bălţi şi lacuri. Se regăseşte în special în Delta Dunării şi vechea Istria.",
      desc2:"Masculul se diferenţiază de femelă prin prezenţa unei zone negre în jurul gâtului, de forma unui inel. Datorită penajului atractiv, această specie este păstrată şi în captivitate, în colecţii ornitologice şi în parcuri.",
      image: "imagini/califar2.jpg",
    },
    incubatie: {
      desc1:"Femelele depun între 8 şi 11 ouă, pe care le incubează 28-29 de zile, în acest timp masculul păzind cuibul.",
      desc2:"Populaţia este în declin, mai ales în regiunea europeană, din cauza vânătorii şi a asanării zonelor umede, însă IUCN consideră specia nepericlitată deocamdată. Populaţia globală estimată a speciei este relativ mică, cuprinsă între 170 000-225 000 de perechi, însă estimarea este dificilă din cauza populaţiilor locale care fie cresc, fie descresc.",
      desc3:
        "Aceste păsări sunt mai puţin dependente de apă decât alte rude ale sale şi pot fi observate şi în timpul cuibăritului la distanţe considerabile de apă.",
    },
    viata: {
      desc1: "În sălbăticie 5-15 ani, în captivitate peste 15 ani.",
    },
    dimensiuni: {
      desc1:
        "Lungimea corpului de aproximativ 58-70 cm, greutate între 1 şi 1,6 kg, anvergura aripilor între 110 şi 137 cm.",
      desc2:
        "În România, pasărea este ocrotită şi declarată monument al naturii (se estimează o populaţie de 20-25 de perechi în sălbăticie).",
    },
    dieta: {
      desc1:
        "Călifarul roşu se hrăneşte cu plante specifice regiunii de stepă, seminţe, dar şi cu insecte, crustacee, moluşte, peşti, broaşte şi viermi.",
      desc2:
        "Efectivele cele mai mari sunt înregistrate în Turcia şi Rusia. În Asia centrală şi estică, populaţia este stabilă şi chiar în creştere, deoarece budiştii consideră călifarul roşu o pasăre sacră şi astfel îi oferă o anume protecţie.",
    }
  }
}
  //-------------------camila--------
  

const selectedAnimal = document.location.search.split("=")[1];
const animal = animale[selectedAnimal];

const imageElement = document.getElementById("image");
imageElement.style.backgroundImage = `url(${animal.image})`;

const numeElement = document.getElementById("nume");
numeElement.innerHTML = animal.nume;

const habitatElementDesc1 = document.getElementById("habitat-desc1");
habitatElementDesc1.innerHTML = animal.habitat.desc1;

const habitatElementDesc2 = document.getElementById("habitat-desc2");
habitatElementDesc2.innerHTML = animal.habitat.desc2;

const habitatElementImage = document.getElementById("habitat-image");
habitatElementImage.setAttribute("src", animal.habitat.image);

const viataElementDesc = document.getElementById("viata-desc1");
viataElementDesc.innerHTML = animal.viata.desc1;

const dimElementDesc1 = document.getElementById("dim-desc1");
dimElementDesc1.innerHTML = animal.dimensiuni.desc1;

const dimElementDesc2 = document.getElementById("dim-desc2");
dimElementDesc2.innerHTML = animal.dimensiuni.desc2;

const dietaElementDesc1 = document.getElementById("dieta-desc1");
dietaElementDesc1.innerHTML = animal.dieta.desc1;

const dietaElementDesc2 = document.getElementById("dieta-desc2");
dietaElementDesc2.innerHTML = animal.dieta.desc2;

const incubatieElementDesc1 = document.getElementById("incubatie-desc1");
incubatieElementDesc1.innerHTML = animal.incubatie.desc1;

const incubatieElementDesc2 = document.getElementById("incubatie-desc2");
incubatieElementDesc2.innerHTML = animal.incubatie.desc2;

const incubatieElementDesc3 = document.getElementById("incubatie-desc3");
incubatieElementDesc3.innerHTML = animal.incubatie.desc3;


// afiseaza butonul daca depaseste 300px din partea de sus a paginii
function scrollFct() {
  const myButton = document.getElementById("scrollBtn");
  if (window.pageYOffset > 300) {
    myButton.style.display = "block";
  }
  else {
    myButton.style.display = "none";
  }
}

// cand se apasa butonul, se revine sus in pagina
function topFct(){
  window.scrollTo(0, 0);
}
