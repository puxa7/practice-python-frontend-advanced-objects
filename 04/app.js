const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '02',
        month: '10',
        year: '1986'
    }
}

const today = new Date();
const month = today.getMonth() + 1;
const day = today.getDate();

if (parseInt(user.born.day) === day && parseInt(user.born.month) === month) {
    console.log("Wszystkiego najlepszego!")
} else {
    console.log("Użytkownik nie obchodzi dzisiaj urodzin");
}
