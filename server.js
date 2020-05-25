let express = require("express");
let cors = require("cors");
let bodyParser = require("body-parser");

let app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(cors());

let products = [
  {
    id: 1,
    name: "Logitech G332 SE Gaming Headset",
    price: 99,
    description: "A very nice headset.",
    stock: 20,
    imageUrl:
      "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_70965959/mobile_786_587_png/LOGITECH-G332-SE---Gaming-Headset-%28Schwarz-Weiss%29",
  },
  {
    id: 2,
    name: "Razer Naga",
    price: 149,
    description: "A very nice mouse.",
    stock: 40,
    imageUrl:
      "https://i0.wp.com/gaminggadgets.de/wp-content/uploads/2013/07/razer-naga-2014-left-03s__store_gallery.png?ssl=1",
  },
  {
    id: 3,
    name: "Razer Chroma V2",
    price: 199,
    description: "A very nice keyboard.",
    stock: 10,
    imageUrl:
      "https://d4kkpd69xt9l7.cloudfront.net/sys-master/images/h68/h74/8827313946654",
  },
  {
    id: 4,
    name: "Bose Sound Touch 10",
    price: 129,
    description: "A very nice speaker.",
    stock: 5,
    imageUrl:
      "https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/speakers/soundtouch_10_wireless_music_system/product_silo_images/st_10_black_EC_hero.psd/_jcr_content/renditions/cq5dam.web.320.320.png",
  },
  {
    id: 5,
    name: "Sony WH1000MX3",
    price: 199,
    description: "A very nice speaker.",
    stock: 5,
    imageUrl:
      "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_70925429/mobile_786_587_png/SONY-WH-1000XM3---Bluetooth-Kopfh%C3%B6rer-%28Over-ear--Schwarz%29",
  },
  {
    id: 6,
    name: "Sony Alpha 6300",
    price: 559,
    description: "A very nice speaker.",
    stock: 5,
    imageUrl:
      "https://w7.pngwing.com/pngs/775/150/png-transparent-digital-slr-sony-alpha-6300-sony-%CE%B16000-camera-lens-mirrorless-interchangeable-lens-camera-camera-lens-lens-camera-lens-photography.png",
  },
  {
    id: 7,
    name: "Asus ROG Swift PG279Q",
    price: 399,
    description: "A very nice speaker.",
    stock: 5,
    imageUrl:
      "https://www.asus.com/ch-de/Monitors/ROG-SWIFT-PG279Q/websites/global/products/yUqf81thTG70si2c/images/PG27_net/PG27.net.Beauty_00000.png",
  },
  {
    id: 8,
    name: "Blue Yeti X",
    price: 99,
    description: "A very nice speaker.",
    stock: 5,
    imageUrl:
      "https://blog.notebooksbilliger.de/wp-content/uploads/2019/09/04-Blue-Yeti-X-3Qtr-Left.png",
  },
];

app.get("/products", (req, res) => {
  res.send(products).status(200);
});

app.post("/add-product", (req, res) => {
  products.push({
    name: req.body.name,
    price: req.body.price,
    imageUrl: req.body.url,
    description: req.body.desc,
  });
  res.send().status(200);
});

app.listen(5000, () => {
  console.log("WebShop API listening on port 5000!");
});
