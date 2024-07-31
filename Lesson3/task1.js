let namber,
      userMaxLimit = 100,
      userMinLimit = 1,
        error = 'Вы ввели некорректные данные!',
       lowError = `Вы ввели ${userMinLimit}`;

     namber = +prompt('Введите число от 1 до 100', '');
       
       if( isNaN(namber) || namber === 0 || namber > userMaxLimit ){
        alert(`${error}`);
        }else if( namber < userMinLimit){
        alert(`${lowError}`);
     };
     
   let even = 'четное значение',
    odd = 'нечетные значение';
    if( namber !== 0 ){ //исключаем 0 из вывода в консоль
      if( namber %2 === 0  ){
       alert( `${namber} ${even}` );
    }else{
    alert( `${namber} ${odd}` );
 }
   };