text = "asfsa"

console.log(text)
const auta = ["Honda","BMW","Tesla"]


function ButtonDown()
{
    let val = document.querySelector('input').value;
    console.log(val)
    num =""
    while(val>0)
    {
        val /=2
        if(val > Math.floor(val))
        {
            num = "1" + num
            val = Math.floor(val)
        }
        else
        {
            num = "0" + num
        }
    }
    document.getElementById("out").innerHTML = num
}
