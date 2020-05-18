let express = require("express");
let cors = require("cors");
let app = express();

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
];

app.get("/products", (req, res) => {
  res.send(products).status(200);
});

app.listen(5000, () => {
  console.log("WebShop API listening on port 5000!");
});
