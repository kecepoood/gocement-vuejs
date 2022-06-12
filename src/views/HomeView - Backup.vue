<template>
  <div class="isi">
    <div class="header">
      <img src="../assets/Top-Banner-Homepage.jpg" class="bg"/> 
      <div class="container">
        <div class="bagi-dua">
          <div class="info">
              <h2>STOP! Tinggalkan cara lama. Sekarang mau renovasi rumah jadi gampang banget. LEBIH PRAKTIS! LEBIH CEPAT!</h2>
              <p>Pakai <span>Aplikasi GoCement</span> ya!</p>
              <img src="../assets/Logo-Google-Play.png" class="logo-gplay"/>
          </div>
          <div class="karakter">
            <img src="../assets/Image-Pak-Cor-Home.png" class="logo-pakcor"/>
          </div>
        </div>
      </div>
    </div>
    <div class="gk-ribet">
      <div class="container">
          <div class="baner-ngecor">
            <h2>NGECOR ITU RIBET?!</h2>
            <div v-for="kontenCor in kontenNgecor" :key="kontenCor.id" class="konten-ngecor">
              <img :src="require('../assets/'+kontenCor.gambar)"/>
              <div class="centered">
                <p>{{ kontenCor.detail }}</p>
              </div>
            </div>
            <!-- <div class="konten-ngecor">
              <img src="../assets/Bg-Ngecor-Itu-Ribet-1.jpg"/>
              <div class="centered">
                <p>Belanja bolak balik di toko berbeda</p>
              </div>
            </div> -->
            <!-- <div class="konten-ngecor">
              <img src="../assets/Bg-Ngecor-Itu-Ribet-2.jpg"/>
              <div class="centered">
                <p>Lokasi sempit, gak ada tempat buat naruh barang</p>
              </div>
            </div> -->
            <!-- <div class="konten-ngecor">
              <img src="../assets/Bg-Ngecor-Itu-Ribet-3.jpg"/>
              <div class="centered">
                <p>Belum lagi cari tempat buat sewa alat</p>
              </div>
            </div> -->
          </div>
          
      </div>
    </div>

    <div class="video-ngecor">
      <div class="container">
        <h2>Kamu juga ngalamin hal yang sama?</h2>
      <p>Yuk simak video berikut ini</p>
      <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="100%" height="600" type="text/html" src="https://www.youtube.com/embed/nG-5hjaBugc?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"></iframe>
      </div>
      <div class="space"></div>
    </div>
    

    <div class="sekarang-waktunya">
      <div class="container">
        <div class="bagi-dua">
          <img src="../assets/Image-Sekarang-Waktunya.jpg" class="logo-mtosa"/>
          <div class="title-text">
            <img src="../assets/Sekarang-waktunya-beralih-ke-yang-lebih-canggih.png" class="logo-text"/>
            <div class="text">
              <p>Nggak perlu repot lagi pesan bahan bangunan atau cari sewa alat bangunan. Di aplikasi GoCement, semua kebutuhan ngecormu akan dipermudah dalam satu langkah!</p>
              <ul class="navigation">
                  <li>&#10004;<span>Lebih Baik</span></li>
                  <li>&#10004;<span>Lebih Cepat</span></li>
                  <li>&#10004;<span>Kualitas Terjamin</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="kenapa-gocement" id="unggulan">
      <div class="container">
        <h2>Kenapa sih harus <span>GoCement?</span></h2>
        <div class="bagi-dua">
          <div v-for="apk in apkGocement" :key="apk.id" class="cards">
            <img :src="require('../assets/'+apk.gambar)" class=""/>
            <div class="content">
              <h2>{{ apk.detail }}</h2>
            </div>
          </div>
        </div>
        <div class="bagi-dua">
          <div v-for="unggulan in keunggulan" :key="unggulan.id" class="cards">
            <img :src="require('../assets/'+unggulan.gambar)" class=""/>
            <div class="content">
              <h2>{{ unggulan.detail }}</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="space"></div>
    </div>
    
    <div class="gimana-gocement">
      <div class="container">
        <div class="sejajar">
          <h2>Gimana, <span>GoCement?</span> bikin ngecor jadi nggak ribet lagi kan? <button>Download Apps</button></h2>
          <img src="../assets/Image-Cak-Cor.png" class=""/>
        </div>
      </div>
    </div>

    <div class="produk-sni">
      <div class="container">
        <div class="bagi-dua">
          <div v-for="foto in fotoPekerja" :key="foto.id" class="no-style">
            <img :src="require('../assets/'+foto.gambar)" class=""/>
          </div>
        </div>
        <h2  id="produk-semen">Ini produk-produknya, semua berstandard SNI, ISO dan lulus uji tekanan ya...</h2>
        <div class="bagi-dua">
          <div v-for="semen in produkSemen" :key="semen.id" class="cards">
            <img :src="require('../assets/'+semen.gambar)" class=""/>
            <div class="content">
              <h2>{{ semen.nama }}</h2>
              <p>{{ semen.detail }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="space"></div>
    </div>

    <div class="apa-kelebihan">
      <div class="container">
        <h2>Apa sih kelebihannya?</h2>
        <div class="tabel">
          <img src="../assets/Tabel-GoCement.jpg" class=""/>
        </div>
      </div>
    </div>

    <div class="sewa-alat">
      <div class="container">
        <h2>Bisa sewa alat bangunan juga!</h2>
        <div class="bagi-dua">
          <div v-for="alat in alat" :key="alat.id" class="cards">
            <img :src="require('../assets/'+alat.gambar)" class=""/>
            <div class="content">
              <h2>{{ alat.nama }}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bingung-pakai">
      <div class="container">
        <div class="bagi-dua">
          <div class="cara-pesan">
            <h2>Bingung cara pakai aplikasinya? Tenang, simak langkah-langkahnya ya.</h2>
            <button>Cara Pesan</button>
          </div>
          <div class="faq">
            <h2>Masih ada pertanyaan? Cek FAQ kami yaa!</h2>
            <button>FAQ</button>
          </div>
        </div>
      </div>
    </div>

    <div class="cerita-pelanggan" id="cerita">
      <div class="container">
        <h2>Simak Cerita Pelanggan yang sudah pakai <span>Gocement!</span></h2>
        <div class="slider-gambar">
          <div v-for="ulasan in ulasanPelanggan" :key="ulasan.id" class="komentar">
            <img :src="require('../assets/'+ulasan.gambar)"/>
            <div class="text">
              <p>{{ ulasan.ulasan }}</p>
              <h3>{{ ulasan.nama }} - {{ ulasan.jabatan }}</h3>
            </div>
          </div>
          <!-- <div class="komentar">
            <img src="../assets/GoCement-Testimonial-Profile-Muhaimin.jpg"/>
            <div class="text">
              <p>GoCement sangat praktis, tidak memerlukan tempat yang luas untuk melakukan pengecoran. Buka karung, bahan dicampur, langsung cor.</p>
              <h3>Bapak Muhaimin - Project Owner</h3>
            </div>
          </div> -->
        </div>
      </div>
        
      
    </div>

    <div class="investor">
      <div class="container">
        <h2>Investor Kami</h2>
        <div class="bagi-dua">
          <img src="../assets/Beenext.png" class=""/>
          <img src="../assets/MDI-Ventures.png" class=""/>
          <img src="../assets/Ideosource-Logo.png" class=""/>
        </div>
      </div>
    </div>

    <div class="kebutuhan-bangunan">
      <div class="container">
        <div class="sejajar">
          <h2>Kebutuhan pembangunan proyekmu bisa teratasi dengan praktis dan gk ribet <button>Download Apps</button></h2>
          <img src="../assets/Cak-Cor-Cta.png" class=""/>
        </div>
      </div>
    </div>

    <!-- <div class="test">
      <div class="container">
        <h2>TEXT</h2>
      </div>
    </div> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  data() {
    return {
      kontenNgecor: [],
      apkGocement: [],
      keunggulan: [],
      fotoPekerja: [],
      produkSemen: [],
      alat: [],
      ulasanPelanggan: [],
      slide: 0,
      sliding: null
    }
  },
  methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
  },
  mounted() {
    fetch('http://localhost:3000/kontenNgecor')
      .then(res => res.json())
      .then(data => this.kontenNgecor = data)
      .catch(err => console.log(err.message)),

    fetch('http://localhost:3000/apkGocement')
      .then(res => res.json())
      .then(data => this.apkGocement = data)
      .catch(err => console.log(err.message)),

    fetch('http://localhost:3000/keunggulan')
      .then(res => res.json())
      .then(data => this.keunggulan = data)
      .catch(err => console.log(err.message)),

    fetch('http://localhost:3000/fotoPekerja')
      .then(res => res.json())
      .then(data => this.fotoPekerja = data)
      .catch(err => console.log(err.message)),

    fetch('http://localhost:3000/produkSemen')
      .then(res => res.json())
      .then(data => this.produkSemen = data)
      .catch(err => console.log(err.message)),

    fetch('http://localhost:3000/alat')
      .then(res => res.json())
      .then(data => this.alat = data)
      .catch(err => console.log(err.message)),

    fetch('http://localhost:3000/ulasanPelanggan')
      .then(res => res.json())
      .then(data => this.ulasanPelanggan = data)
      .catch(err => console.log(err.message))
  },
  components: {
    HelloWorld,
  },
};
</script>

