const express = require("express");
const cors = require("cors");
const app = express();
const port = 3030;

//data
let flowers = [
  {
    name: "Tulipán",
    color: "piros, rózsaszín, sárga, narancs",
    price: 71,
    type: "cserepes",
    available: true,
    picture: "https://i1.wp.com/citygreen.hu/wp-content/uploads/2016/07/tulip%C3%A1nok-2.jpg?fit=960%2C720&ssl=1",
    sunneed: "félárnyék kedvelő",
  },
  {
    name: "Nefelejtcs",
    color: "világos-kék",
    price: 49,
    type: "kinti",
    available: false,
    picture: "https://utakerthez.hu/wp-content/uploads/2017/01/nefelejcs-vir%C3%A1g-k%C3%A9pek.jpg",
    sunneed: "fénykedvelő",
  },
  {
    name: "Aranyeső",
    color: "sárga",
    price: 127,
    type: "kinti",
    available: true,
    picture: "https://m.blog.hu/ke/kertesz/image/aranyesos_poszt/forsythia.jpg",
    sunneed: "fénykedvelő",
  },
  {
    name: "Hajnalka",
    color: "lila, kék",
    price: 188,
    type: "kinti",
    available: true,
    picture: "https://hobbikert.hu/images/magazin/disznovenyek/hajnalka_nem_viragzik_03.jpg",
    sunneed: "félárnyék kedvelő",
  },
  {
    name: "Orchidea",
    color: "fehér, rózsaszín, magenta",
    price: 249,
    type: "cserepes",
    available: false,
    picture: "https://viragbarat.hu/wp-content/uploads/Phalaenopsis-orchidea.jpg",
    sunneed: "fénykedvelő",
  },
  {
    name: "Klemátiszok",
    color: "halványlila",
    price: 115,
    type: "kinti",
    available: true,
    picture: "http://zoldstudio.viragcenter.hu/kert/klematizsok2.jpg",
    sunneed: "árnyékkedvelő",
  },
  {
    name: "Díszcsalán ",
    color: "vöröses",
    price: 115,
    type: "kinti",
    available: true,
    picture: "http://zoldstudio.viragcenter.hu/kert/coleus4.jpg",
    sunneed: "árnyékkedvelő",
  },
];

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello! Here, a flower for you <3 :)");
});

app.get("/flowers", (req, res) => {
  res.json({ flowers: flowers });
});

app.listen(port, (req, res) => {
  console.log(`Port is listening at http://localhost:${port}`);
});
