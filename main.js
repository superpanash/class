var array_name=[];

function submit(){
    student1=document.getElementById("name1").value;
    student2=document.getElementById("name2").value;
    student3=document.getElementById("name3").value;
    student4=document.getElementById("name4").value;

    array_name.push(student1);
    array_name.push(student2);
    array_name.push(student3);
    array_name.push(student4);

    console.log(array_name);

    document.getElementById("display").innerHTML=array_name;

    document.getElementById("sub_btn").style.display="none";

    document.getElementById("sor_btn").style.display="inline-block";
    
}

function sorting(){
    array_name.sort();

    console.log(array_name);

    document.getElementById("display").innerHTML=array_name;

}