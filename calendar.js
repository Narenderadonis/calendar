const contain = document.getElementsByClassName('container')[0];
const year = new Date().getFullYear();   // any year you want

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let no_of_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function checkLeapYear(year) {
    let checked =  (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
    if (checked == true){
        no_of_days[1] = 29;
    }
}
checkLeapYear(year);

document.getElementById("main").innerHTML = year + " Calendar";


for(let i = 1; i <= 12; i++){
    let div = document.createElement('div');
    div.setAttribute('class','month');
    div.setAttribute('id', months[i - 1])
    let month = document.createElement('div');
    month.setAttribute('class', 'monthname');
    month.innerHTML = months[i - 1];
    div.appendChild(month);
    let monthcontainer = document.createElement('table');
    monthcontainer.setAttribute('class', 'monthcontainer');
    monthcontainer.innerHTML = '<tr>\n' +
        '                    <th>Mon</th>\n' +
        '                    <th>Tue</th>\n' +
        '                    <th>Wed</th>\n' +
        '                    <th>Thu</th>\n' +
        '                    <th>Fri</th>\n' +
        '                    <th>Sat</th>\n' +
        '                    <th>Sun</th>\n' +
        '                </tr>';
    div.appendChild(monthcontainer);
    contain.appendChild(div);
}

for (let i = 0; i < months.length; i++){
    let block = document.querySelector("div" + '#' + months[i] + ' table' + ' tbody');
    let monthIndex = getStartDay(i);
    let dateSet = getDateSet(no_of_days[i], monthIndex);
    for (let j = 0; j < dateSet.length; j++){
        let dayrow = document.createElement('tr');
        dayrow.setAttribute('class', 'dayrow');
        for (let k = 0; k < 7; k++){
            let day = document.createElement('td');
            let text = document.createTextNode(dateSet[j][k]);
            day.appendChild(text);
            dayrow.appendChild(day);
        }
        block.appendChild(dayrow);
    }


}

function getStartDay(monthIndex) {
    let day = new Date(year, monthIndex, 1);
    return  (day.getDay() == 0)? 6: (day.getDay() - 1);
}


function getDateSet(num, index) {
    let dateSet = [];
    for (let i = 1; i <= 6; i++){
        dateSet.push([' ', ' ', ' ', ' ', ' ', ' ', ' ']);
    }
    let i = 1, j = index, k = 0;
    while (i <= num){
        if (j <= 6) {
            dateSet[k][j] = String(i);
            j++;
        }
        if(j > 6){
            k++;
            j = 0;
        }
        i++;
    }

    return dateSet;

}
