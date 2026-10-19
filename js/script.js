/* ============================================================
   CẤU HÌNH — chỉnh ở đây cho đúng với hai bạn
   ============================================================ */
const CONFIG = {
  // Ngày bắt đầu yêu (định dạng YYYY-MM-DD). Để rỗng "" nếu không muốn hiển thị.
  loveStart: "2026-09-05",
  // Ngày 20/10 (năm tự lấy theo hiện tại)
  month: 10,
  day: 20,
};

const GIFTS = [
  { emoji: "🤗", title: "Một vé bên em suốt đời >_< hihi", short: "Bên em trọn đời", desc: "Anh sẽ luôn ở bên em, chăm sóc và yêu thương em mỗi ngày. Anh yêu em.", color: ["#c2305e", "#6e1236"] },
  { emoji: "🤗", title: "Một vé bên em suốt đời >_< hihi", short: "Bên em trọn đời", desc: "Anh sẽ luôn ở bên em, chăm sóc và yêu thương em mỗi ngày. Anh yêu em.", color: ["#c2305e", "#6e1236"] },
  { emoji: "🤗", title: "Một vé bên em suốt đời >_< hihi", short: "Bên em trọn đời", desc: "Anh sẽ luôn ở bên em, chăm sóc và yêu thương em mỗi ngày. Anh yêu em.", color: ["#c2305e", "#6e1236"] },
  { emoji: "🤗", title: "Một vé bên em suốt đời >_< hihi", short: "Bên em trọn đời", desc: "Anh sẽ luôn ở bên em, chăm sóc và yêu thương em mỗi ngày. Anh yêu em.", color: ["#c2305e", "#6e1236"] },
];

const GALLERY = [
  ["booth21", "Vòng tay anh", "gold"],
  ["img0603", "Một đêm bên nhau", "rose"],
  ["booth23", "Nụ cười của em", "gold"],
  ["img0922", "Bữa tối của hai đứa", "silver"],
  ["booth25", "Anh bế em nè", "rose"],
  ["img0675", "Dưới ánh đèn đêm", "gold"],
  ["booth28", "Bên nhau thật gần", "silver"],
  ["img0937", "Em cười xinh quá", "gold"],
  ["booth24", "Hạnh phúc là đây", "rose"],
  ["img0923", "Em tựa cằm", "gold"],
  ["img0570", "Thành phố lên đèn", "silver"],
  ["booth30", "Anh ôm em", "gold"],
  ["img0939", "Hai đứa mình", "rose"],
  ["img0926", "Cười thật tươi", "gold"],
  ["booth26", "Khoảnh khắc ngọt ngào", "silver"],
  ["img0924", "Nhìn anh đi nào", "gold"],
  ["img0940", "Yeah! ✌️", "rose"],
  ["booth29", "Em của anh", "gold"],
  ["img0925", "Gần nhau thật gần", "silver"],
  ["img0918", "Một ngày bình yên", "gold"],
  ["img0927", "Em xinh nhất", "rose"],
  ["img0935", "Cô gái của anh", "gold"],
  ["new_0", "Cặp đôi hoàn hảo", "silver"],
  ["new_1", "Nửa kia của anh", "rose"],
  ["new_2", "Định mệnh của nhau", "gold"],
  ["new_3", "Anh và em", "rose"],
  ["new_4", "Chung đôi trọn đời", "silver"],
  ["new_5", "Tình yêu vĩnh cửu", "gold"],
  ["new_6", "My Love", "silver"],
  ["new_7", "Bên nhau mãi nhé", "rose"],
  ["new_8", "Soulmate", "gold"],
  ["new_9", "Em là ngoại lệ", "gold"],
  ["new_10", "Yêu em nhất", "rose"],
  ["new_11", "Our Story", "silver"],
  ["new_12", "Một đời có nhau", "gold"],
  ["new_13", "Anh là của em", "rose"],
  ["new_14", "You & Me", "silver"],
  ["new_15", "Tình yêu duy nhất", "gold"],
  ["new_16", "Cục cưng của anh", "rose"],
  ["new_17", "Forever Us", "gold"],
  ["new_18", "Nắm tay anh nhé", "silver"],
  ["new_19", "Em là nhà", "rose"],
  ["new_20", "Perfect Match", "gold"],
  ["new_21", "Đôi ta một cặp", "silver"],
  ["new_22", "Bé yêu của anh", "rose"],
  ["new_23", "Hẹn ước trăm năm", "gold"],
  ["new_24", "Just Two of Us", "silver"],
  ["new_25", "Trái tim có đôi", "gold"],
  ["new_26", "Anh thương em", "rose"],
  ["new_27", "Together Forever", "silver"],
  ["new_28", "Người thương duy nhất", "gold"],
  ["new_29", "Mãi là của nhau", "rose"],
  ["new_30", "Lovebirds", "gold"],
  ["new_31", "Có em có anh", "silver"],
  ["new_32", "Công chúa của anh", "rose"],
  ["new_33", "Đôi mình mãi đỉnh", "gold"],
  ["new_34", "My Forever Person", "silver"],
  ["new_35", "Yêu nhau dài lâu", "rose"]
];

