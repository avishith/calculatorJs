function btnClick(valu)
{
    console.log(valu)
    document.getElementById("screen").value+=valu;
}
function btnEql()
{
    var eql=document.getElementById("screen").value;
    document.getElementById("screen").value=eval(eql)
}
function ClrBtn()
{
    document.getElementById("screen").value='';
}
