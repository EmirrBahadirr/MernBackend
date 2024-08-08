const express = require("express");// express kütüphanemizi kullandık
const app = express();// express ile uygulamamız artık bu app değişkeni
const bcrypt = require("bcryptjs");// şifreler için
require('./db/database');// database imize buradan erişiyoruz
app.use(express.json()); // json dosyalarını yönetmek için arkaplanda çalışan bir callback;


const userRouter = require('./routers/user');// user işlemlerimizi bu router üzerinden yöneteceğiz.


app.use(userRouter); // router bölümünde oluşturduğum user dosyasını uygulamam kullanacak;

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello World.");
});

app.listen(PORT, () => {
    console.log("Server is up on port :" + PORT);
});

