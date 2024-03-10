



// var data="aniket";
// data="sjjsjsjjs";  // here data is const then its shows error
// console.log(data);


// const a=[{"name":"anikets",age:"10"},{"name":"om",age:"1000"}]
// console.table(a) // table is used for the data show clearly


// a.name="xyx"
// console.log(a)
// a["name"]="sjsjs"
// console.table(a)
// console.log("this is for name",a.name)
// console.log("this is for age",a.age)



// // finding the pertical age in the data
// const agepresent=a.some(item=>item.age==='10')
// console.log(agepresent)



// // finding the all name
// const targetAge = "10";
// const foundPerson = a.find(item => item.age === targetAge);
// if (foundPerson) {
//   console.log(`Name for age ${targetAge}:`, foundPerson.name);
// } else {
//   console.log(`No person found for age ${targetAge}.`);
// }


// //student objects

// const studentdata=[{name:"aniket kadam",rollnumber:1,class:10},
// {name:"om kadam",rollnumber:2,class:5},{name:"sakshi kadam",rollnumber:3,class:8},{name:"pratik kadam",rollnumber:4,class:10}]

// console.log("type of student",typeof studentdata)
// console.table(studentdata)


// // if name is om kadam change the student class
// studentdata.map((item)=>{
//     if(item.name==="om kadam"){
//         item.class=1000;
//     }
// })

// console.table(studentdata)
// // how to sort according to class or sorting in the objects
// studentdata.sort((a,b)=>a.class-b.class)
// console.log("sorting opertions")
// console.table(studentdata)


// // want to assign this age
// const age=[1,2,3,4]
// let count=0
// studentdata.forEach((item)=>{
//     item.age=age[count]
//     count=count+1

// })

// console.table(studentdata)

// const b={
//     "name":"aniket kadam",
//     "age":"1000",
//     a:function(){
//         console.log("this is object functions")
//     },

//     b:()=>{
//         console.log("function with the no name")
//     }
// }
// b.a();
// b.b();



// ///clouser


// function parentfucntions(parent){
//     console.log("this is parent functions")

//     function childfunctions(child){
//         console.log("this is child functions")
//     }

//     return {childfunctions}
// }

// const a=parentfucntions("parent");

// a.childfunctions("inside")



// function outer() {
//     const arrow = async () => {
//         console.log("Arrow function");
        
//         // Using Promise and await for the setTimeout
//         await new Promise(resolve => setTimeout(() => {
//             console.log("Timeout completed in arrow function");
//             resolve(); // Resolve the promise when the timeout is completed
//         }, 2000));

//         console.log("Arrow function is completed");
//     };

//     function normal() {
//         console.log("Normal function");

//         // Using regular setTimeout, no need for async/await
//         setTimeout(() => {
//             console.log("Timeout completed in normal function");
//         }, 2000);

//         console.log("Normal function is completed");
//     }

//     return { arrow, normal };
// }

// const functions = outer();

// // Calling the arrow and normal functions
// functions.arrow();
// functions.normal();




function fetchData1() {
    return new Promise(resolve => setTimeout(() => resolve("Data from API 1"), 1000));
}

function fetchData2() {
    return new Promise(resolve => setTimeout(() => resolve("Data from API 2"), 1500));
}

function fetchData3() {
    return new Promise((resolve, reject) => setTimeout(() => resolve("Error fetching data"), 2000));
}



function exampleusingapi(){
    const first=fetchData1();
    const second=fetchData2();
    const third=fetchData3();



    Promise.all([first,second,third])
    .then(data=>{
        console.log("the outpus is",data)
    })
    .catch((error)=>{
        console.error("At least one promise rejected:", error);
    })
}



exampleusingapi();