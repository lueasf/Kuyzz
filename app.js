const responses = ["b","b","c","c"]; // reponses correctes

const form = document.querySelector(".quiz-form");
form.addEventListener("submit", handleSubmit);

// FUNC 1 RES
function handleSubmit(e){
    e.preventDefault();

    const results = [];
    const radiobuttons = document.querySelectorAll("input[type='radio']:checked"); 
    // pour prendre tous les inputs radio qui sont checked

    radiobuttons.forEach((radiobutton, index) => { // on garde l'index
        if(radiobutton.value === responses[index]){
            results.push(true);
        }else{
            results.push(false);
        }
    }); // forEach est une methode qui permet de parcourir un tableau 
    // ceci permet d'avoir un tableau de booleens
    showResults(results);
    addColors(results);
  
}

const titleResult = document.querySelector(".results h2");
const markResult = document.querySelector(".mark");
const helpResult = document.querySelector(".help");


// FUNC 2 MONTRER LES RESULTATS
function showResults(res){ 
    const errorsNb = res.filter(el => el === false).length;
    // methode qui renvoie un nouveau tableau avev que les éléments égaux à false
    switch(errorsNb){
        case 0:
            titleResult.textContent = "Bravo";
            helpResult.style.display = "block";
            helpResult.textContent = "On va bien s'entendre";
            markResult.style.display = "block";
            markResult.innerHTML = "Score : <span> 5/5 <span>";
        break;
        case 1:
            titleResult.textContent = "Bien joué";
            helpResult.style.display = "block";
            helpResult.textContent = "Presque parfait";
            markResult.style.display = "block";
            markResult.innerHTML = "Score : <span> 4/5 <span>";
        break;
        case 2:
            titleResult.textContent = "Pas mal";
            helpResult.style.display = "block";
            helpResult.textContent = "Peut mieux faire";
            markResult.style.display = "block";
            markResult.innerHTML = "Score : <span> 3/5 <span>";
        break;
        case 3:
            titleResult.textContent = "Peut mieux faire";
            helpResult.style.display = "block";
            helpResult.textContent = "Encore un effort";
            markResult.style.display = "block";
            markResult.innerHTML = "Score : <span> 2/5 <span>";
        break;
        case 4:
            titleResult.textContent = "Tout est faux...";
            helpResult.style.display = "block";
            helpResult.textContent = "1 point pour la participation";
            markResult.style.display = "block";
            markResult.innerHTML = "Score : <span> 1/5 <span>";
        break;

        default:
            titleResult.textContent = "???"; 
    }
}

const questions = document.querySelectorAll(".question-block");


// // FUNC 3 AJOUTER DES COULEURS
function addColors(results){
    results.forEach((res,index) => {
        if(results[index]){
        questions[index].style.backgroundImage = "linear-gradient(to right, #0ced4f, #75d993";
        } else {
        questions[index].style.backgroundImage = "linear-gradient(to right, #db2525, #ba4141";
        }
    })
}

const radioInputs = document.querySelectorAll("input[type='radio']"); // on selectionne tous les inputs radio
radioInputs.forEach(radioInput => radioInput.addEventListener('input', resetColor))

// FUNC 4 RESET

function resetColor(e){

    // <console.log(e.target.getAttribute("name").slice(1) -1 ); pour avoir l'index de la question
    const index = e.target.getAttribute("name").slice(1);
    const parentQuestionBlock = questions[index]; // on selectionne la question qui contient l'input

    parentQuestionBlock.style.backgroundColor = "#86c4c1bb;"; // on reset la couleur
    parentQuestionBlock.style.backgroundImage= "none";

}
