/**
 * Little library that allow you to bring a calendar to your page without necessity to actually coding it (kinda)
 * (its very raw and unoptimized though)
 * 
**/


function createCalendar(y? : number | string, m? : number | string) {
//                                            ^ month must be represented as number from 0 to 11 for Jan to Dec respectively

    const year = y || new Date().getFullYear();
    const month = m || new Date().getMonth();

    const weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jule', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    let d = new Date(+year, +month);

    function getDay(date : Date) {

        let day = date.getDay();

        if (!day) day = 7;

        return day - 1;

    };


    let table = '<table>';

    // calendar header

    table += `<caption class="calendar_caption">${months[d.getMonth()]} ${d.getFullYear()}</caption>`;

    // table header

    table += '<tr class="calendar_header">';

    weekDays.forEach(item => table += `<th>${item}</th>`);

    table += '</tr>';
    
    // table body

    table += '<tr>';

    for (let i = 0; i < getDay(d); i++) { table += '<td></td>'; };

    while (d.getMonth() == +month) {

        table += `<td class="calendar_day${d.getDate()}">${d.getDate()}</td>`;

        if (getDay(d) % 7 == 6) { table += '</tr><tr>'; };

        d.setDate(d.getDate() + 1);

    };

    if (getDay(d)) {

        for (let i = getDay(d); i < 7; i++) { table += '<td></td>'; };
        
    };

    table += '</tr>';

    table += '</table>';


    return table;

};