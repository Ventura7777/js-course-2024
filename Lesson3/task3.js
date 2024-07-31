 let oldMaxLimit = 2024,
     oldMinLimit = 1915,
     error1 = 'Вы ввели некорректные данные!',
     error2 = `Вы так же ввели некоректно`;
        
    var  old = +prompt('Введите Ваш год рождения', '');  
     if( isNaN(old) || old === 0 || old > oldMaxLimit ){
     alert(`${error1}`);
     }else if( old < oldMinLimit){
    alert(`${error2}`);
     };
     if((old % 4 == 0) && (old % 100 !== 0)){
     alert("Високосный");
    }else{
    if(old % 400 == 0 ){
    alert("Високосный");
 }else{
alert("Не високосный");
};
    };
