//part1
let year = prompt('Рік народження:');
let town = prompt('Місто народження:');
let sport = prompt('Улюблений вид спорту:');

let age = 2023 - year;


switch (town) {
    case 'Київ':
        alert("Твій вік: " + age + "." + ' Ти живеш у столиці України');
        break;
    case 'Вашингтон':
        alert("Твій вік: " + age + "." + ' Ти живеш у столиці CША');
        break;
    case 'Лондон':
        alert("Твій вік: " + age + "." + ' Ти живеш у столиці Великобританії');
        break;
    default:
        alert("Твій вік: " + age + "." + ' Ти живеш у місті ' + town);
}

//part2
let sport1 = 'Біг';
let sport2 = 'Гребля';
let sport3 = 'Шахи';

let champ1 = 'Джоном';
let champ2 = 'Білом';
let champ3 = 'Кайлом';


switch (sport) {
    case sport1 :
        alert('Круто! Хочеш стати ' + champ1);
        break;
    case sport2 :
        alert('Круто! Хочеш стати ' + champ2);
        break;
    case sport3 :
        alert('Круто! Хочеш стати ' + champ3);
        break;
    }

if (year === null) {
    alert('Шкода, що Ви не захотіли ввести свій рік народження');
} else if (town === null) {
    alert('Шкода, що Ви не захотіли ввести своє місто народження');
} else if (sport === null) {
    alert('Шкода, що Ви не захотіли ввести свій улюблений вид спорту');
}
