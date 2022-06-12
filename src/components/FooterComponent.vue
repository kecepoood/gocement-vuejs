<template>
    <footer>
        <div class="container">
            <ul class="sci">
                <li><a href="#"><img src="../assets/Icon-Instagram.png"></a></li>
                <li><a href="#"><img src="../assets/Icon-Facebook.png"></a></li>
                <li><a href="#"><img src="../assets/Icon-Youtube.png"></a></li>
            </ul>
            <p class="copyrightText">@2022 Andy Yuono Putra</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: "FooterComponent"
}
</script>

<style>
footer .container {
    /* position: absolute; */
    /* bottom: 0; */
    /* left: 0; */
    display: flex;
    justify-content: space-between;
    align-items: center;
}

footer ul {
    padding-left: 0;
}

.sci {
    position: relative;
    display: flex;
    align-items: center;
}

.sci li {
    list-style: none;
}

.sci li a {
    position: relative;
    margin: 10px 5px;
    display: inline-block;
    opacity: 0.8;
}

footer p {
    font-weight: 500;
    color: #777;
    letter-spacing: 1px;
}
</style>