import "./App.css";
import Flower from "./components/Flower";

const data = [
  {
    name: "tulipán",
    color: "piros",
    price: 71,
    type: "cserepes",
    available: true,
    picture: "https://i1.wp.com/citygreen.hu/wp-content/uploads/2016/07/tulip%C3%A1nok-2.jpg?fit=960%2C720&ssl=1",
  },
  {
    name: "nefelejtcs",
    color: "világos-kék",
    price: 49,
    type: "kinti",
    available: false,
    picture: "https://utakerthez.hu/wp-content/uploads/2017/01/nefelejcs-vir%C3%A1g-k%C3%A9pek.jpg",
  },
  {
    name: "aranyeső",
    color: "sárga",
    price: 127,
    type: "kinti",
    available: true,
    picture: "https://m.blog.hu/ke/kertesz/image/aranyesos_poszt/forsythia.jpg",
  },
];

function App() {
  return (
    <div className="App">
      {data.map((flower, index) => (
        <Flower key={index} flower={flower} />
      ))}
    </div>
  );
}

export default App;
