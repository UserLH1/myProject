window.onload = function() {
let tn = document.getElementById("ton");
  let st = document.getElementById("stone");
  let g = document.getElementById("kilogram");
  let h = document.getElementById("pound");
  let oz = document.getElementById("ounce");
  let gm = document.getElementById("gram");
  tn.oninput = function() {
      st.value = (tn.valueAsNumber*1000)*0.15747;
      g.value = (tn.valueAsNumber*1000);
      h.value = (tn.valueAsNumber*1000)/0.454;
      oz.value = (tn.valueAsNumber*1000)*35.274;
      gm.value = (tn.valueAsNumber*1000)*1000;
  }
  st.oninput = function() {
      tn.value = (st.valueAsNumber*1000)/0.15747;
      g.value = (st.valueAsNumber/0.15747);
      h.value = (st.valueAsNumber*0.0625);
      oz.value = (st.valueAsNumber/0.0044643);
      gm.value = (st.valueAsNumber/0.15747)/1000;
  }
  g.oninput = function() {
      tn.value = (g.valueAsNumber/1000);
      st.value = (g.valueAsNumber*0.15747);
      h.value = (g.valueAsNumber / 0.454);
      oz.value = (g.valueAsNumber*35.274);
      gm.value = (g.valueAsNumber*1000);
  };
  h.oninput = function() {
      tn.value = (h.valueAsNumber*0.454)/1000;
      st.value = (h.valueAsNumber*0.071429);
      g.value = (h.valueAsNumber * 0.454);
      oz.value = (h.valueAsNumber*16);
      gm.value = (h.valueAsNumber*454);
  };
  oz.oninput = function() {
      tn.value = (oz.valueAsNumber/1000)/35.274;
      st.value = (oz.valueAsNumber*0.0044643);
      g.value = (oz.valueAsNumber/35.274);
      h.value = (oz.valueAsNumber/16);
      gm.value = (oz.valueAsNumber/0.035274);
  }
  gm.oninput = function() {
      tn.value = (gm.valueAsNumber/1000)/1000;
      st.value = (gm.valueAsNumber*0.00015747);
      g.value = (gm.valueAsNumber/1000);
      h.value = (gm.valueAsNumber/454);
      oz.value = (gm.valueAsNumber*0.035274);
  }
}