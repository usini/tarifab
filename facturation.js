function time_template(id, obj) {
    machines[id].timer = 0;
    template_html = `
    <div>
        <details>
            <summary>🔧 ${obj.name} - 👱<span id="user_${id}">?</span> - ⌚<span id="timer${id}">00:00:00</span> - 💲<span id="price${id}">0</span>€</summary>
            <label>Utilisateur</label><input id="userinput_${id}" onkeyup='user_text("${id}")' type="text">
            <label>Temps</label><input id="timeinput${id}" onchange='timer_text("${id}")' placeholder="00:00" type="text">
            <button id="start${id}" onclick='${obj.start}(${id})'>Démarrer</button>
            <button id="reset${id}" onclick='${obj.reset}(${id})'>Reset</button>    
        </details>
    </div>
    `
    return template_html
}

function count_template(id, obj) {
    machines[id].timer = 0;
    template_html = `
    <div>
        <details>
            <summary>🔧 ${obj.name} - 👱<span id="user_${id}">?</span> - 🔴<span id="count${id}">0</span> <span>${obj.value}</span> - 💲<span id="price${id}">0</span>€</summary>
            <label>Utilisateur</label><input id="userinput_${id}" onkeyup='user_text("${id}")' type="text">
            <label>${obj.value}</label><input id="countinput${id}" onchange='count_text("${id}")' placeholder="10" type="text">
        </details>
    </div>
    `
    return template_html
}

function embroiderer_counter(id){
    count = document.getElementById("count"+id).innerHTML;
    if(count < 1000){
        price = 0.5
    } else {
        price = Math.ceil(count/1000) * 0.5;
    }
    document.getElementById("price" + id).innerHTML = price;
    
}   

function time_start(id) {
    if (machines[id].status) {

        machines[id].status = false;
        document.getElementById("start" + id).innerHTML = "Démarrer";
        clearInterval(machines[id].interval);
    } else {

        machines[id].status = true;
        document.getElementById("start" + id).innerHTML = "Arrêter";
        machines[id].interval = setInterval(function () {
            machines[id].timer++;
            machines[id].counter(id);
        }, 1000);
    }
}

function laser_counter(id) {
    actual_time = machines[id].timer
    document.getElementById("timer" + id).innerHTML = countTimer(actual_time);
    price = 0;
    if (actual_time >= (1 * 3600) && actual_time < (4 * 3600)) {
        price = Math.round(actual_time / 3600) * 15;
    }
    else if (actual_time >= (4 * 3600)) {
        price = (actual_time - (4 * 3600));
        price = Math.round(price / 3600) * 15;
        price = price + 45;
    }
    else {

        price = Math.round(actual_time / (15 * 60)) * 5;
        if (price == 0) {
            price = 5;
        }
        if (price > 15) {
            price = 15;
        }
    }
    document.getElementById("price" + id).innerHTML = price;
}

function printer_counter(id) {
    actual_time = machines[id].timer
    document.getElementById("timer" + id).innerHTML = countTimer(actual_time);
    price = 0;
    price = Math.round(actual_time / 3600) * 3;
    if (price == 0) {
        price = 3;
    }
    document.getElementById("price" + id).innerHTML = price;
}

function resin_printer_counter(id) {
    actual_time = machines[id].timer
    document.getElementById("timer" + id).innerHTML = countTimer(actual_time);
    price = 0;
    price = Math.round(actual_time / 3600) * 5;
    if (price == 0) {
        price = 5;
    }
    document.getElementById("price" + id).innerHTML = price;
}

function time_reset(id) {
    document.getElementById("price" + id).innerHTML = 0;
    document.getElementById("timer" + id).innerHTML = "00:00:00";
    machines[id].timer = 0;
}

function time_reset(id) {
    document.getElementById("price" + id).innerHTML = 0;
    document.getElementById("timer" + id).innerHTML = "00:00:00";
    machines[id].timer = 0;
}

function biglaser_counter(id) {
    actual_time = machines[id].timer
    document.getElementById("timer" + id).innerHTML = countTimer(actual_time);
    price = 0;
    if (actual_time >= (1 * 3600)) {
        price = Math.round(actual_time / 3600) * 15;
    }
    else {
        price = 10;
    }
    document.getElementById("price" + id).innerHTML = price;
}

