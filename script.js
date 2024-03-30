//! TASK 1
//! HOW TO COMPARE TWO JSON HAVE THE SAME PROPERTIES WITHOUT ORDER?
 
/* var obj1 = { name: "person1", age:5};
var obj2= {age:5, name: "person1"};


var flag=true;

if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            flag=false;
            
        }
    }
}
console.log(flag);
*/

//! TASK 2
//! API URL display all country flags

/* const request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload=function(){
    var data = request.response;
    var result = JSON.parse(data)

    for (var i=0; i<result.length;i++){
        console.log(result[i].flags.png);
        }
}
*/

//! TASK 3
//! print countries names, regions,sub-regions and population

/* const request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload=function(){
    var data = request.response;
    var result = JSON.parse(data)

    for (var i=0; i<result.length;i++){
        console.log(result[i].name.common,result[i].region,result[i].subregion,result[i].population);
        }
}
*/


   

