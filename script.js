// ======= Buildings
const house = document.querySelector('.house');
const farm = document.querySelector('.farm');
const waterTower = document.querySelector('.water_tower');
const factory = document.querySelector('.factory');
// ======= Resources
const bread = document.querySelector('.bread');
const wood = document.querySelector('.wood');
const water = document.querySelector('.water');
const metal = document.querySelector('.metal');

const resourceSpan = document.querySelectorAll('span')
const totalAmount = document.querySelector('h3')

const buildings_container = document.querySelector('.buildings_container')
const bottom_icons = document.querySelectorAll('.bottom_icons')

// Resource counters
let breadAmount = 0
let woodAmount = 0
let waterAmount = 0
let metalAmount = 0
let totalRsAmount = 50


totalAmount.innerHTML = `Total <br>${totalRsAmount}$`


// Bottom div with building opacity

function opacity(){
    if (totalRsAmount < 20){
        bottom_icons[0].style.opacity = '40%'
    } else {
        bottom_icons[0].style.opacity = '100%'
    }

    if (totalRsAmount < 30){
        bottom_icons[1].style.opacity = '40%'
    } else {
        bottom_icons[1].style.opacity = '100%'
    }

    if (totalRsAmount < 40){
        bottom_icons[2].style.opacity = '40%'
    } else {
        bottom_icons[2].style.opacity = '100%'
    }

    if (totalRsAmount < 50){
        bottom_icons[3].style.opacity = '40%'
    } else {
        bottom_icons[3].style.opacity = '100%'
    }
}

opacity()

// Clicks on Buildings
{
    house.onclick = () => {
        if (totalRsAmount < 20) return

        buildings_container.innerHTML += '<div class="building_box">🏠<img src="https://static.vecteezy.com/system/resources/thumbnails/022/030/468/small/3d-coin-dollar-gold-png.png" alt="" class="coins anim1"><img src="https://png.pngtree.com/png-vector/20240226/ourmid/pngtree-3d-illustration-game-coin-without-background-png-image_11880013.png" alt="" class="coins anim2"><img src="https://cdn4.iconfinder.com/data/icons/game-ui-set-3/96/Coin_gold-512.png" alt="" class="coins anim3"></div>'
        totalRsAmount -= 20
        totalAmount.innerHTML = `Total <br>${totalRsAmount}$`

        setInterval(() => {
            breadAmount += 1
            resourceSpan[0].innerHTML = breadAmount
        }, 2000);

        opacity()
    }

    farm.onclick = () => {
        if (totalRsAmount < 30) return

        buildings_container.innerHTML += '<div class="building_box">🚜<img src="https://static.vecteezy.com/system/resources/thumbnails/022/030/468/small/3d-coin-dollar-gold-png.png" alt="" class="coins anim1"><img src="https://png.pngtree.com/png-vector/20240226/ourmid/pngtree-3d-illustration-game-coin-without-background-png-image_11880013.png" alt="" class="coins anim2"><img src="https://cdn4.iconfinder.com/data/icons/game-ui-set-3/96/Coin_gold-512.png" alt="" class="coins anim3"></div>'
        totalRsAmount -= 30
        totalAmount.innerHTML = `Total <br>${totalRsAmount}$`

        setInterval(() => {
            woodAmount += 1
            resourceSpan[1].innerHTML = woodAmount
        }, 3000);

        opacity()
    }


    waterTower.onclick = () => {
        if (totalRsAmount < 40) return

        buildings_container.innerHTML += "<div class=\"building_box\">💧<img src=\"https://static.vecteezy.com/system/resources/thumbnails/022/030/468/small/3d-coin-dollar-gold-png.png\" alt=\"\" class=\"coins anim1\"><img src=\"https://png.pngtree.com/png-vector/20240226/ourmid/pngtree-3d-illustration-game-coin-without-background-png-image_11880013.png\" alt=\"\" class=\"coins anim2\"><img src=\"https://cdn4.iconfinder.com/data/icons/game-ui-set-3/96/Coin_gold-512.png\" alt=\"\" class=\"coins anim3\"></div>"
        totalRsAmount -= 40
        totalAmount.innerHTML = `Total <br>${totalRsAmount}$`

        setInterval(() => {
            waterAmount += 1
            resourceSpan[2].innerHTML = waterAmount
        }, 4000);

        opacity()
    }

    factory.onclick = () => {
        if (totalRsAmount < 50) return

        buildings_container.innerHTML += '<div class="building_box">🏗️<img src="https://static.vecteezy.com/system/resources/thumbnails/022/030/468/small/3d-coin-dollar-gold-png.png" alt="" class="coins anim1"><img src="https://png.pngtree.com/png-vector/20240226/ourmid/pngtree-3d-illustration-game-coin-without-background-png-image_11880013.png" alt="" class="coins anim2"><img src="https://cdn4.iconfinder.com/data/icons/game-ui-set-3/96/Coin_gold-512.png" alt="" class="coins anim3"></div>'
        totalRsAmount -= 50
        totalAmount.innerHTML = `Total <br>${totalRsAmount}$`

        setInterval(() => {
            metalAmount += 1
            resourceSpan[3].innerHTML = metalAmount
        }, 5000);

        opacity()
    }
}


// Clicks on Resources
{
    bread.onclick = () => {
        totalRsAmount += breadAmount
        totalAmount.innerHTML = `Total <br>${totalRsAmount}$`

        breadAmount = 0
        resourceSpan[0].innerHTML = breadAmount
        opacity()
    }

    wood.onclick = () => {
        totalRsAmount += woodAmount * 2
        totalAmount.innerHTML = `Total <br>${totalRsAmount}$`

        woodAmount = 0
        resourceSpan[1].innerHTML = woodAmount
        opacity()
    }

    water.onclick = () => {
        totalRsAmount += waterAmount * 3
        totalAmount.innerHTML = `Total <br>${totalRsAmount}$`

        waterAmount = 0
        resourceSpan[2].innerHTML = waterAmount
        opacity()
    }

    metal.onclick = () => {
        totalRsAmount += metalAmount * 4
        totalAmount.innerHTML = `Total <br>${totalRsAmount}$`

        metalAmount = 0
        resourceSpan[3].innerHTML = metalAmount
        opacity()
    }
}