<style>

.slider-gambar {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.komentar {
  display: flex;
  justify-content: center;
  width: 600px;
  text-align: left;
  margin: 20px 30px;
}

.komentar img {
  width: 180px;
  height: 180px;
}

.komentar .text {
  padding-left: 40px;
}

.komentar .text p {
  color: #242424;
  font-size: 1em;
}

.komentar .text h3 {
  font-size: 1.2em;
  font-weight: bold;
}

.isi {
  min-height: 100vh;
}

.header {
    position: relative;
    width: 100%;
}

.header .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -100;
}

.header .bagi-dua {
    position: relative;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 60px 0;
    text-align: left;
}
.header .info {
    position: relative;
    z-index: 1;
    max-width: 550px;
}

.header .karakter {
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  max-width: 400px;
  z-index: 1;
}

.header .karakter img {
  z-index: -10;
  width: 450px;
}

.header .info h2 {
  color: #fff;
  font-weight: bold;
  font-size: 2em;
  line-height: 1.4;
}

.header .info p {
  color: #fff;
  font-weight: bold;
  font-size: 1.4em;
  margin-top: 20px;
}

.header .info p span {
  color: #f37e21;
}

.gk-ribet,
.video-ngecor {
  background-color: #242424;
}

.gk-ribet h2 {
  color: #f37e21;
  font-weight: 600;
  /* letter-spacing: 0.8px; */
  padding-top: 30px;
  padding-bottom: 10px;
}

