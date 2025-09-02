const questions = [];

function addQuestion(question, answers, correct, image, name) {
    questions.push({
        question: question,
        answers: shuffleArray(answers),
        correct: correct,
        image: image,
        name: name
    });
}

addQuestion("Où se trouve la Pyramide de Khéops ?", ["Soudan", "Égypte", "Mexique"], "Égypte", "img/image.jpg", "Pyramide de Khéops");
addQuestion("Quel est le plus grand amphithéâtre de l’Empire romain ?", ["Amphithéâtre de Pula", "Théâtre d'Orange", "Colisée"], "Colisée", "img/colisé.jpg", "Colisée");
addQuestion("Quel site antique est surnommé la ‘cité perdue des Incas’ ?", ["Machu Picchu", "Tikal", "Palenque"], "Machu Picchu", "img/machu.jpg", "Machu Picchu");
addQuestion("Quel est le monument emblématique du Mali datant de l’Empire du Ghana ?", ["Tombouctou", "Mosquée de Djenné", "Roches de Sindou"], "Mosquée de Djenné", "img/mosque_djenne.jpg", "Mosquée de Djenné");
addQuestion("Quelle statue colossale se dressait à l'entrée du port de Rhodes ?", ["Colosse de Rhodes", "Statue de Zeus", "Phare d’Alexandrie"], "Colosse de Rhodes", "img/colosse.jpg", "Colosse de Rhodes");
addQuestion("Quel monument français est surnommé la Dame de Fer ?", ["Arc de Triomphe", "Tour Eiffel", "Pont Alexandre III"], "Tour Eiffel", "img/tour.jpg", "Tour Eiffel");
addQuestion("Quel temple égyptien a été sauvé des eaux du barrage d’Assouan ?", ["Karnak", "Louxor", "Abou Simbel"], "Abou Simbel", "img/abou.jpeg", "Abou Simbel");
addQuestion("Où se trouve la statue du Christ Rédempteur ?", ["Argentine", "Brésil", "Chili"], "Brésil", "img/christ.jpg", "Christ Rédempteur");
addQuestion("Quel monument abrite la cloche Big Ben ?", ["Buckingham Palace", "Tour Elizabeth", "Cathédrale Saint-Paul"], "Tour Elizabeth", "img/bigben.jpg", "Big Ben");
addQuestion("Quel est le plus grand temple religieux du monde ?", ["Angkor Wat", "Borobudur", "Temple de Karnak"], "Angkor Wat", "img/angkor.jpg", "Angkor Wat");
addQuestion("Où se trouve le Taj Mahal ?", ["Inde", "Pakistan", "Afghanistan"], "Inde", "img/tajmahal.jpg", "Taj Mahal");
addQuestion("Quel monument est situé sur la place Rouge à Moscou ?", ["Cathédrale Saint-Basile", "Kremlin", "Ermitage"], "Cathédrale Saint-Basile", "img/Basile.jpg", "Cathédrale Saint-Basile");
addQuestion("Où peut-on visiter le château de Neuschwanstein ?", ["Autriche", "Allemagne", "France"], "Allemagne", "img/neuschwanstein.jpg", "Château de Neuschwanstein");
addQuestion("Quel célèbre monument se trouve à Washington D.C. ?", ["Mont Rushmore", "Lincoln Memorial", "Statue de la Liberté"], "Lincoln Memorial", "img/lincoln.jpg", "Lincoln Memorial");
addQuestion("Quelle est la plus grande cathédrale gothique d’Europe ?", ["Cathédrale de Milan", "Notre-Dame de Paris", "Cathédrale de Séville"], "Cathédrale de Séville", "img/seville.jpg", "Cathédrale de Séville");
addQuestion("Dans quel pays se trouve la ville de Petra ?", ["Égypte", "Jordanie", "Grèce"], "Jordanie", "img/petra.jpg", "Petra");
addQuestion("Quelle est la plus haute statue du monde ?", ["Statue de la Liberté", "Statue de l'Unité", "Bouddha du Temple du Printemps"], "Statue de l'Unité", "img/unity.jpg", "Statue de l'Unité");
addQuestion("Quel édifice célèbre se trouve à Istanbul ?", ["Taj Mahal", "Hagia Sophia", "Alhambra"], "Hagia Sophia", "img/hagia.jpg", "Hagia Sophia");
addQuestion("Où peut-on voir le Sphinx de Gizeh ?", ["Égypte", "Turquie", "Irak"], "Égypte", "img/sphinx.png", "Sphinx de Gizeh");
addQuestion("Quel monument célèbre se trouve à Sydney ?", ["Empire State Building", "Opéra de Sydney", "Burj Khalifa"], "Opéra de Sydney", "img/sydney.jpg", "Opéra de Sydney");
addQuestion("Quel célèbre mur sépare Berlin en deux jusqu’en 1989 ?", ["Mur d'Hadrien", "Mur de Berlin", "Mur des Lamentations"], "Mur de Berlin", "img/berlin.jpg", "Mur de Berlin");
addQuestion("Quelle ancienne ville est connue pour son théâtre romain et ses ruines en Syrie ?", ["Babylone", "Palmyre", "Thèbes"], "Palmyre", "img/palmyre.jpg", "Palmyre");
addQuestion("Quel monument emblématique se trouve sur l'île de Pâques ?", ["Statues Moaï", "Pyramides de Gizeh", "Stonehenge"], "Statues Moaï", "img/moai.jpg", "Statues Moaï");

let score = 0;
let currentQuestionIndex = 0;
let shuffledQuestions = shuffleArray([...questions]);


