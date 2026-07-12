const dayMap = {

    Lunes: "Monday",
    Martes: "Tuesday",
    Miercoles: "Wednesday",
    Jueves: "Thursday",
    Viernes: "Friday",
    Sabado: "Saturday",
    Domingo: "Sunday",

};

/**
 * Convierte:
 * 10:00 am -> 10:00
 * 7:00 pm -> 19:00
 */

function convertHour(hour) {

    let [time, period] = hour.split(" ");

    let [h, m] = time.split(":").map(Number);

    if (period.toLowerCase() === "pm" && h !== 12) {

        h += 12;

    }

    if (period.toLowerCase() === "am" && h === 12) {

        h = 0;

    }

    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;

}

/**
 * Convierte el horario de location.js
 * al formato de Schema.org
 */

export function buildOpeningHours(schedule) {

    return schedule.map(item => {

        const [open, close] = item.hours.split(" - ");

        return {

            "@type": "OpeningHoursSpecification",

            dayOfWeek: item.days.map(day => dayMap[day]),

            opens: convertHour(open),

            closes: convertHour(close),

        };

    });

}