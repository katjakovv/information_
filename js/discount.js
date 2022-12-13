function addition() {
   var a = parseInt(document.getElementById('a').value)
   var b = parseInt(document.getElementById('b').value)

   if (isNaN(a) == true) a = 0
   if (isNaN(b) == true) b = 0

   var c = (a / 100) * b

   document.getElementById('result').innerHTML = 'Учитывая скидку ' + b + '%' + ' вы оплачиваете → ' + c
}

console.log(tallage + '% от ' + money + ' будет ' + result)
