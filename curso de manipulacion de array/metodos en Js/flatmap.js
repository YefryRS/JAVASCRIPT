// tiene la funcion de un flat de alinear nuestro array y un map de irlo transformando a medida que lo va acomodando

const users = [
    { userID: 1, userName: "Tom", attributes: ["Nice", "Cute"] },
    { userID: 2, userName: "Mike", attributes: ["Lovely"] },
    {userID: 3, userName: "Nico", attributes: ["Nice", "Cool"] }
];

//Sin flatmap
const rta = users.map(user => user.attributes).flat();
console.log(rta);
//con flatmap
const rta2 = users.flatMap(user => user.attributes);
console.log(rta2);

const calendars = {
    primaryCalendar:[
        {
            startDate: new Date(2021, 1, 1, 15),
            endDate: new Date(2021, 1, 1, 15, 30),
            title: "Cita 1"
        }
    ]
}

const rta3 = calendars.primaryCalendar.flatMap(item => item.startDate);
console.log(rta3);

const rta4 = Object.values(calendars).flatMap(item => {
    return item.map(date => date.startDate);
});
console.log(rta4);

