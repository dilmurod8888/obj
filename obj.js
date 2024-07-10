function cartObj() {
  let rand = randomNumbers(1, 2);
  const priceList = {
    1: {
      Lavash: {
        info: "big cheese",
        price: 22000,
      },
      "Hot-dog": {
        info: "mini",
        price: 15000,
      },
      Cola: {
        info: "1.5 L",
        price: 9000,
      },
    },
    2: {
      Sushi: {
        info: "max-roll",
        price: 32000,
      },
      Soya: {
        info: "200ml",
        price: 5000,
      },
    },
  };

  let UmumiyNarx = 0;
  let Curier = 10000;

  let isimlar = [];

  for (let i = 0; i < Object.keys(priceList[rand]).length; i++) {
    let kalitlarNomi = Object.keys(priceList[rand])[i];
    isimlar.push(kalitlarNomi);

    let infoLar = priceList[rand][kalitlarNomi];
    isimlar.push(infoLar.info);

    let narh = infoLar.price;
    UmumiyNarx = UmumiyNarx + narh;
  }

  let total = isimlar.join(" ");
  let menu = `Buyurtmangiz: ${total}.`
  let narx = ` Umumiy Narx ${ UmumiyNarx + Curier} сум kuryer narhi bilan `

  return `${menu + narx };`
}
function randomNumbers(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// cartObj();

console.log(cartObj());
