const weekDays = [

    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
];

/**
 * Convierte:
 * 10:00 am -> 600
 * 7:30 pm -> 1170
 */

function convertToMinutes(time){

    let [hourMinute, period] = time.split(" ");

    let [hour, minutes] = hourMinute.split(":").map(Number);

    if(period.toLowerCase() === "pm" && hour !== 12){
        hour +=12;
    }
    if (period.toLowerCase() === "am" && hour === 12) {
    hour = 0;
}

  return hour * 60 + minutes;
}

export function getBusinessStatus(schedule){
    const now = new Date();

    const today = weekDays[now.getDay()];

    //console.log("Hoy es: ", today);

    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    //Buscar el Horario correspondiente al dia actual 

    const todaySchedule = schedule.find(item => item.days.includes(today));

    //console.log("Horario encontrado: ", todaySchedule);

    if(!todaySchedule){
        return {
            isOpen: false,
            message: "Hoy no hay servicio."
        };
    }

    const [open, close] = todaySchedule.hours.split(" - ");

    const openMinutes = convertToMinutes(open);

    const closeMinutes = convertToMinutes(close);

    //console.log("Hora de apertura:", open);
    //console.log("Hora de cierre:", close);

    //console.log("OpenMinutes:", openMinutes);
    //console.log("CloseMinutes:", closeMinutes);

    //console.log("Hora actual:", currentMinutes);


                //NEGOCIO ABIERTO
    if(currentMinutes >=openMinutes && currentMinutes < closeMinutes){

        return{

            isOpen: true,
            message: `Abierto • Cierra a las ${close}`
        }
    }

            //TODAVIA NO ABRE HOY
    if(currentMinutes < openMinutes){

        return{

            isOpen: false,
            message: `Cerrado • Abre hoy a las ${open}`
        }
    }

    

    //Si esta cerrado buscar el siguiente horario 

    const todayIndex = weekDays.indexOf(today);

    for(let i= 1; i<= 7; i++){
        const nextDay = weekDays[(todayIndex + i)%7];

        const nextSchedule = schedule.find(item => item.days.includes(nextDay));

        if(nextSchedule){
            const nextOpen = nextSchedule.hours.split(" - ")[0];

            return {

                isOpen: false,

                message: 
                i === 1
            ? `Cerrado • Abre mañana a las ${nextOpen}`
            : `Cerrado • Abre el ${nextDay} a las ${nextOpen}`
            }
        }
        
        //Respaldo (por si algun dia se eliminan los horarios)

        return{

            isOpen: false,
            message: "Actualmente cerrado."
        }
}
}