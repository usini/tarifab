fablabname = "LABSud";


machines = []

machines.push({
    "name":"Laser 80W 1",
    "template":time_template,
    "start":"time_start",
    "counter":laser_counter,
    "reset":"time_reset"
})

machines.push({
    "name":"Laser 80W 2",
    "template":time_template,
    "start":"time_start",
    "counter":laser_counter,
    "reset":"time_reset"
})

machines.push({
    "name":"Laser 180W",
    "template":time_template,
    "start":"time_start",
    "counter":biglaser_counter,
    "reset":"time_reset"
})

machines.push({
    "name":"Prusa MK3 - 1",
    "template":time_template,
    "start":"time_start",
    "counter":printer_counter,
    "reset":"time_reset"
})

machines.push({
    "name":"Prusa MK3 - 2",
    "template":time_template,
    "start":"time_start",
    "counter":printer_counter,
    "reset":"time_reset"
})

machines.push({
    "name":"Prusa Mini - 3",
    "template":time_template,
    "start":"time_start",
    "counter":printer_counter,
    "reset":"time_reset"
})

machines.push({
    "name":"Elegoo Mars",
    "template":time_template,
    "start":"time_start",
    "counter":resin_printer_counter,
    "reset":"time_reset"
})

machines.push({
    "name":"Brodeuse Numérique",
    "template":count_template,
    "value":"Points",
    "counter":embroiderer_counter,
    "reset":"count_reset"
})

