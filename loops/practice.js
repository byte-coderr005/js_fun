const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }
const bills = [22, 205, 176, 440,37,105,10,1100,86,52];

const tips = [];
const totals = [];
for(let i = 0; i < bills.length;i++)
{
const tip = calcTip(bills[i]); // Mevcut faturanın bahşişini hesapla.
tips.push(tip); //Bahşişi 'tips' dizisine ekle.
totals.push(tip + bills[i]); //Bahişiş + fatura toplamını 'totals' dizisine ekle.
}
console.log(bills,tips,totals);