let lives = 5;
let timerInterval;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function updateLives() {
    document.getElementById("lives").innerText = "❤️".repeat(lives);
}
function startTimer() {
    let time = 90;
    const timerElement = document.getElementById("timer");
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        timerElement.innerText = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
        if (time <= 0) {
            clearInterval(timerInterval);
            timeOut();
        }
        time--;
    }, 1000);
}

function timeOut() {
    lives--;²
    updateLives();
    if (lives <= 0) {
        gameOver();
    } else {
        const messageElement = document.getElementById("message");
        messageElement.innerText = "Temps écoulé ! Vous avez perdu un cœur. Passez à la question suivante.";
        document.getElementById("next-button").style.display = "inline-block";

        // Make the message disappear after 3 seconds
        setTimeout(() => {
            messageElement.innerText = "";
        }, 3000);
    }
}

function nextQuestion() {
    document.getElementById("message").innerText = ""; // Clear the message when moving to the next question
    currentQuestionIndex++;
    loadQuestion();
}

function loadQuestion() {
    if (score >= 20) {
        document.getElementById("message").innerText = "Bravo ! Vous êtes un champion de culture générale !";
        document.getElementById("next-button").style.display = "none";
        document.getElementById("quit-button").style.display = "none";
        clearInterval(timerInterval);
        return;
    }

    if (lives <= 0) {
        gameOver();
        return;
    }

    const questionData = shuffledQuestions[currentQuestionIndex % shuffledQuestions.length];
    document.getElementById("question").innerText = questionData.question;

    const answersContainer = document.getElementById("answers");
    const monumentImage = document.getElementById("monument-image");
    const nextButton = document.getElementById("next-button");
    const quitButton = document.getElementById("quit-button");
    const monumentName = document.getElementById("monument-name");

    answersContainer.innerHTML = "";
    monumentImage.style.display = "none";
    nextButton.style.display = "none";
    quitButton.style.display = "inline-block";
    monumentName.style.display = "none";

    questionData.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.onclick = function () {
            checkAnswer(answer, questionData.correct, questionData.image, questionData.name);
        };
        answersContainer.appendChild(button);
    });

    startTimer();
}

function checkAnswer(selectedAnswer, correctAnswer, image, name) {
    clearInterval(timerInterval);

    const answersContainer = document.getElementById("answers");
    const monumentImage = document.getElementById("monument-image");
    const monumentName = document.getElementById("monument-name");

    if (selectedAnswer === correctAnswer) {
        score += 2;
        document.getElementById("score").innerText = score;
        monumentImage.src = image;
        monumentImage.style.display = "block";
        monumentName.innerText = name;
        monumentName.style.display = "block";
    } else {
        lives--;
        updateLives();
        if (lives <= 0) {
            gameOver();
            return;
        }
    }

    answersContainer.innerHTML = "";
    document.getElementById("next-button").style.display = "inline-block";
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

function startGame() {
    document.getElementById("start-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    document.getElementById("rules-container").style.display = "block";
    updateLives();
    loadQuestion();
}

function restartGame() {
    score = 0;
    currentQuestionIndex = 0;
    shuffledQuestions = shuffleArray([...questions]);
    lives = 5;
    updateLives();
    document.getElementById("score").innerText = score;
    document.getElementById("message").innerText = "";
    document.getElementById("restart-button").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    document.getElementById("rules-container").style.display = "block";

    const gameOverMessage = document.getElementById("game-over-message");
    if (gameOverMessage) {
        gameOverMessage.remove();
    }

    loadQuestion();
}

function gameOver() {
    clearInterval(timerInterval);
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("rules-container").style.display = "none";

    const gameOverMessage = document.createElement("div");
    gameOverMessage.id = "game-over-message";
    gameOverMessage.style.textAlign = "center";
    gameOverMessage.style.background = "whitesmoke";
    gameOverMessage.style.position = "relative";
    gameOverMessage.style.color = "black";
    gameOverMessage.style.marginTop = "0";
    gameOverMessage.innerHTML = `
        <h1>Vous avez perdu tous vos cœurs !</h1>
        <p>Votre score est réinitialisé à 0.</p>
        <button onclick="restartGame()">Recommencer</button>
    `;
    document.body.appendChild(gameOverMessage);
}
function addRestartButtonForWinner() {
    const restartButton = document.createElement("button");
    restartButton.id = "restart-button-winner";
    restartButton.innerText = "Recommencer";
    restartButton.style.display = "block";
    restartButton.onclick = function () {
        restartGame();
        restartButton.style.display = "none"; // Hide the button after restarting
    };
    document.getElementById("quiz-container").appendChild(restartButton);
}

function loadQuestion() {
    if (score >= 20) {
        document.getElementById("message").innerText = "Bravo ! Vous êtes un champion de culture générale !";
        document.getElementById("next-button").style.display = "none";
        document.getElementById("quit-button").style.display = "none";
        clearInterval(timerInterval);
        addRestartButtonForWinner();
        return;
    }

    if (lives <= 0) {
        gameOver();
        return;
    }

    const questionData = shuffledQuestions[currentQuestionIndex % shuffledQuestions.length];
    document.getElementById("question").innerText = questionData.question;

    const answersContainer = document.getElementById("answers");
    const monumentImage = document.getElementById("monument-image");
    const nextButton = document.getElementById("next-button");
    const quitButton = document.getElementById("quit-button");
    const monumentName = document.getElementById("monument-name");

    answersContainer.innerHTML = "";
    monumentImage.style.display = "none";
    nextButton.style.display = "none";
    quitButton.style.display = "inline-block";
    monumentName.style.display = "none";

    questionData.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.onclick = function () {
            checkAnswer(answer, questionData.correct, questionData.image, questionData.name);
        };
        answersContainer.appendChild(button);
    });

    startTimer();
}