const SCHOOL = [
  ["school2", "Nụ cười ngày ấy"],
  ["school5", "Chiếc balo hồng"],
  ["school3", "Lấp lánh"],
  ["school6", "Hai chữ V"],
  ["school1", "Ngoái nhìn"],
  ["school4", "Cô học trò"],
  ["school7", "Dịu dàng"],
];

const REASONS = [
  ["🌸", "Nụ cười của em", "Chỉ cần thấy em cười là mọi mệt mỏi trong anh tan biến. Nụ cười ấy là điều đẹp nhất anh từng được thấy."],
  ["🫶", "Sự dịu dàng", "Em dịu dàng với anh, với mọi người, và cả với những điều nhỏ bé xung quanh. Anh học được rất nhiều từ em."],
  ["💪", "Sự mạnh mẽ", "Em có thể trông nhỏ nhắn, nhưng em kiên cường hơn em nghĩ nhiều. Anh luôn tự hào về em."],
  ["🍀", "Sự bình yên", "Ở cạnh em, anh thấy lòng mình yên ả. Em là nơi anh muốn trở về sau mỗi ngày dài."],
  ["🌙", "Những buổi tối nắm tay", "Chẳng cần nơi nào xa hoa, chỉ cần nắm tay em đi giữa phố đêm là anh đã thấy đủ đầy."],
  ["✨", "Chỉ đơn giản là em", "Không cần lý do nào lớn lao. Anh thương em vì em là em — duy nhất và không ai thay thế được."],
];

/* ============================================================
   TIỆN ÍCH
   ============================================================ */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const rand = (a, b) => Math.random() * (b - a) + a;
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const imgPath = (n) => `assets/img/${n}.jpg`;

$("#year").textContent = new Date().getFullYear();

/* ============================================================
   HIỆU ỨNG NỀN: cánh hoa + confetti + lấp lánh (canvas)
   ============================================================ */
const petalCv = $("#petals"), pctx = petalCv.getContext("2d");
const confCv = $("#confetti"), cctx = confCv.getContext("2d");
let W = 0, H = 0, DPR = Math.min(devicePixelRatio || 1, 2);

function resize() {
  W = innerWidth; H = innerHeight;
  for (const cv of [petalCv, confCv]) {
    cv.width = W * DPR; cv.height = H * DPR;
    cv.getContext("2d").setTransform(DPR, 0, 0, DPR, 0, 0);
  }
}
addEventListener("resize", resize);
resize();

