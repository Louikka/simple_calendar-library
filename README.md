# Simple Calendar


This library provides only one (1) function `crearteCalendar()`.

This function returns string with HTML code.  
This function have two (2) arguments :
- `year` : number | string
- `month` : number | string (must be represented as number from 0 to 11 for Jan to Dec respec.)

For example, function `crearteCalendar(new Date().getFullYear(), 1);` creates a calendar with February month of current year.  
Also, parameters can be omitted entirely or particularly. In that case function's parameters will be deafult (function `crearteCalendar();` will creates a calendar with current month and current year.