var getNumerator = function(){
    var dateNow = new Date(),
        year = dateNow.getMonth() < 9 ? dateNow.getFullYear() - 1 : dateNow.getFullYear(),
        dateFrom  = new Date(year, 8, 1),
        weekNumber = Math.round((dateNow - dateFrom) / (86400000 * 7));

      if(weekNumber % 2){
        return "denominator";
      }else{
        return "numerator";
      }
};

$("#ssu-weeksys").html(getNumerator());

