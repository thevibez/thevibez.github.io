var clubber = new Clubber();

clubber.listen(document.querySelector("audio"));
var mods = Clubberize(clubber,"https://wizgrav.github.io/clubber/tool/?tool=1&t0=6234&r0=3,36,64,128&s0=0.1,0.1,0.1,0.1&a0=1,1,1,1&t1=0234&r1=36,48,64,128&s1=0.09,0.09,0.09,0.09&a1=1,1,1,1&t2=0234&r2=44,60,64,128&s2=0.08,0.09,0.09,0.09&a2=1,1,1,1&t3=0123&r3=60,96,64,128&s3=0.08,0.08,0.09,0.08&a3=1,1,1,1&red=smoothstep(0.5%2C%200.8%2C%20length(min(iMusic%5B0%5D.yw%2C%20iMusic%5B1%5D.yw)))&green=smoothstep(0.25%2C%200.8%2C%20dot(iMusic%5B1%5D.yw%2C%20iMusic%5B2%5D.yw))&blue=smoothstep(0.%2C%201.33%20-%20max(iMusic%5B3%5D.z%2C%20iMusic%5B2%5D.z)%2C%20dot(iMusic%5B3%5D.xw%2C%20iMusic%5B2%5D.xw)%20*%20max(iMusic%5B2%5D.w%2CiMusic%5B3%5D.w))&alpha=smoothstep(iMusic%5B1%5D.y%20*%20iMusic%5B3%5D.y%20*%20iMusic%5B2%5D.y%2C%201.66%20-%20iMusic%5B1%5D.w%20*%20iMusic%5B3%5D.w%2Clength(min(iMusic%5B2%5D.xz%2CiMusic%5B3%5D.xz)))&track=https%3A%2F%2Fsoundcloud.com%2Flondal%2Faegir%3Fin%3Dlondal%2Fsets%2Fnorwegian-electronic-music&shader=https%3A%2F%2Fwww.shadertoy.com%2Fview%2FltyXR1");

var shape = document.querySelector("g");
var dot1 = document.querySelector("#dot1");
var dot2 = document.querySelector("#dot2");

function render (time) {
  window.requestAnimationFrame(render);  
  clubber.update();
  var d = mods(time);
  //console.log(d)
  shape.setAttribute("transform", "rotate("+(time/33 + Math.min(d[0], d[1]) * 33)+" 233 233)");
  dot1.setAttribute("r", 33 + 66 * Math.pow(d[3],2));
  dot2.setAttribute("r", 33 + 66 * Math.pow(d[2],2));
}

render(0)