var myArr = [];
var tempArr = [];


function operation(data){
    if(myArr.length > 0){
        myArr.push(data);
        setValue(getValue() + data);

        let res = '';
        tempArr.forEach(x =>{
            res += x;
        });
        
        myArr.push(Number(res));
    }
}

function calculation(num){
    tempArr.push(num);
    setValue(getValue() + num);
}

function getValue(){
    return document.getElementById("result").value;
}

function setValue(data){
    document.getElementById("result").value = data;
}