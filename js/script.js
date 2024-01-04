function luas(){
    var alas = document.getElementById('alas').value;
    var tinggi = document.getElementById('tinggi').value;
    if(alas <= 0 || tinggi <= 0){
        window.alert("Nilai tidak valid, silakan masukkan bilangan di atas 0!")
        return;
    }

    var luas = alas * tinggi / 2;

    document.getElementById('hasil-luas').innerHTML = "L = 1/2 x AB x t<br/>L = 1/2 x " + alas + " x " + tinggi + "<br/>L = " + luas;
}

function keliling(){
    var s1 = parseFloat(document.getElementById('sisi1').value);
    var s2 = parseFloat(document.getElementById('sisi2').value);
    var s3 = parseFloat(document.getElementById('sisi3').value);

    if(s1 <= 0 || s2 <= 0 || s3 <= 0){
        window.alert("Nilai tidak valid, silakan masukkan bilangan di atas 0!")
        return;
    }

    var keliling = s1 + s2 + s3;

    document.getElementById('hasil-keliling').innerHTML = "K = AB + BC + CA<br/>K = " + s1 + " + " + s2 + " + " + s3 + "<br/>K = " + keliling;
}

function resetLuas(){
    document.getElementById('alas').value = "";
    document.getElementById('tinggi').value = "";
    document.getElementById('hasil-luas').innerHTML = "";
}

function resetKeliling(){
    document.getElementById('sisi1').value = "";
    document.getElementById('sisi2').value = "";
    document.getElementById('sisi3').value = "";
    document.getElementById('hasil-keliling').innerHTML = "";
}