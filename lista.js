var kaverit = [];

function lisaa(){
    var nimi = document.getElementById("text1").value;
    if (kaverit.length < 10){
        kaverit.push(nimi);
    }
    nayta();
}
function nayta(){
    document.getElementById('kaverit').innerHTML = '';

    for (var i=0; i < kaverit.length; i++){
        let num = i + 1;

        document.getElementById('kaverit').innerHTML += '<li>' + num + ". " + kaverit[i] + '</li>';
    }
}
