import express from "express"

const router = express.Router()

router.get('/', (req, res) => {
    res.render('quiz.njk', {
        title: "Welcome",
    })
})

const questions = [
    {
        id: "1",
        text: "Vilken är min favoritfärg?",
        answers: ["blå", "grön", "lila", "gul", "rosa"],
        correct: "lila",
    },
    {
        id: "2",
        text: "Vilken färg är vatten?",
        answers: ["blå", "röd", "gul", "genomskinlig", "svart", "grå", "grön"],
        correct: "genomskinlig",
    }
]

router.get('/question', (req, res) => {
    res.render('questions.njk', {
        message: "Nu kör vi quiz!",
        questions,
        answers: questions.answers,
    })
})

router.post("/end", (req,res) => {
    const answers = req.body
    console.log(answers)
    questions.forEach(question => {
        const answer = answers[question.id]
        if (answer == question.correct) {
            console.log("YIPPUE, Question number" + question.id + "is correct")
        }
    })
})

export default router