const PETAL_COLORS = ["#ff9db8", "#ffb8cc", "#e8456f", "#ffd1dc", "#f7c9a8"];
const petals = Array.from({ length: reduceMotion ? 0 : (W < 600 ? 22 : 38) }, () => newPetal(true));
function newPetal(init) {
  return {
    x: rand(0, W), y: init ? rand(-H, H) : rand(-80, -20),
    s: rand(7, 15), vy: rand(.35, 1.1), vx: rand(-.3, .5),
    rot: rand(0, 6.28), vr: rand(-.02, .02), sw: rand(0, 6.28), swv: rand(.008, .02),
    c: PETAL_COLORS[(Math.random() * PETAL_COLORS.length) | 0], a: rand(.45, .9),
  };
}
function drawPetal(p) {
  pctx.save();
  pctx.translate(p.x, p.y);
  pctx.rotate(p.rot);
  pctx.scale(1, .65 + Math.sin(p.sw) * .35);
  pctx.globalAlpha = p.a;
  pctx.fillStyle = p.c;
  pctx.beginPath();
  pctx.moveTo(0, -p.s);
  pctx.bezierCurveTo(p.s, -p.s * .6, p.s * .8, p.s * .7, 0, p.s);
  pctx.bezierCurveTo(-p.s * .8, p.s * .7, -p.s, -p.s * .6, 0, -p.s);
  pctx.fill();
  pctx.restore();
}

const parts = []; // confetti & sparkles
function burst(x, y, n = 30, opts = {}) {
  const set = opts.set || ["💖", "💗", "🌸", "✨", "💕", "🌹", "❤️", "⭐"];
  for (let i = 0; i < n; i++) {
    const a = rand(0, 6.28), v = rand(3, opts.speed || 11);
    parts.push({
      x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - rand(2, 5),
      g: .16, life: rand(70, 130), max: 130, size: rand(14, 28),
      ch: set[(Math.random() * set.length) | 0], rot: rand(-1, 1), vr: rand(-.1, .1),
    });
  }
}
function rain(n = 40) {
  for (let i = 0; i < n; i++) {
    parts.push({
      x: rand(0, W), y: rand(-H * .5, -20), vx: rand(-1, 1), vy: rand(2, 6), g: .02,
      life: 400, max: 400, size: rand(16, 30),
      ch: ["💖", "🌸", "✨", "💗", "🌹"][(Math.random() * 5) | 0], rot: 0, vr: rand(-.05, .05),
    });
  }
}
function sparkle(x, y) {
  parts.push({
    x, y, vx: rand(-.6, .6), vy: rand(-.2, 1), g: .02, life: 40, max: 40,
    size: rand(8, 16), ch: ["✨", "💗", "⭐"][(Math.random() * 3) | 0], rot: 0, vr: rand(-.1, .1),
  });
}

function loop() {
  pctx.clearRect(0, 0, W, H);
  for (const p of petals) {
    p.y += p.vy; p.x += p.vx + Math.sin(p.sw) * .6; p.rot += p.vr; p.sw += p.swv;
    if (p.y > H + 30 || p.x > W + 40 || p.x < -40) Object.assign(p, newPetal(false));
    drawPetal(p);
  }
  cctx.clearRect(0, 0, W, H);
  cctx.textAlign = "center"; cctx.textBaseline = "middle";
  for (let i = parts.length - 1; i >= 0; i--) {
    const p = parts[i];
    p.vy += p.g; p.x += p.vx; p.y += p.vy; p.rot += p.vr; p.life--;
    if (p.life <= 0 || p.y > H + 40) { parts.splice(i, 1); continue; }
    cctx.save();
    cctx.globalAlpha = Math.min(1, p.life / 30);
    cctx.translate(p.x, p.y); cctx.rotate(p.rot);
    cctx.font = `${p.size}px serif`;
    cctx.fillText(p.ch, 0, 0);
    cctx.restore();
  }
  requestAnimationFrame(loop);
}
loop();

if (!reduceMotion) {
  let last = 0;
  const trail = (x, y) => { const t = performance.now(); if (t - last > 55) { last = t; sparkle(x, y); } };
  addEventListener("pointermove", (e) => { if (e.pointerType === "mouse") trail(e.clientX, e.clientY); });
  addEventListener("touchmove", (e) => trail(e.touches[0].clientX, e.touches[0].clientY), { passive: true });
}

/* ============================================================
   CỔNG MỞ THƯ
   ============================================================ */
