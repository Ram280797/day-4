//DAY 4 TASK
//1.	how to compare two JSONhave the same properties without order




         //var obj1= {name:"Person 1",age:5};
         //var obj2={age:5,name:"Person 1"};
         //JSON.stringify(obj1) === JSON.stringify(obj2)
         //console.log(obj1,obj2);
  
     
         const xhr = new XMLHttpRequest();

         xhr.open("GET","https://restcountries.com/v2/all");
         xhr.send();
         xhr.responseType="json";

         xhr.onload= function displayResult(){
         const country= xhr.response;      
console.log(country);

}
