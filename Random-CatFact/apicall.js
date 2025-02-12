let url="https://catfact.ninja/fact";
// fetch(url)
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log("data1=",data.fact);
//     return fetch(url);
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data2)=>{
//     console.log("data2= ", data2.fact);
// })
// .catch((err)=>{
//     console.log("ERROR---",err);
// });
// console.log("I come before the data because i can not stop to anyone!");


// Using sync and await keyword 

// async function getfacts() {
//    try{
//     let res=await fetch(url);
//     let data3=await res.json();
//     console.log(data3.fact);
    
//     let res2=await fetch(url);
//     let data4=await res2.json();
//     console.log(data4.fact);
//    } catch(e){
//     console.log("error- ", e);
//    }
// }
// getfacts();

// changing 
async function getFacts() {
    try {
        for (let i = 1; i <= 4; i++) {
            let res = await fetch(url);
            let data = await res.json();
            document.getElementById(`fact${i}`).innerText = data.fact;
        }
    } catch (e) {
        console.log("Error fetching data: ", e);
    }
}

getFacts();

document.getElementById("refresh-btn").addEventListener("click", function () {
    window.location.reload(); // Reload the page on button click
});