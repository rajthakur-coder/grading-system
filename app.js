console.log("welcome");
function total() {

    var subjects = document.getElementsByClassName("marks");


    for (let i = 0; i < subjects.length; i++) {
        if (subjects[i].value > 100) {
            alert("please Enter Marks Under 100");
            return;
        }
    }

    var total = 0;
    for (let i = 0; i < subjects.length; i++)
        total += parseInt(subjects[i].value);

    document.getElementsByClassName("Total1")[0].innerHTML = "Total marks is :" + total;

}

function avearge() {



  

    var subjects = document.getElementsByClassName("marks");


    for (let i = 0; i < subjects.length; i++) {
        if (subjects[i].value > 100) {
            alert("please Enter Marks Under 100");
            return;
        }
    }

    var total = 0;
    for (let i = 0; i < subjects.length; i++)
        total += parseInt(subjects[i].value);
    ave = parseFloat(total / 5);
    document.getElementsByClassName("Average1")[0].innerHTML = "your average marks is :" + ave;
}


function grades() {


    var subjects = document.getElementsByClassName("marks");


    for (let i = 0; i < subjects.length; i++) {
        if (subjects[i].value > 100) {
            alert("please Enter Marks Under 100");
            return;
        }
    }

    var total = 0;
    for (let i = 0; i < subjects.length; i++)
        total += parseInt(subjects[i].value);
    ave = parseInt(total / 5);

    if (ave == 100) {


        document.getElementsByClassName("Grade1")[0].innerHTML = "you grade is A++";
    } else if ( ave <= 99 && ave > 90 ) {

       document.getElementsByClassName("Grade1")[0].innerHTML = "you grade is A+";
       
    } else if ( ave <= 90 && ave > 80 ) {

        document.getElementsByClassName("Grade1")[0].innerHTML = "you grade is A";
        
     } 
    
    else if ( ave <= 80 && ave > 70) {
        document.getElementsByClassName("Grade1")[0].innerHTML = "you grade is B+";
    } else if ( ave <= 70 && ave > 60) {
        document.getElementsByClassName("Grade1")[0].innerHTML = "you grade is B";
    } else if ( ave <= 60 && ave > 50) {
        document.getElementsByClassName("Grade1")[0].innerHTML = "you grade is C+";
    } else if ( ave <= 50 && ave > 40) {
        document.getElementsByClassName("Grade1")[0].innerHTML = "you grade is C";
    } else {
        document.getElementsByClassName("Grade1")[0].innerHTML = "you grade Failed";
    }
}
