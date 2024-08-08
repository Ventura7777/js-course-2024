let userValue = Number(prompt("Введіть номер от 1 до 3. 1 -камінь, 2- ножниці, 3- бумага"));
let programValue = Math.ceil(Math.random() * 3);
alert(`Номер компютера ${programValue}`)
 if (userValue === "1" && programValue >1  || userValue === 2 && programValue ===3) {
    
        alert( "Ви чемпіон! ");
    }
    else if (userValue === 3 && programValue < 3 || userValue ===2 && programValue ===1) {
        alert("Програв")
    }else {
        alert("Победила дружба")
    }



    
  