const gate = $("#gate"), envelope = $("#envelope");
let opened = false;
function openGate() {
  if (opened) return;
  opened = true;
  envelope.classList.add("open");
  setTimeout(() => burst(W / 2, H / 2, 30), 450);
  setTimeout(() => {
    gate.classList.add("gone");
    document.body.classList.remove("locked");
    rain(30);
    scrollTo(0, 0);
  }, 1300);
}
$("#openBtn").addEventListener("click", openGate);
envelope.addEventListener("click", openGate);

/* ============================================================
   ĐẾM NGƯỢC 20/10
   ============================================================ */
function initCountdown() {
  const box = $("#countdown");
  const now = new Date();
  const target = new Date(now.getFullYear(), CONFIG.month - 1, CONFIG.day);
  const isToday = now.getMonth() === CONFIG.month - 1 && now.getDate() === CONFIG.day;
  if (isToday) { box.innerHTML = '<div class="cd-today">Hôm nay là ngày của em! 🎉</div>'; return; }
  if (now > target) { box.innerHTML = '<div class="cd-today">Chúc mừng em mỗi ngày 💖</div>'; return; }
  const tick = () => {
    const d = target - new Date();
    if (d <= 0) return initCountdown();
    const v = [[Math.floor(d / 864e5), "Ngày"], [Math.floor(d / 36e5) % 24, "Giờ"], [Math.floor(d / 6e4) % 60, "Phút"], [Math.floor(d / 1e3) % 60, "Giây"]];
    box.innerHTML = v.map(([n, l]) => `<div class="cd-box"><b>${String(n).padStart(2, "0")}</b><span>${l}</span></div>`).join("");
  };
  tick(); setInterval(tick, 1000);
}
initCountdown();

/* ============================================================
   REVEAL KHI CUỘN + THƯ HIỆN TỪNG ĐOẠN
   ============================================================ */
const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (!en.isIntersecting) return;
    en.target.classList.add("in");
    io.unobserve(en.target);
  });
}, { threshold: .12 });
$$(".reveal").forEach((el) => io.observe(el));

const letterEls = [...$$("#letterBody p"), $(".sign")];
const letterIo = new IntersectionObserver((entries) => {
  if (!entries[0].isIntersecting) return;
  letterEls.forEach((p, i) => setTimeout(() => p.classList.add("show"), i * 900));
  letterIo.disconnect();
}, { threshold: .25 });
letterIo.observe($(".letter"));

/* ============================================================
   THƯ VIỆN + LIGHTBOX
   ============================================================ */
const grid = $("#galleryGrid");
grid.innerHTML = GALLERY.map(([n, cap, style], i) =>
  `<figure class="g-item ${style}" data-i="${i}"><div class="frame"><img src="${imgPath(n)}" alt="${cap}" loading="lazy"></div><figcaption class="g-cap">${cap}</figcaption></figure>`
).join("");

const pol = $("#polaroids");
pol.innerHTML = SCHOOL.map(([n, cap], i) =>
  `<figure class="polaroid reveal" data-s="${i}" style="transition-delay:${i * 90}ms"><img src="${imgPath(n)}" alt="${cap}" loading="lazy"><figcaption>${cap}</figcaption></figure>`
).join("");
$$(".polaroid").forEach((el) => io.observe(el));

