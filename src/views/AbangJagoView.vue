<template>
  <div class="isi">
    <div class="header">
      <img src="../assets/top-Banner-Abang-Jago.jpg" class="bg"/> 
      <div class="container">
        <div class="info-abang">
            <h2>Mau kerja yang <span>PASTI UNTUNG, LUR?</span></h2>
            <h1>Yuk jadi ABANG JAGO!</h1>
            <button>Daftar jadi Abang Jago</button>
            <p>Apa itu ABANG JAGO?<br/>Scroll ke bawah ya</p>
        </div>
      </div>
    </div>
    <div class="header">
      <img src="../assets/Background-About-Abang-Jago-1.jpg" class="bg"/> 
      <div class="container">
        <div class="abang-jago-itu">
            <img src="../assets/Abang-Jago-Orang.png"/>
            <div class="text-abang-jago">
                <h2>Abang Jago itu<br>Anak Bangunan<br>Jagoan GoCement</h2>
                <p>ABANG JAGO adalah program keagenan GoCement. Dengan menjadi ABANG JAGO, kamu bisa mendapatkan penghasilan hingga jutaan rupiah hanya dengan mengajak teman kamu menjadi mitra dan bertransaksi di aplikasi GoCement!</p>
            </div>
        </div>
      </div>
      <div class="container">
        <div class="kenapa-abang-jago">
            <h2>Kenapa harus jadi Abang Jago?<br><span>Kenapa nggak??</span><button>Daftar jadi Abang Jago</button></h2>
            <div class="bulat">
                <img src="../assets/Komisi-10-1.png"/>
                <img src="../assets/Tanpa-Modal-1.png"/>
                <img src="../assets/Waktu-Flexibel-1.png"/>
            </div>
            <img src="../assets/Gambar-Tukang.png" class="tukang"/>
            <div class="space"></div>
        </div>
        
      </div>
    </div>
    <div class="jadi-abang-jago">
        <div class="container">
            <h2>Mau jadi Abang Jago,<br>caranya gampang banget!!!</h2>
            <div class="bagi-dua">
                <div class="cards">
                    <img src="../assets/Step-1.jpg" class=""/>
                    <p>Download dan install aplikasi GoCement di androidmu!</p>
                </div>
                <div class="cards">
                    <img src="../assets/Step-2.jpg" class=""/>
                    <p>Ajak pemilik proyekmu untuk beli kebutuhan ngecor pakai GoCement, jangan lupa kasih kode referalmu ya!</p>
                </div>
                <div class="cards">
                    <img src="../assets/Step-3.jpg" class=""/>
                    <p>Jangan lupa untuk berbagi info ke dulur-dulur lainnya untuk jadi ABANG JAGO!</p>
                </div>
            </div>
            <h2>Ayo Lur sukses bareng GoCement!!</h2>
        </div>
        <div class="tertarik-abang-jago">
            <div class="container">
                <img src="../assets/Background-Cta-Abang-Jago-Text.png" class="cta-text"/>
                <div class="text-cta">
                    <h2>Mau tau duit yang bakalan didapat? Butuh panduan lebih lanjut?</h2>
                    <p>Klik link dibawah ini agar Ayu Kring-Kring bisa membantumu.</p>
                    <button>Ya, saya tertarik jadi Abang Jago</button>
                </div>
            </div>
            <div class="space"></div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "AbangJagoView",
}
</script>

<style>

.header .info-abang {
    text-align: left;
    width: 600px;
}

.info-abang h2 {
    width: 400px;
    color: #fff;
    font-weight: bold;
    line-height: 1.3;
    font-size: 2em;
    padding-top: 50px;
}

.info-abang h2 span {
    font-size: 1.2em;
}

.info-abang h1 {
    color: #f37e21;
    text-shadow: 3px 3px 2px#242424;
    font-weight: bold;
    padding: 0 0 10px;
}

.info-abang button {
    background: #242424;
    color: #fff;
    border: none;
    padding: 10px 25px;
    border-radius: 20px;
    font-weight: bold;
    letter-spacing: 1.1px;
    transition: .3s;
    margin: 0 0 20px;
}

.info-abang button:hover {
    transform: scale(1.05);
}

.info-abang p {
    color: #fff;
    font-size: 1.15em;
    line-height: 1.8;
    padding: 30px 0 50px;
    margin-bottom: 0;
}

.abang-jago-itu {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 50px 0;
}

.abang-jago-itu img {
    width: 400px;
    margin-right: 50px;
}

.abang-jago-itu .text-abang-jago {
    text-align: left;
    width: 500px;
    color: #000;
}

.text-abang-jago h2 {
    font-weight: bold;
    line-height: 1.5;
    letter-spacing: 1px;
    
}

.text-abang-jago p {
    padding: 20px 0;
    line-height: 1.8;
    width: 500px;
}

.kenapa-abang-jago {
    position: relative;
    text-align: left;
    color: #000;
    padding: 0 0 30px;
}

.kenapa-abang-jago h2 {
    font-weight: bold;
    line-height: 1.5;
}

.kenapa-abang-jago h2 span {
    color: #fff;
}

.kenapa-abang-jago button,
.text-cta button {
    margin-left: 20px;
    color: #fff;
    background: #000;
    border: none;
    border-radius: 25px;
    padding: 10px 20px;
    font-size: 0.5em;
    font-weight: bold;
    transition: .3s;
}

.kenapa-abang-jago button:hover,
.text-cta button:hover {
    transform: scale(1.05);
}

.bulat {
    width: 800px;
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
}

.bulat img {
    width: 250px;
    transition: .3s;
}

.bulat img:hover {
    transform: scale(1.1);
}

.kenapa-abang-jago .tukang {
    width: 500px;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
    transform: translateX(50px);
}

.kenapa-abang-jago .space {
    padding-bottom: 80px;
}

.jadi-abang-jago {
    background: #151515;
    width: 100%;
}

.jadi-abang-jago h2 {
    color: #fff;
    font-weight: bold;
    padding: 50px 0 30px;
}

.jadi-abang-jago .bagi-dua {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.jadi-abang-jago .cards {
    width: 400px;
    height: 350px;
}

.jadi-abang-jago .cards img {
    width: 330px;
    transform: unset;
    padding: 0 20px;
}

.jadi-abang-jago .cards p {
    width: 300px;
    text-align: left;
    margin: auto;
    padding-left: 60px;
    padding-top: 20px;
    color: #fff;
}

.tertarik-abang-jago {
    background-image: url("../assets/Background-Cta-Abang-Jago.png");
    width: 100%;
    position: relative;
    z-index: 10;
}

.tertarik-abang-jago img {
    padding: 10px 0;
    width: 700px;
    position: absolute;
    z-index: -1;
    left: 50%;
    transform: translateX(-50%);
}

.text-cta {
    width: 500px;
    margin: auto;
    padding-left: 150px;
    text-align: left;
}

.text-cta h2 {
    font-size: 1.6em;
    line-height: 1.5;
    padding-bottom: 20px;
    margin-bottom: 0;
}

.text-cta p {
    color: #fff;
}

.text-cta button {
    margin-left: 0;
    font-size: 1.1em;
}

.tertarik-abang-jago .space {
    padding-bottom: 80px;
}

</style>