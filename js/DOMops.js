guessedPersonHTML.onkeyup = e => {
    if (13 === e.keyCode)
        if (exists) {
            if (computerCard.toUpperCase() == $("#guesswho").val().toUpperCase()) return victory = 1, void endGame(victory);
            victory = 0, endGame(victory)
        } else guessedPersonHTML.value = "Does not exist!", guessedPersonHTML.disabled = !0, setTimeout(() => {
            guessedPersonHTML.value = guessedPerson, guessedPersonHTML.disabled = !1, guessedPersonHTML.focus()
        }, 1e3);
    else {
        var s = guessedPersonHTML.value;
        guessedPerson = s
    }
}, answerYes.onclick = () => {
    playerAnswers[best.atribute] = !0, Object.keys(activeCards).forEach(e => {
        activeCards[e][best.atribute] || "total" == e || delete activeCards[e]
    }), setTotal(activeCards), logDictionary(activeCards, "ACTIVE CARDS")
}, answerNo.onclick = () => {
    playerAnswers[best.atribute] = !1, Object.keys(activeCards).forEach(e => {
        activeCards[e][best.atribute] && "total" != e && delete activeCards[e]
    }), setTotal(activeCards), logDictionary(activeCards, "ACTIVE CARDS")
};
let checkInput = () => {
        "block" == playerGuessHTML.style.display ? existsvar = setInterval(() => {
            for (var e = 0; e < cards.length; e++)
                if (guessedPerson) {
                    if (guessedPersonHTML.value = guessedPersonHTML.value.toUpperCase(), guessedPerson.toUpperCase() == cards[e].toUpperCase()) {
                        exists = !0, guessedPersonHTML.style.color = "green", playerGuessHTML.style.borderColor = "green";
                        break
                    }
                    exists = !1, guessedPersonHTML.style.color = "red", playerGuessHTML.style.borderColor = "red"
                } else playerGuessHTML.style.borderColor = "white"
        }, 333) : existvar && clearInterval(existvar)
    },
    createAtributeHTML = () => {
        var e, s;
        for (var t in selectQuestionHMTL.length = 1, people.total) {
            for (var r in s = !1, myAnswers)
                if (t == r) {
                    s = !0;
                    break
                } if (!s) {
                var a = words[t][language];
                (e = document.createElement("option")).text = `${atributeImages[words[t].eng]} ${a.toUpperCase()}`, e.value = words[t].eng, selectQuestionHMTL.add(e)
            }
        }
    },
    drawKnownFacts = () => {
        myAnswersHMTL.innerHTML = "", Object.keys(myAnswers).forEach(e => {
            myAnswers[e] ? (colorAtr = "#00cc00", myAnswersHMTL.innerHTML += `<b style="color:${colorAtr}">${atributeImages[words[e].eng]}${words[e][language].toUpperCase()}✔️</b><br>`) : (colorAtr = "#ff0000", myAnswersHMTL.innerHTML += `<b style="color:${colorAtr}">${atributeImages[words[e].eng]}${words[e][language].toUpperCase()} ❌</b><br>`)
        })
    };
cancelRestartHTML.onclick = () => {
    finalRestartHTML.style.display = "none"
}, btnRestartHTML.onclick = () => {
    finalRestartHTML.style.display = "block"
};
const start = () => {
        showHUD(), startGame() 
    },
    hideHUD = () => {
        Object.keys(toFinalHide).forEach(e => {
            toFinalHide[e].style.display = "none"
        })
    },
    showHUD = () => {
        Object.keys(toFinalHide).forEach(e => {
            (turn && "answers" != e || !turn && "questions" != e) && (toFinalHide[e].style.display = "block")
        })
    },
    showFinal = () => {
        finalDivHMTL.style.display = "block"
    };
endRematch.onclick = () => {
    gameoverHTML.style.display = "none", music.play(), startGame()
};
let enableQuestion = () => {
        selectQuestionHMTL.value = "", selectQuestionHMTL.length = 1, createAtributeHTML(), questionsHTML.style.display = "block", answersHTML.style.display = "none"
    },
    enableAnswer = () => {
        questionsHTML.style.display = "none", answersHTML.style.display = "block"
    };
const showPlayerGuess = () => {
        Object.keys(toFinalHide).forEach(e => {
            toFinalHide[e].style.display = "none"
        }), guessedPersonHTML.autofocus = !0, playerGuessHTML.style.display = "block"
    },
    cancelPlayerGuess = () => {
        showHUD(), playerGuessHTML.style.display = "none", guessedPersonHTML.value = ""
    };