const lb = $("#lightbox");
let lbList = [], lbIdx = 0;
function showLb(list, i) {
  lbList = list; lbIdx = (i + list.length) % list.length;
  const [n, cap] = list[lbIdx];
  $("#lbImg").src = imgPath(n);
  $("#lbImg").alt = cap;
  $("#lbCap").textContent = cap;
  const dl = $("#lbDl");
  dl.href = imgPath(n);
  dl.setAttribute("download", `ky-niem-${n}.jpg`);
  lb.classList.add("show");
  lb.setAttribute("aria-hidden", "false");
  document.body.classList.add("locked");
}
function closeLb() {
  lb.classList.remove("show");
  lb.setAttribute("aria-hidden", "true");
  document.body.classList.remove("locked");
}
grid.addEventListener("click", (e) => {
  const f = e.target.closest(".g-item"); if (f) showLb(GALLERY, +f.dataset.i);
});
pol.addEventListener("click", (e) => {
  const f = e.target.closest(".polaroid"); if (f) showLb(SCHOOL, +f.dataset.s);
});
$("#lbClose").addEventListener("click", closeLb);
$("#lbPrev").addEventListener("click", () => showLb(lbList, lbIdx - 1));
$("#lbNext").addEventListener("click", () => showLb(lbList, lbIdx + 1));
lb.addEventListener("click", (e) => { if (e.target === lb) closeLb(); });
addEventListener("keydown", (e) => {
  if (!lb.classList.contains("show")) return;
  if (e.key === "Escape") closeLb();
  if (e.key === "ArrowLeft") showLb(lbList, lbIdx - 1);
  if (e.key === "ArrowRight") showLb(lbList, lbIdx + 1);
});
let tx = 0;
lb.addEventListener("touchstart", (e) => { tx = e.touches[0].clientX; }, { passive: true });
lb.addEventListener("touchend", (e) => {
  const dx = e.changedTouches[0].clientX - tx;
  if (Math.abs(dx) > 60) showLb(lbList, lbIdx + (dx < 0 ? 1 : -1));
}, { passive: true });

/* ============================================================
   THẺ LÝ DO
   ============================================================ */
$("#cards").innerHTML = REASONS.map(([ico, t, d], i) =>
  `<div class="card reveal" style="transition-delay:${i * 80}ms" tabindex="0"><div class="card-in">
    <div class="card-face card-front"><div class="ico">${ico}</div><div class="num">${String(i + 1).padStart(2, "0")}</div><small>Chạm để lật</small></div>
    <div class="card-face card-back"><h3>${t}</h3><p>${d}</p></div></div></div>`
).join("");
$$(".card").forEach((c) => {
  io.observe(c);
  const flip = () => {
    c.classList.toggle("flip");
    if (c.classList.contains("flip")) { const r = c.getBoundingClientRect(); burst(r.left + r.width / 2, r.top + r.height / 2, 14, { speed: 6 }); }
  };
  c.addEventListener("click", flip);
  c.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); flip(); } });
});

/* ============================================================
   VÒNG QUAY QUÀ
   ============================================================ */
const wheel = $("#wheel"), wctx = wheel.getContext("2d");
const N = GIFTS.length, SEG = (Math.PI * 2) / N;
let rot = 0, spinning = false;

function drawWheel() {
  const s = wheel.width, c = s / 2, r = c - 6;
  wctx.clearRect(0, 0, s, s);
  GIFTS.forEach((g, i) => {
    const a0 = -Math.PI / 2 + rot + i * SEG, a1 = a0 + SEG;
    const grad = wctx.createRadialGradient(c, c, r * .1, c, c, r);
    grad.addColorStop(0, g.color[0]); grad.addColorStop(1, g.color[1]);
    wctx.beginPath(); wctx.moveTo(c, c); wctx.arc(c, c, r, a0, a1); wctx.closePath();
    wctx.fillStyle = grad; wctx.fill();
    wctx.strokeStyle = "rgba(255,240,184,.9)"; wctx.lineWidth = 4; wctx.stroke();

    wctx.save();
    wctx.translate(c, c); wctx.rotate(a0 + SEG / 2);
    wctx.textAlign = "center"; wctx.textBaseline = "middle";
    wctx.font = "64px serif";
    wctx.fillText("🎁", r * .66, 0);
    wctx.fillStyle = "#fff";
    wctx.shadowColor = "rgba(0,0,0,.55)"; wctx.shadowBlur = 6;
    wctx.font = "700 27px 'Be Vietnam Pro',sans-serif";
    wctx.textAlign = "right";
    // wctx.fillText(`Quà số ${i + 1}`, r * .88 - 90, 0, r * .45);
    wctx.restore();
  });
  // viền bóng đèn
  const bulbs = 24;
  for (let i = 0; i < bulbs; i++) {
    const a = (i / bulbs) * Math.PI * 2 + rot * .0;
    wctx.beginPath();
    wctx.arc(c + Math.cos(a) * (r - 11), c + Math.sin(a) * (r - 11), 5, 0, 7);
    wctx.fillStyle = i % 2 ? "#fff3c4" : "#ffd9e4"; wctx.fill();
  }
  // trục giữa
  wctx.beginPath(); wctx.arc(c, c, 62, 0, 7);
  wctx.fillStyle = "#3a0a1e"; wctx.fill();
  wctx.lineWidth = 6; wctx.strokeStyle = "#e9c46a"; wctx.stroke();
}
// vẽ lại sau khi font tải xong để chữ trên vòng đúng kiểu
drawWheel();
document.fonts && document.fonts.ready.then(drawWheel);

