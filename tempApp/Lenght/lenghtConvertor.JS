window.onload = function(){
let mi = document.getElementById("mile");
let km = document.getElementById("km");
let m = document.getElementById("meter");
let cm = document.getElementById("centimeter");
let i = document.getElementById("inch");
let ft = document.getElementById("feet");
let yd = document.getElementById("yards");
m.oninput = function() {
    cm.value = (m.valueAsNumber*100);
    i.value = (m.valueAsNumber*100)/2.54;
    ft.value = (m.valueAsNumber*3.2808);
    yd.value = (m.valueAsNumber*1.0936);
    km.value = (m.valueAsNumber/1000);
    mi.value = (m.valueAsNumber/1000)*0.62137;
}
cm.oninput = function() {
    m.value = (cm.valueAsNumber/100);
    i.value = (cm.valueAsNumber/2.54);
    ft.value = (cm.valueAsNumber/100)*3.2808;
    yd.value = (cm.valueAsNumber*0.010936);
    km.value = (cm.valueAsNumber/1000)/100;
    mi.value = (cm.valueAsNumber*0.0000062137);
}
i.oninput = function() {
    m.value = (i.valueAsNumber/100)*2.54;
    cm.value = (i.valueAsNumber*2.54);
    ft.value = (i.valueAsNumber/12);
    yd.value = (i.valueAsNumber/36);
    km.value = (i.valueAsNumber/39370);
    mi.value = (i.valueAsNumber*0.000015783);

}
ft.oninput = function() {
    m.value = (ft.valueAsNumber/3.2808);
    cm.value = (ft.valueAsNumber/3.2808)*100;
    i.value = (ft.valueAsNumber*12);
    yd.value = (ft.valueAsNumber/3);
    km.value = (ft.valueAsNumber/3280.8);
    mi.value = (ft.valueAsNumber*0.00018939);
}
yd.oninput = function() {
    m.value = (yd.valueAsNumber/1.0936);
    cm.value = (yd.valueAsNumber/1.0936)*100;
    i.value = (yd.valueAsNumber*36);
    ft.value = (yd.valueAsNumber*3);
    km.value = (yd.valueAsNumber/1093.6);
    mi.value = (yd.valueAsNumber/1760);
}
km.oninput = function() {
    m.value = (km.valueAsNumber*1000);
    cm.value = (km.valueAsNumber*1000)*100;
    i.value = (km.valueAsNumber*39370);
    ft.value = (km.valueAsNumber*3280.8);
    yd.value = (km.valueAsNumber*1093.6);
    mi.value = (km.valueAsNumber*0.62137);
}
mi.oninput = function() {
    m.value = (mi.valueAsNumber*1000)/0.62137;
    cm.value = (mi.valueAsNumber/0.0000062137);
    i.value = (mi.valueAsNumber/0.000015783);
    ft.value = (mi.valueAsNumber*5280);
    yd.value = (mi.valueAsNumber*1760);
    km.value = (mi.valueAsNumber/0.62137);
}
}