const calcResult = ()=>{

    let maths = document.getElementById('maths').value;
    let phys = document.getElementById('phys').value;
    let eng = document.getElementById('eng').value;
    let chem = document.getElementById('chem').value;
    let comp = document.getElementById('comp').value;

    let grade='';
    let res = parseFloat(maths)+parseFloat(phys)+parseFloat(eng)+parseFloat(chem)+parseFloat(comp);

    alert("Your Total marks is " +res);

    let per = (res/500)*100;
    if(per <= 100 && per >=80){
        grade="A";
    }if  (per <= 79 && per >=60) {
        grade="B";
    }if(per <= 59 && per >=40) {
        grade="C";
    }else{
        grade="F"
    }

    if(per<=39){
        document.getElementById('showResult').innerHTML =`Out of 500 Your score is ${res}, Percentage ${per}% and Grade ${grade} </br> And You are Fail. </br> Better luck Next Time !`;
    }else{
        document.getElementById('showResult').innerHTML =`Out of 500 Your score is ${res}, Percentage ${per}% and Grade ${grade} </br> And You are Pass. </br> Congratulations!`;
    }
}