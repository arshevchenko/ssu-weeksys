var getNumerator = function(){
    var dateNow = new Date(),
        year = dateNow.getMonth() < 8 ? dateNow.getFullYear() - 1 : dateNow.getFullYear(),
        dateFrom  = new Date(year, 8, 1),
        weekNumber = Math.round((dateNow - dateFrom) / (86400000 * 7));

      return weekNumber % 2 ? "знаменатель" : "числитель";
};

$("#ssu-weeksys").html(getNumerator());
