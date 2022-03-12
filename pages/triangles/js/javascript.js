function triangles(){
    let s1=Number(document.getElementById("1side").value);
    let s2=Number(document.getElementById("2side").value);
    let s3=Number(document.getElementById("3side").value);
    let shape;

    if (s1==s2 && s2==s3){
        shape="equilateral";
    } else if (s1==s2 || s2==s3 || s1==s3){
        shape="isosceles";
    } else {
        shape="scalene";
    }

    document.getElementById("solution").innerHTML="The triangle is: "+shape;
}