const STORE = "womanday-gift-result";
const saved = (() => { try { return localStorage.getItem(STORE); } catch (e) { return null; } })();
let done = false;
const side = $(".gift-side");
side.hidden = true;

function spin() {
  if (spinning || done) return;
  spinning = true;
  $("#spinBtn").disabled = true;

  const target = Math.floor(Math.random() * N);
  const u = rand(.12, .88);
  const cur = rot;
  const base = (((-(target + u) * SEG - cur) % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
  const total = base + Math.PI * 2 * (5 + Math.floor(rand(0, 3)));
  const dur = 5200, t0 = performance.now();
  const ease = (t) => 1 - Math.pow(1 - t, 4);

  (function frame(now) {
    const t = Math.min(1, (now - t0) / dur);
    rot = cur + total * ease(t);
    drawWheel();
    if (t < 1) return requestAnimationFrame(frame);
    spinning = false;
    try { localStorage.setItem(STORE, `${target}:${u}`); } catch (e) {}
    showPrize(target);
  })(t0);
}

function showPrize(i, silent) {
  done = true;
  const b = $("#spinBtn");
  b.disabled = true;
  b.textContent = "ĐÃ QUAY";
  const g = GIFTS[i];
  $("#prizeEmoji").textContent = g.emoji;
  $("#prizeTitle").textContent = g.title;
  $("#prizeDesc").textContent = g.desc;
  $("#history").innerHTML = `<li>${g.emoji} ${g.title}</li>`;
  side.hidden = false;
  if (silent) return;
  const m = $("#prizeModal");
  m.classList.add("show"); m.setAttribute("aria-hidden", "false");
  burst(W / 2, H / 2, 45);
  setTimeout(() => rain(40), 300);
}

if (saved) {
  const [i, u] = saved.split(":").map(Number);
  if (GIFTS[i]) {
    rot = -(i + (u || .5)) * SEG;
    drawWheel();
    showPrize(i, true);
  }
}
function closePrize() {
  const m = $("#prizeModal");
  m.classList.remove("show"); m.setAttribute("aria-hidden", "true");
}
$("#spinBtn").addEventListener("click", spin);
$("#prizeClose").addEventListener("click", closePrize);
$("#prizeModal").addEventListener("click", (e) => { if (e.target.id === "prizeModal") closePrize(); });

/* ============================================================
   KẾT: trái tim + số ngày yêu nhau
   ============================================================ */
const bh = $("#bigHeart");
const bigBurst = (e) => {
  const r = bh.getBoundingClientRect();
  burst(r.left + r.width / 2, r.top + r.height / 2, 20);
  if (e && e.type === "click") bh.animate([{ transform: "scale(1)" }, { transform: "scale(1.25)" }, { transform: "scale(1)" }], { duration: 400 });
};
bh.addEventListener("click", bigBurst);
bh.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); bigBurst(); } });

if (CONFIG.loveStart) {
  const d = Math.floor((Date.now() - new Date(CONFIG.loveStart)) / 864e5);
  if (d > 0) {
    const box = $("#loveDays");
    box.hidden = false;
    box.innerHTML = `Mình đã yêu nhau được <b>${d.toLocaleString("vi-VN")}</b> ngày — và anh muốn đếm thêm thật nhiều nữa 💞`;
  }
}

// Tự thả tim khi chạm "Quà" lần đầu hiển thị cho vui mắt
new IntersectionObserver((en, ob) => {
  if (en[0].isIntersecting) { burst(W / 2, H * .6, 15); ob.disconnect(); }
}, { threshold: .6 }).observe($("#finale"));
