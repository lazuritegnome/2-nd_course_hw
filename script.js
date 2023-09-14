const getMonthGame = (userMonthNumber) => {
    userMonthNumber = Number(prompt('Введите номер месяца'));
    if (isNaN(userMonthNumber)) {
        console.log('не понимаю что вы написали, укажите число');
        return;
    }
    if (userMonthNumber >= 1 && userMonthNumber <= 2 || userMonthNumber === 12) {
        console.log(`${userMonthNumber} месяц - Зима`);
    } else if (userMonthNumber >= 3 && userMonthNumber <= 5) {
        console.log(`${userMonthNumber} месяц - Весна`);
    } else if (userMonthNumber >= 6 && userMonthNumber <= 8) {
        console.log(`${userMonthNumber} месяц - Лето`);
    } else if (userMonthNumber >= 9 && userMonthNumber <= 11) {
        console.log(`${userMonthNumber} месяц - Осень`);
    }
    else if(userMonthNumber <= 0 || userMonthNumber >=13) {
        console.log('вы ввели неверное значение, пожалуйста, укажите значение от 1 до 12');
    }
}

