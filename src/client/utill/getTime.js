import moment from 'moment';
import 'moment/locale/pl';

moment.locale('pl');
moment.updateLocale('pl', {
    months: [ "Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"]
});

const currentDate = moment(),
    sundayShort = moment.weekdaysShort().shift(),
    weekdays = moment.weekdays(),
    weekdaysShort = moment.weekdaysShort().slice(1,7).concat(sundayShort), // placing sunday at the end of array
    months = moment.months(),
    dayOfWeek = (year, month, day) => moment([year, month, day]).day(),
    firstDayOfMonth = (date) => moment(date).startOf('month').format('d') === '0' ? '7' : moment(date).startOf('month').format('d'), //placing start of the week at the end if it's sunday
    daysInMonth = (date) => moment(date).daysInMonth('month'),
    staticHolidays = (year) =>  [ moment([year, 0, 1]).calendar(), moment([year, 0, 6]).calendar(), moment([year, 4, 1]).calendar(), moment([year, 4, 3]).calendar(), moment([year, 7, 15]).calendar(), moment([year, 10, 1]).calendar(), moment([year, 10, 11]).calendar(), moment([year, 11, 25]).calendar(), moment([year, 11, 26]).calendar()],
    //{month: 1, day: [1, 6]}, {month: 5, day: [1, 3, 31]},{month: 8, day: [15]}, {month: 11, day: [1, 11]}, {month: 12, day: [25, 26]}],
    movingHolidays = (year) => {
        const a = year % 19,
            b = year % 4,
            c = year % 7,
            d = (a * 19 + 24) % 30,
            e = ((2 * b) + (4 * c) + (6 * d) + 5) % 7,
            easterStart = () => { 
                let easterStartCounter = moment([year, 2, 22]).add(d+e, 'd').calendar(),
                    easterEndCounter = moment([year, 2, 22]).add(d+e+1, 'd').calendar();
                if ((d === 29 && e === 6) || (d === 28 && e === 6))  {
                    easterStartCounter = easterStartCounter.subtract(7, 'd').calendar();
                    easterEndCounter = easterEndCounter.subtract(7, 'd').calendar();
                    return [easterStartCounter, easterEndCounter]
                } else {
                //    console.log('Sprawdzam: ', year, 'a ', a, 'b ', b, 'c ', c, 'd ', d, 'e ', e, 'easterStartCounter ', easterStartCounter);
                    return [easterStartCounter, easterEndCounter];
                }
            },
            corpusChristi = () => moment([year, 2, 22]).add(d+e + 60, 'd').calendar(),
            Pentecost = () => moment([year, 2, 22]).add(d+e + 49, 'd').calendar()
            ;
           // console.log(e, 'Rok: ', moment([year, 0, 1]).calendar()); //.format('d M YYYY'));
            return easterStart().concat(corpusChristi()).concat(Pentecost());
    },
    holidayNamesPL = [ 'Nowy Rok, Świętej Bożej Rodzicielki', 'Trzech Króli (Objawienie Pańskie)', 'Święto Pracy', 'Święto Konstytucji 3 Maja', 'Święto Wojska Polskiego, Wniebowzięcie Najświętszej Maryi Panny', 'Wszystkich Świętych', 'Święto Niepodległości', 'Boże Narodzenie (pierwszy dzień)', 'Boże Narodzenie (drugi dzień)', 'Wielkanoc', 'Poniedziałek Wielkanocny', 'Boże Ciało', 'Zesłanie Ducha Świętego'],
    allHoliday = (year) => [ 
        {name: 'Nowy Rok, Świętej Bożej Rodzicielki', date: moment([year, 0, 1]).calendar()},
        {name: 'Trzech Króli (Objawienie Pańskie)', date:  moment([year, 0, 6]).calendar()},
        {name: 'Święto Pracy', date: moment([year, 4, 1]).calendar()},
        {name: 'Święto Konstytucji 3 Maja', date: moment([year, 4, 3]).calendar()},
        {name: 'Święto Wojska Polskiego, Wniebowzięcie Najświętszej Maryi Panny', date:  moment([year, 7, 15]).calendar()},
        {name: 'Wszystkich Świętych', date:moment([year, 10, 1]).calendar()},
        {name: 'Święto Niepodległości', date: moment([year, 10, 11]).calendar()},
        {name: 'Boże Narodzenie (pierwszy dzień)', date: moment([year, 11, 25]).calendar()},
        {name: 'Boże Narodzenie (drugi dzień)', date: moment([year, 11, 26]).calendar()},
        {name: 'Wielkanoc', date: movingHolidays(year)[0]},
        {name: 'Poniedziałek Wielkanocny', date: movingHolidays(year)[1]},
        {name: 'Boże Ciało', date: movingHolidays(year)[2] },
        {name: 'Zesłanie Ducha Świętego', date: movingHolidays(year)[3]} ];
   
    
    
export { currentDate, weekdays, weekdaysShort, months, firstDayOfMonth, daysInMonth, staticHolidays, movingHolidays, dayOfWeek, holidayNamesPL, allHoliday };
