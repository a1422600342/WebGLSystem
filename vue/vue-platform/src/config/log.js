const print = (...info) => {
    let open = true
    if(open){
        console.log(new Date().Format("yyyy-MM-dd hh:mm:ss"), info)
    }
}

const alert = (info) => {
    let open = true
    if(open) {
        alert(new Date().Format("yyyy-MM-dd hh:mm:ss"),info)
    }
}

module.exports = {
    print
}