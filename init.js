machines_div = document.getElementById("machines");
document.getElementById("title").innerHTML = "TariFab - LABSud"

for (id in machines) {

    machines[id].status = false;
    machines_div.innerHTML += machines[id].template(id, machines[id]);

}

function user_text(id) {
    document.getElementById("user_" + id).innerHTML = document.getElementById("userinput_" + id).value;
}
function timer_text(id) {
    time_text = document.getElementById("timeinput" + id).value;
    time_seconds = time_to_seconds(time_text);

    if (!isNaN(time_seconds)) {

        machines[id].timer = time_seconds
        document.getElementById("timer" + id).innerHTML = countTimer(machines[id]);
        machines[id].counter(id);
    }
}

function time_to_seconds(time_text) {

    time_split = time_text.split(":");
    time_final = 0;

    if (time_split.length == 1) {
        time_temp = parseInt(time_split[0]);

        if (time_temp != NaN) {
            time_final += time_temp * 3600;
        } else {
            return NaN
        }

    } else if (time_split.length == 2) {
        time_temp = parseInt(time_split[0]);
        if (time_temp != NaN) {
            time_final += time_temp * 3600;
        } else {
            return NaN;
        }

        time_temp = parseInt(time_split[1]);
        if (time_temp != NaN) {
            time_final += time_temp * 60;
        } else {
            return NaN;
        }

    } else if (time_split.length == 3) {

        time_temp = parseInt(time_split[0]);
        if (time_temp != NaN) {
            time_final += time_temp * 3600;
        } else {
            return NaN;
        }

        time_temp = parseInt(time_split[1]);
        if (time_temp != NaN) {
            time_final += time_temp * 60;
        } else {
            return NaN;
        }

        time_temp = parseInt(time_split[2]);
        if (time_temp != NaN) {
            time_final += time_temp;
        } else {
            return NaN;
        }
    } else {
        console.log("Not valid");
        time_final = NaN;
    }
    return time_final;
}

function countTimer(time) {
    var hour = Math.floor(time / 3600);
    var minute = Math.floor((time - hour * 3600) / 60);
    var seconds = time - (hour * 3600 + minute * 60);
    if (hour < 10)
        hour = "0" + hour;
    if (minute < 10)
        minute = "0" + minute;
    if (seconds < 10)
        seconds = "0" + seconds;
    return hour + ":" + minute + ":" + seconds;
}