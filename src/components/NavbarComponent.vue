<template>
    <div class="menu">
        <div class="bg-orange">
            <div class="container">
                <div class="mx-auto">
                    <p class="text-top">
                        Inovasi Praktis Pesan Bahan Bangunan dan Sewa Alat Bangunan
                    </p>
                </div>
            </div>
        </div>
        <div class="bg-dark-2">
            <div class="container">
                <div class="bagi-dua">
                    <div class="kiri">
                        <div class="split">
                            <router-link to="/" class="logo"><img src="../assets/Logo-GoCement.png"></router-link>
                            <ul class="navigation">
                                <li><a href="#unggulan">Keunggulan Kami</a></li>
                                <li><a href="#produk-semen">Produk</a></li>
                                <li><a href="#cerita">Citra Pelanggan</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="kanan">
                        <div class="split">
                            <ul class="navigation">
                                <li><router-link to="/abangjago">Abang Jago</router-link></li>
                                <li><router-link to="/carapesan">Cara Pesan</router-link></li>
                                <li><router-link to="/faq">FAQ</router-link></li>
                                <li><router-link to="/karir">Karir</router-link></li>
                                <li><router-link to="/blog">Blog</router-link></li>
                                <li><router-link to="/kontak">Kontak Kami</router-link></li>
                            </ul>
                            <div class="button">
                                <a class="button-outline" href="#">Link</a>
                                <a class="button-fill" href="#">Link</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "NavbarComponent"
}
</script>

<style>

.bg-orange {
    background-color: #f37e21;
}

.bg-orange .container {
    z-index: 10;
}

.bg-dark-2 {
    background-color: #242424;
}

.text-top {
    font-weight: 500;
    font-size: 1.1em;
    color: black;
    font-family: "Poppins",sans-serif;
    /* transform: translateY(-2px); */
    padding: 5px 0;
}

p.text-top {
    margin-bottom: 0;
}

.bagi-dua {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.split {
    display: flex;
    align-items: center;
}

.split .logo img {
    max-width: 80px;
    transform: translateY(-20px);
    transition: .2s;
}

.split .logo img:hover {
    transform: scale(1.1);
}

.navigation {
    display: flex;
}

.navigation li {
    list-style: none;
    margin: 0px 10px;
}

ul.navigation {
    margin-bottom: 0;
}

.navigation li a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    font-size: 11px;
}

.navigation li a:hover {
    color: #f37e21;
}

.kanan .button {
    transform: translateY(4px);
}

.kanan .button a {
    text-decoration: none;
}

.kanan .button-fill {
    background-color: #2e2e2e;
    border-color: #2e2e2e;
    border-style: solid;
    font-size: 20px;
    font-weight: bold;
    color: #f37e21;
    padding-top: 30px;
    padding-bottom: 35px;
    padding-left: 30px;
    padding-right: 30px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    margin-left: 5px;
    transition: .3s;
}

.kanan .button-outline {
    /* background-color: #242424; */
    border-color: #f37e21;
    border-style: solid;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    padding-top: 30px;
    padding-bottom: 35px;
    padding-left: 30px;
    padding-right: 30px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    margin-left: 5px;
    transition: .3s;
}

.kanan .button-fill:hover {
    background-color: #000;
    border-color: #000;
}

.kanan .button-outline:hover {
    background-color: #f37e21;

}

</style>