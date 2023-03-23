fablabname = "LABSud";


machines = []

machines[0] = {
    "name":"Laser 80W 1",
    "template":time_template,
    "start":"time_start",
    "counter":laser_counter,
    "reset":"time_reset"
}
machines[1] = {
    "name":"Laser 80W 2",
    "template":time_template,
    "start":"time_start",
    "counter":laser_counter,
    "reset":"time_reset"
}

machines[2] = {
    "name":"Laser 180W",
    "template":time_template,
    "start":"time_start",
    "counter":biglaser_counter,
    "reset":"time_reset"
}

machines[3] = {
    "name":"Prusa MK3 - 1",
    "template":time_template,
    "start":"time_start",
    "counter":printer_counter,
    "reset":"time_reset"
}

machines[4] = {
    "name":"Prusa MK3 - 2",
    "template":time_template,
    "start":"time_start",
    "counter":printer_counter,
    "reset":"time_reset"
}

machines[5] = {
    "name":"Prusa Mini - 3",
    "template":time_template,
    "start":"time_start",
    "counter":printer_counter,
    "reset":"time_reset"
}