.baner-ngecor .konten-ngecor {
    position: relative;
    /* margin: 10px 0; */
    padding-bottom: 10px;
}

.konten-ngecor img {
  width: 100%;
}

.konten-ngecor .centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.konten-ngecor .centered p {
  margin-bottom: 0;
  color: #fff;
  font-weight: bold;
  font-size: 1.7em;
  text-shadow: 2px 2px #2e2e2e;
}

.video-ngecor h2 {
  color: #f37e21;
  font-weight: 600;
  font-size: 1.8em;
  /* letter-spacing: 0.8px; */
  padding-top: 30px;
  padding-bottom: 10px;
}

.video-ngecor p {
  color: #f37e21;
  font-size: 1.3em;
  padding-bottom: 20px;
}

.space {
  padding-bottom: 100px;
}

.sekarang-waktunya {
  position: relative;
  background-color: #df6e28;
  border-top-right-radius: 150px;
  border-bottom-right-radius: 150px;
  /* width: 100%; */
  /* min-height: 100px; */
  /* transform: translateY(-150px); */
}

.sekarang-waktunya::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 150px;
    background: #242424;
    z-index: -1;
}

.sekarang-waktunya .bagi-dua {
    position: relative;
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    /* padding: 60px 0; */
    /* text-align: left; */
}

.bagi-dua .logo-mtosa {
  width: 500px;
  padding: 15px 0;
}

.bagi-dua .logo-text {
  width: 500px;
  transform: translateY(-110px) translateX(-100px);
}

.title-text .text {
  transform: translateY(-90px);
  text-align: left;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
}

.text p {
  color: #fff;
  max-width: 500px;
  font-size: 1.1em;
}

.text .navigation {
  padding-left: 0;
}

.text .navigation li {
  color: #fff;
  font-size: 1.4em;
  font-weight: bold;
}

.text .navigation li span {
  padding-left: 5px;
}

/* <=======================================> */

.kenapa-gocement h2 {
    /* justify-content: center; */
    text-align: left;
    font-size: 1.8em;
    font-weight: bold;
    margin-top: 50px;
}

.kenapa-gocement h2 span {
  color: #f37e21;
}

.kenapa-gocement .bagi-dua {
  justify-content: center;
  align-items: unset;
}

.kenapa-gocement .bagi-dua .cards {
  padding: 10px 40px;
  justify-content: center;
}

.cards img {
  transform: scale(0.9);
}

.cards .content h2 {
  font-size: 1.1em;
  max-width: 250px;
  text-align: center;
  margin-top: 0;
}

.kenapa-gocement .space {
  padding-bottom: 30px;
}

.gimana-gocement {
  height: 275px;
}

.gimana-gocement .sejajar {
  position: relative;
  display: flex;
}

.sejajar h2 {
  font-size: 1.7em;
  font-weight: bold;
  width: 600px;
  text-align: left;
  line-height: 1.5;
}

.sejajar h2 span {
  color: #f37e21;
}

