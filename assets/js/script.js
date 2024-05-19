function mostrar_hora(){
    let data = new Date()
    let h = data.getHours()
    let m = data.getMinutes()
    let s = data.getSeconds()

    if ((h >= 0)&&(h <= 5)){
        document.body.style.backgroundImage = "linear-gradient(90deg, #800080, #7400b8, #502dc1)"
    } if ((h >= 6)&&(h <= 11)){
        document.body.style.backgroundImage = "linear-gradient(90deg, #fff589, #f4ca4c, #fb9700)"
    } if ((h >= 12)&&(h <= 17)){
        document.body.style.backgroundImage = "linear-gradient(90deg, #ffae00, #ff4d11, #fb1900)"
    }  if (h >= 18) {
        document.body.style.backgroundImage = "linear-gradient(90deg, #800080, #7400b8, #502dc1)"
    }

    if (h < 10){
        h = "0" + h
    } if (m < 10){
        m = "0" + m
    } if (s < 10){
        s = "0" + s
    }

    document.getElementById("hora").innerHTML = `${h}:${m}:${s}`
    setInterval("mostrar_hora()", 1000)
}
