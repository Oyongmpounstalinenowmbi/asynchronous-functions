        function runAsync(){
    console.log("Step 1: Start");

    setTimeout (() =>{ 
    console.log("Step 2: Processing (After 2 Seconds)");
    document.getElementById("msg").innerText = "Step 2: Proccessing (after 2 Seconds)";
    }, 2000);

    setTimeout(()=>{
    console.log("Step 3: Finished");
    document.getElementById("msg").innerText = "Step 3: Finished (After 4 Seconds)";
    },4000);    
}