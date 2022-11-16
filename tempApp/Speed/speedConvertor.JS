window.onload=function() {
let mp = document.getElementById("mph");
let kp = document.getElementById("kph");
let kn = document.getElementById("knots");
let mc = document.getElementById("mach");
mp.oninput = function() {
    kp.value = (mp.valueAsNumber*1.609344);
    kn.value = (mp.valueAsNumber/1.150779);
    mc.value = (mp.valueAsNumber/761.207);
}
kp.oninput = function() {
    mp.value = (kp.valueAsNumber/1.609344);
    kn.value = (kp.valueAsNumber/1.852);
    mc.value = (kp.valueAsNumber/1225.044);
}
kn.oninput = function() {
    mp.value = (kn.valueAsNumber*1.150779);
    kp.value = (kn.valueAsNumber*1.852);
    mc.value = (kn.valueAsNumber/661.4708);
}
mc.oninput = function() {
    mp.value = (mc.valueAsNumber*761.207);
    kp.value = (mc.valueAsNumber*1225.044);
    kn.value = (mc.valueAsNumber*661.4708);
}
}