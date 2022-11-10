//вопросы
const questions = [
    {
        question: 'Где находится пояс астероидов?',
        answers: [` между Юпитером и Сатурном`, `Землей и Венерой`, `Марсом и Юпитером`, `Землей и Марсом`],
        correct: 3
    },
    {
        question: 'Какой из вариантов лучше всего описывает атмосферу, окружающую Венеру?',
        answers: [`яркая и солнечная`, `холодная и снежная`, `холодная и влажная`, `горячая и ядовитая`],
        correct: 4
    },
    {
        question: 'К какой планете принадлежат спутники Оберон и Титания?',
        answers: [`Юпитер`, `Уран`, `Венера`, `Земля`],
        correct: 2
    },
    {
        question: 'Из чего в основном состоят кометы?',
        answers: [`ядовитая жидкость`, `лед и пыль`, ` ржавый металл`, `расплавленный камень`],
        correct: 2
    },
    {
        question: 'Из чего в основном состоит Солнце?',
        answers: [`жидкая лава`, `расплавленный метал`, `газ`, `камень`],
        correct: 3
    },
    {
        question: 'Сколько спутников у Марса?',
        answers: [13, 2, 50, 1],
        correct: 2
    },
    {
        question: 'Самый большой вулкан Солнечной системы называется «Гора Олимп». Где он находится?',
        answers: ["Юпитер", 'Земля', 'Венера', 'Марс'],
        correct: 4
    },
    {
        question: 'Какая планета ближе всех расположена к Солнцу?',
        answers: ['Земля', 'Венера', 'Меркурий', 'Нептун'],
        correct: 3
    },
    {
        question: 'Большое красное пятно на Юпитере, что это?',
        answers: ['вулкан', 'озеро', 'буря', 'кратер'],
        correct: 3
    }

]

const title = document.querySelector('.hero__title')
const text = document.querySelector('.hero__text')
const button = document.querySelector('.hero__button')
const buttonStart = document.querySelector('.hero__buttonstart')
const buttonSumbit = document.querySelector('.hero__buttonsumbit')
const str = document.querySelector('.hero__strong')
console.log(str);

//переменные
let questionInd = 0
let result = 0



//очистка формы
function clear() {
    title.innerText = ''
    text.innerText = ''
    //buttonStart.innerHTML = ''
}
//вывод вопроса
function showQuesh() {
    title.innerText = questions[questionInd]['question']
    for (let item = 0; item < questions[questionInd]['answers'].length; item++) {
        let answer = questions[questionInd]['answers'][item]
        const questionTempl = `
        <label>
            <input type="radio" value="${item + 1}" class="answer" name="answer">
            <span>${answer}</span>
        </label>`
        text.innerHTML = text.innerHTML + questionTempl
    }
    let wid = ((questionInd + 1) * 100) / questions.length
    console.log(wid);
    str.style.width = `${wid}` + "%";
}

//отклик на "Начать тест"
function clickingStart() {
    clear()
    buttonStart.style.display = "none";
    buttonSumbit.style.display = "block";
    showQuesh()

}

//проверка последнего вопроса
function lastQush() {
    if (questionInd !== questions.length - 1) {
        questionInd++
        showQuesh()
    }
    else {
        showResult()
    }
}

//вывод результата теста
function showResult() {
    if(result * 100 / questions.length == 100) {
        title.innerText = `Поздравляем Вы ответели на все вопросы !!!
        Ваш результат  ${ result } из ${questions.length}`,
        buttonSumbit.innerText = `Начать заново`
        buttonSumbit.onclick = () => history.go()
    }
    if(result * 100 / questions.length < 100 && result * 100 / questions.length > 50) {
        title.innerText = ` Вы ответели больше половины вопросов !!!
        Ваш результат  ${ result } из ${questions.length}`,
        buttonSumbit.innerText = `Начать заново`
        buttonSumbit.onclick = () => history.go()
    }
    if(result * 100 / questions.length <  50) {
        title.innerText = ` Следует потренироваться
        Ваш результат  ${ result } из ${questions.length}`,
        buttonSumbit.innerText = `Начать заново`
        buttonSumbit.onclick = () => history.go()
    }
    
}

//Проверка ответа пользователя
function checkUser() {
    if (questions[questionInd]['correct'] == text.querySelector('input:checked').value) {
        result++
    }
}

//отклик на "ответить"
function clickingSubm() {
    const checkAnswer = text.querySelector('input:checked')
    if (!checkAnswer) {
        return
    }
    checkUser()
    clear()
    lastQush()
}
//нажатие на кнопку
buttonStart.addEventListener('click', clickingStart)
buttonSumbit.addEventListener('click', clickingSubm)
