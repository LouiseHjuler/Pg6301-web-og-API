    export function randomQuestion() {
    return Questions[Math.trunc(Math.random() * Questions.length)];
}

export function isCorrectAnswer(question, answer) {
    return question.correct_answers[answer + "_correct"] === "true";
}

// Generated from https://quizapi.io/api/v1/questions?category=code&limit=10&tags=JavaScript
// You need to create an API key at https://quizapi.io/ to generate your own questions
export const Questions =
    [{
        "id": 974,
        "question": "What is the correct JavaScript syntax to change the content of the HTML element below?",
        "description": null,
        "answers": {
            "answer_a": "#demo.innerHTML = \"Hello World!\";",
            "answer_b": "document.getElementById(\"demo\").innerHTML = \"Hello World!\";",
            "answer_c": "document.getElement(\"p\").innerHTML = \"Hello World!\";",
            "answer_d": "document.getElementByName(\"p\").innerHTML = \"Hello World!\";",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "true",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "explanation": null,
        "tip": null,
        "tags": [{"name": "JavaScript"}],
        "category": "Code",
        "difficulty": "Easy"
    }, {
        "id": 976,
        "question": "What is the correct syntax for referring to an external script called \"xxx.js\"?",
        "description": null,
        "answers": {
            "answer_a": "<script name=\"xxx.js\">",
            "answer_b": "<script src=\"xxx.js\">",
            "answer_c": "<script href=\"xxx.js\">",
            "answer_d": "<script declare=\"xxx.js\">",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "true",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "explanation": null,
        "tip": null,
        "tags": [{"name": "JavaScript"}],
        "category": "Code",
        "difficulty": "Easy"
    }, {
        "id": 995,
        "question": "Which operator is used to assign a value to a variable?",
        "description": null,
        "answers": {
            "answer_a": "x",
            "answer_b": "-",
            "answer_c": "=",
            "answer_d": "*",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "false",
            "answer_c_correct": "true",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "explanation": null,
        "tip": null,
        "tags": [{"name": "JavaScript"}],
        "category": "Code",
        "difficulty": "Easy"
    }, {
        "id": 986,
        "question": "How to insert a comment that has more than one line?",
        "description": null,
        "answers": {
            "answer_a": "\/*This comment has more than one line*\/",
            "answer_b": "<!--This comment has more than one line-->",
            "answer_c": "\/\/This comment has more than one line\/\/",
            "answer_d": null,
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "explanation": null,
        "tip": null,
        "tags": [{"name": "JavaScript"}],
        "category": "Code",
        "difficulty": "Easy"
    }, {
        "id": 988,
        "question": "How do you round the number 7.25, to the nearest integer?",
        "description": null,
        "answers": {
            "answer_a": "Math.round(7.25)",
            "answer_b": "round(7.25)",
            "answer_c": "rnd(7.25)",
            "answer_d": "Math.rnd(7.25)",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "explanation": null,
        "tip": null,
        "tags": [{"name": "JavaScript"}],
        "category": "Code",
        "difficulty": "Easy"
    }, {
        "id": 989,
        "question": "How do you find the number with the highest value of x and y?",
        "description": null,
        "answers": {
            "answer_a": "ceil(x, y)",
            "answer_b": "Math.ceil(x, y)",
            "answer_c": "Math.max(x, y)",
            "answer_d": "top(x, y)",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "false",
            "answer_c_correct": "true",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "explanation": null,
        "tip": null,
        "tags": [{"name": "JavaScript"}],
        "category": "Code",
        "difficulty": "Easy"
    }, {
        "id": 981,
        "question": "How to write an IF statement in JavaScript?",
        "description": null,
        "answers": {
            "answer_a": "if i = 5 then",
            "answer_b": "if i = 5",
            "answer_c": "if i == 5 then",
            "answer_d": "if (i == 5)",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "true",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "explanation": null,
        "tip": null,
        "tags": [{"name": "JavaScript"}],
        "category": "Code",
        "difficulty": "Easy"
    }, {
        "id": 984,
        "question": "How does a FOR loop start?",
        "description": null,
        "answers": {
            "answer_a": "for i = 1 to 5",
            "answer_b": "for (i = 0; i <= 5; i++)",
            "answer_c": "for (i <= 5; i++)",
            "answer_d": "for (i = 0; i <= 5)",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "true",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "explanation": null,
        "tip": null,
        "tags": [{"name": "JavaScript"}],
        "category": "Code",
        "difficulty": "Easy"
    }, {
        "id": 983,
        "question": "How does a WHILE loop start?",
        "description": null,
        "answers": {
            "answer_a": "while (i <= 10)",
            "answer_b": "while i = 1 to 10",
            "answer_c": "while (i <= 10; i++)",
            "answer_d": null,
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "explanation": null,
        "tip": null,
        "tags": [{"name": "JavaScript"}],
        "category": "Code",
        "difficulty": "Easy"
    }, {
        "id": 987,
        "question": "What is the correct way to write a JavaScript array?",
        "description": null,
        "answers": {
            "answer_a": "var colors = 1 = (\"red\"), 2 = (\"green\"), 3 = (\"blue\")",
            "answer_b": "var colors = \"red\", \"green\", \"blue\"",
            "answer_c": "var colors = [\"red\", \"green\", \"blue\"]",
            "answer_d": "var colors = (1:\"red\", 2:\"green\", 3:\"blue\")",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "false",
            "answer_c_correct": "true",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "explanation": null,
        "tip": null,
        "tags": [{"name": "JavaScript"}],
        "category": "Code",
        "difficulty": "Easy"
    }];