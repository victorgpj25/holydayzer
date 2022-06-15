import  express from "express";
import cors from "cors";

const server = express()

server.get("/holidays", (req, res) => {
    const holidays = [
        { date: "1/1/2022", name: "Confraternização mundial" },
        { date: "1/3/2022", name: "Carnaval" },
        { date: "4/17/2022", name: "Páscoa" },
        { date: "4/21/2022", name: "Tiradentes" },
        { date: "5/1/2022", name: "Dia do trabalho" },
        { date: "6/16/2022", name: "Corpus Christi" },
        { date: "9/7/2022", name: "Independência do Brasil" },
        { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
        { date: "11/2/2022", name: "Finados" },
        { date: "11/15/2022", name: "Proclamação da República" },
        { date: "12/25/2022", name: "Natal" }
      ];
    res.send(holidays);
})

server.get("/is-today-holiday", (req, res) => {
    const today = new Date();
    const holidays = [
        { date: "1/1/2022", name: "Confraternização mundial" },
        { date: "1/3/2022", name: "Carnaval" },
        { date: "4/17/2022", name: "Páscoa" },
        { date: "4/21/2022", name: "Tiradentes" },
        { date: "5/1/2022", name: "Dia do trabalho" },
        { date: "6/16/2022", name: "Corpus Christi" },
        { date: "9/7/2022", name: "Independência do Brasil" },
        { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
        { date: "11/2/2022", name: "Finados" },
        { date: "11/15/2022", name: "Proclamação da República" },
        { date: "12/25/2022", name: "Natal" }
    ];
    let isTodayHoliday;
    if (holidays.some(obj => obj.date === today.toLocaleDateString())) {
        isTodayHoliday = `Sim, hoje é ${holidays.filter(obj => obj.date === "12/25/2022")[0].name}`
    } else {
        isTodayHoliday = "Não, hoje não é feriado"
    }
    res.send(isTodayHoliday);
})

server.get('/holidays/:month', (req, res) => {
    const selectedMonth = parseInt(req.params.month);
    const holidays = [
        { date: "1/1/2022", name: "Confraternização mundial" },
        { date: "1/3/2022", name: "Carnaval" },
        { date: "4/17/2022", name: "Páscoa" },
        { date: "4/21/2022", name: "Tiradentes" },
        { date: "5/1/2022", name: "Dia do trabalho" },
        { date: "6/16/2022", name: "Corpus Christi" },
        { date: "9/7/2022", name: "Independência do Brasil" },
        { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
        { date: "11/2/2022", name: "Finados" },
        { date: "11/15/2022", name: "Proclamação da República" },
        { date: "12/25/2022", name: "Natal" }
    ];
    const selectedMonthHolidays = holidays.filter(obj => parseInt(obj.date.substring(0, obj.date.indexOf('/'))) === selectedMonth)
    res.send(selectedMonthHolidays);
  });

server.listen(4000);
server.use(cors())