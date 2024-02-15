let gender = String(prompt(`Введите Ваш пол в формате М/Ж:`))
while (gender !== 'М' && gender !== 'Ж' )
{
    gender = String(prompt(`Данные введены некорректно, пожалуйста, повторите попытку. Введите Ваш пол в формате М/Ж:`))
}

if (gender === 'М') {
    document.getElementById(`gender`).innerHTML = ''
    document.getElementById(`burn`).innerHTML = 'ся'
} else {
    document.getElementById(`gender`).innerHTML = 'ка'
    document.getElementById(`burn`).innerHTML = 'ась'
}

let groupName = String(prompt(`Введите Вашу группу:`))
document.getElementById(`groupName`).innerHTML = groupName

const yearMatch = groupName.match(/\d+/)
let fullYear = 0

if (yearMatch) {
    const year = parseInt(yearMatch[0])

    if (year >= 1 && year <= 99) {
        fullYear = (year < 10 ? '200' : '20') + year
    } else {
        alert(`Некорректное название группы. Пожалуйста, перезагрузите страницу и введите корректные данные.`)
    }
} else {
    alert(`Некорректное название группы. Пожалуйста, перезагрузите страницу и введите корректные данные.`)
}

let studentName = String(prompt(`Введите Вашу фамилию, имя и отчество:`))

const nameParts = studentName.split(' ');

if (nameParts.length >= 3) {
    const formattedName = `${nameParts[0]} ${nameParts[1].charAt(0)}. ${nameParts[2].charAt(0)}.`

    document.getElementById(`studentName`).innerHTML = formattedName
} else {
    alert(`Некорректный ввод. Введите Вашу фамилию, имя и отчество.`)
}

function formatDate(date) {
    let tdate = new Date(date)
    let day = tdate.getDate().toString()

    if (day.length < 2) day = `0` + day
    let month = (tdate.getMonth() + 1).toString()

    if (month.length < 2) month = `0` + month
    let year = tdate.getFullYear()

    return `${day}.${month}.${year}`
}

function getDayName(dayNumber) {
    const dayNames = {
        '0' : 'воскресенье',
        '1' : 'понедельник',
        '2' : 'вторник',
        '3' : 'среда',
        '4' : 'четверг',
        '5' : 'пятница',
        '6' : 'суббота',
    }

    return dayNames[dayNumber] || 'не определено'
}

function calculateAge(birthDate) {
    const today = new Date()
    const birthYear = birthDate.getFullYear()
    const currentYear = today.getFullYear()
    const age = currentYear - birthYear

    if (today < new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate())) {
        return age - 1
    } else {
        return age
    }
}

let birthdayInput = String(prompt(`Введите Вашу дату рождения в формате (ГГГГ-ММ-ДД):`))
let birthday = new Date(birthdayInput)

if (isNaN(birthday.getTime()) || calculateAge(birthday) < 16) {
    alert(`Некорректная дата рождения. Пожалуйста, перезагрузите страницу и введите корректные данные в формате ГГГГ-ММ-ДД.`)
}

document.getElementById(`birthday`).innerHTML = formatDate(birthday)

let birthdayName = String(getDayName(birthday.getDay()))
document.getElementById(`birthdayName`).innerHTML = birthdayName

let oYear = Number(parseInt(fullYear) + 4)
document.getElementById(`oYear`).innerHTML = oYear

let oAge = Number(Number(new Date().getFullYear() - birthday.getFullYear()) + 4)
document.getElementById(`oAge`).innerHTML = oAge

let currentDate = new Date()
let firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
let timeDifference = currentDate - firstDayOfMonth

let daysPassed = Number(Math.floor(timeDifference / (1000 * 60 * 60 * 24)))
document.getElementById(`daysLate`).innerHTML = daysPassed

let hoursPassed = Number(Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
document.getElementById(`hoursLate`).innerHTML = hoursPassed

let minutesPassed = Number(Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)))
document.getElementById(`minutesLate`).innerHTML = minutesPassed

function isInteger(num) {
    return num % 1 === 0
}

function factorial(num) {
    if (num === 0 || num === 1) {
        return 1
    } else {
        return num * factorial(num - 1)
    }
}

let x = Number(prompt(`Введите вещественное X = | X | < 1:`))
while (Math.abs(x) >= 1 || isInteger(x) === true) {
    x = Number(prompt(`Введено неверное значение X, пожалуйста, повторите попытку. Введите вещественное X = | X | < 1:`))
}
document.getElementById(`x`).innerHTML = x

let n = Number(prompt(`Введите целое N > 0:`))
while (n <= 0 || isInteger(n) === false) {
    n = Number(prompt(`Введено неверное значение N, пожалуйста, повторите попытку. Введите целое N > 0:`))
}
document.getElementById(`n`).innerHTML = n

let minM = Number(prompt(`Введите минимальное целое значение M > 0:`))
while (minM <= 0 || isInteger(minM) === false) {
    minM = Number(prompt(`Введено неверное минимальное значение M, пожалуйста, повторите попытку. Введите минимальное целое значение M > 0:`))
}
document.getElementById(`minM`).innerHTML = minM

let maxM = Number(prompt(`Введите максимальное целое значение M, большее минимального значения M:`))
while (maxM <= minM || isInteger(minM) === false) {
    maxM = Number(prompt(`Введено неверное максимальное значение M, пожалуйста, повторите попытку. Введите максимальное целое значение M, большее минимального значения M:`))
}
document.getElementById(`maxM`).innerHTML = maxM

let result = 0
let string = ''
for (let m = minM; m <= maxM; m++) {
    result += Math.pow(-1, m - 1) * Math.pow(x, 2 * m - 1) / factorial(2 * m - 1)
    string += `<p>M = ${m} | S = ${result}</p>`
    document.getElementById(`steps`).innerHTML = string
    console.log(`m = ${m} result = ${result}`)
}
document.getElementById(`result`).innerHTML = result

let arctgX = Math.atan(x)
document.getElementById(`arctgX`).innerHTML = arctgX

let delta = Math.abs(result - arctgX)

if (result === arctgX) {
    document.getElementById(`answer`).innerHTML = `Да`
} else if (Math.abs(result - arctgX) < Math.pow(10, -4)) {
    document.getElementById(`answer`).innerHTML = `Почти, погрешность ${delta}`
} else {
    document.getElementById(`answer`).innerHTML = `Нет, погрешность ${delta}`
}
