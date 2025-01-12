/**
 * Little library that allow you to bring a calendar to your page without necessity to actually coding it (kinda)
 * (its very raw and unoptimized though)
 * 
**/



function getDateToString(format) { // format: string (D = day, M = month, Y = year)
//                      (format[, year, month])
//                                        ^ should be number (0 is January)

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jule', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let d = new Date();

    if (arguments.length >= 3 && typeof +arguments[1] === 'number' && typeof +arguments[2] === 'number') {

        d = new Date(+arguments[1], +arguments[2]);

    };

    const day = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();

    if (typeof format === 'string') {

        let a = [];

        for (let i = 0; i < format.length; i++) {

            switch(format[i]) {

                case "D" : a.push(day);
                break;

                case "M" : a.push(month);
                break;

                case "Y" : a.push(year);
                break;
                
            };
            
        };

        return a.join(' ');

    } else {

        return "?";

    };

};

function createCalendar(type, year, month) { // type: string => 'mon' (week begin on monday) || 'sun' (week begin on sunday)
// returns a string with HTML code
// for example
//   --> elem.innerHTML = createCalendar('sun', new Date().getFullYear(), 4);
// creates calendar for May month of current year with week starting on sunday

    const weekDays = (type === 'mon') ? ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'] : ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

    let d = new Date(year, month);

    function getDay(date) {

        let day = date.getDay();

        if (type === 'mon') {

            if (!day) day = 7;
            return day - 1;

        } else {

            return day;

        };

    };


    let table = '<table style="table-layout:fixed;text-align:center;">';

    // calendar header

    table += `<caption class="calendar_caption">${getDateToString('MY', year, month)}</caption>`;

    // table header

    table += '<tr class="calendar_header">';

    weekDays.forEach(item => table += `<th>${item}</th>`);

    table += '</tr>';
    
    // table body

    table += '<tr>';

    for (let i = 0; i < getDay(d); i++) { table += '<td></td>'; };

    while (d.getMonth() == month) {

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