.sejajar h2 button {
  color: #fff;
  background-color: #f37e21;
  border: none;
  font-size: 14px;
  font-weight: bold;
  padding: 7px 20px;
  border-radius: 20px;
  margin-left: 10px;
  transition: .3s;
}

.sejajar h2 button:hover {
  color: #000;
}

.sejajar img {
  transform: scale(0.78) translateY(-50px);
}

.produk-sni:before {
  content: '';
    position: absolute;
    /* top: 0; */
    left: 0;
    width: 100%;
    height: 900px;
    background: #4b4b4b;
    border-top-left-radius: 30%;
    border-top-right-radius: 30%;
    z-index: -1;
}

.produk-sni .bagi-dua {
  justify-content: center;
  align-items: unset;
  /* padding-top: 30px; */
}

.produk-sni .bagi-dua img {
  /* padding: 10px 40px; */
  position: relative;
  justify-content: center;
  max-width: 350px;
  margin-top: -50px;
}

.produk-sni h2 {
    /* justify-content: center; */
    text-align: left;
    font-size: 1.8em;
    font-weight: bold;
    color: #fff;
    /* padding: 20px 30px 40px; */
    padding-bottom: 40px;
    line-height: 1.5;
}

.produk-sni .bagi-dua .cards {
  padding: 10px 40px;
  justify-content: center;
}

.produk-sni .content h2,
.produk-sni .content {
  text-align: left;
}

.produk-sni .content h2 {
  padding-bottom: 10px;
  margin-bottom: 0;
}

.produk-sni .content p {
  color: #fff;
  font-size: 16px;
}

.produk-sni .space {
  padding-bottom: 20px;
}

.apa-kelebihan {
  position: relative;
  justify-content: center;
  align-items: center;
}

.apa-kelebihan h2,
.sewa-alat h2,
.cerita-pelanggan h2 {
    text-align: left;
    font-size: 1.8em;
    font-weight: bold;
    padding-top: 50px;
    padding-bottom: 30px;
}

.apa-kelebihan .tabel {
  position: relative;
}

.apa-kelebihan .tabel::before {
  content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-image: url("../assets/Pak-Cor-Tabel.jpg");
    /* background-color: #242424; */
    width: 212px;
    height: 247px;
    transform: translateX(-125px) scale(0.7);
    z-index: -1;
}

.apa-kelebihan .tabel img {
  width: 90%;
}

.sewa-alat .bagi-dua img {
  width: 250px;
}

.bingung-pakai {
  background-color: #4b4b4b;
  position: relative;
  width: 100%;
  height: 250px;
  z-index: 1;
}

.bingung-pakai::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  border-top: 250px solid #242424;
	border-right: 50px solid transparent;
  border-bottom: 0px;
  border-left: 0px;
	width: 50%;
  z-index: -1;
}

.cara-pesan h2,
.faq h2 {
    text-align: left;
    font-size: 1.5em;
    font-weight: bold;
    width: 500px;
    color: #fff;
    padding: 50px 10px 20px;
}

.cara-pesan button,
.faq button {
  color: #fff;
  background-color: #f37e21;
  border: none;
  font-size: 14px;
  font-weight: bold;
  padding: 7px 20px;
  border-radius: 20px;
  margin-left: 10px;
  transition: .3s;
  display: flex;
}

.cara-pesan button:hover,
.faq button:hover {
  background-color: #fff;
  color: #000;
}

/* =============================================================================================== */

.cerita-pelanggan h2 span {
  color: #f37e21;
}

.size-image {
  height: 200px !important;
  width: 200px !important;
}





/* =============================================================================================== */

.investor h2 {
  font-size: 1.8m;
  font-weight: bold;
  padding: 50px 10px 0px;
}

.investor .bagi-dua {
  justify-content: center;
}

.investor .bagi-dua img {
  margin: 40px 30px 20px;
  width: 250px;
}

.kebutuhan-bangunan {
  background-color: #f37e21;
  margin: 50px 0 20px;
  /* height: 250px; */
}

.kebutuhan-bangunan .sejajar {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* height: 100%; */
}

.kebutuhan-bangunan .sejajar h2 {
  font-size: 1.7em;
  color: #fff;
  font-weight: bold;
  width: 800px;
  text-align: left;
  line-height: 1.5;
}

.kebutuhan-bangunan .sejajar button {
  color: #000;
  background-color: #fff;
}

.kebutuhan-bangunan .sejajar button:hover {
  color: #fff;
  background-color: #000;
}

.kebutuhan-bangunan .sejajar img {
  transform: unset;
  width: 200px;
  padding-top: 20px;
}

</style>