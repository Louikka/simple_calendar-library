# Simple Calendar


This library provides only one (1) function `crearteCalendar()`

This function returns string with HTML code  
This function have four (4) arguments :
- `type` : string => `'mon'` (week begin on monday) || `'sun'` (week begin on sunday)
- `year` : number | string
- `month` : number | string (must be represented as number from 0 to 11 for Jan to Dec respec.)
- `style` : string => `'none'` || `'def'` (style="table-layout:fixed;text-align:center;")

For example, function `crearteCalendar('sun', currentYear, 1, 'def');` creates a calendar with February month of current year with week starting on sunday (with deafult style)  
Also, parameters can be omitted entirely or particularly. In that case function's parameters will be deafult (function `crearteCalendar('mon');` will creates a calendar with current month and current year with week starting on monday (with deafult (`'def'` is deafult style) style))