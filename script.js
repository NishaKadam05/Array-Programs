//1.Array creation and initialization
let arr=[10,20,30,40,50];
document.write("Array is : "+arr)




//2.Array Manipulation
let arr1=[57,67,93,49,37];
arr1.push(40);
document.write("Array after push : "+arr1 +"<br>");

let fruits=["Apple","Mango","Grapes"];
fruits.unshift("Banana");
document.write("Array after unshift : "+fruits+"<br>");

let names=["Nisha","Sharmila","Mizba","Sariga","Annu"];
names.pop("Annu");
document.write("Array after pop : "+names+"<br>");

let roll=[42,38,53,11,52];
roll.shift();
document.write("Array after shift : "+roll);





//3.Array Searching
let numbers=[58,90,25,78,39,86];
document.write("indexOf of 39 is : "+numbers.indexOf(39)+"<br>");

let num=[37,64,92,68,50,35,92,75,89];
document.write("lastIndexOf of 92 is : "+num.lastIndexOf(92)+"<br>");
document.write("The number includes : "+num.includes(40)+"<br>");
document.write("The number is : "+num.find(numb => numb>50));




//4.Array Filtering
let input=[54,28,24,26,31,73,94,51,23,79];
let res=input.filter(OddEven);
document.write("The even numbers are : "+res+"<br>");
function OddEven(input){
    return input%2==0   
}



//5.Array Mapping
let vlue=[1,2,3,4,5];
let newValue=value.map(x=>x%2);
document.write("Array after mapping : "+newValue);



//6.Array Sorting
let arr2=[254,845,489,245,408,356];
document.write("Ascending Order : "+arr2.sort()+"<br>");
document.write("Array after reverse : "+arr2.reverse());

