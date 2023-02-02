const btn1 = document.getElementsByClassName('selectKey');

Array.from(btn1).forEach((element) => {
    element.addEventListener('click', (event) => {
        let val = event.target.innerHTML;
        let result = document.getElementById('display');
        if (val !== '=' && val !== 'CLEAR'){
            result.value += val;
        }
        else if (val ==='=') {
            result.value = eval(result.value);
        } 
        else {
            result.value = "";
        }
    });
});
