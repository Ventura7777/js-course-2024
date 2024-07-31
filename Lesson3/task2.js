let now = new Date();
    console.log( now );
    function getWeekDay(date) {
    let days = ['0', '1', '2', '3', '4', '5', '6'];
      
    return days[date.getDay()];
};
let date = new Date(); // 
console.log( getWeekDay(date)); 
