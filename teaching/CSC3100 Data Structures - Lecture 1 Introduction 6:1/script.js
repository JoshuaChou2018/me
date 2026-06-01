// ===== Utils =====
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const sleep = ms => new Promise(r => setTimeout(r, ms));
const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// ===== Lightbox =====
const lightbox = $('#lightbox');
const lightboxImg = $('#lightbox-img');
const lightboxCaption = $('#lightbox-caption');

function openLightbox(src, caption) {
    lightboxImg.src = src;
    lightboxCaption.textContent = caption || '';
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}
function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

$$('.ppt-card, .hero-ppt').forEach(card => {
    card.addEventListener('click', () => {
        const img = card.querySelector('img');
        if (img) openLightbox(img.src, img.alt);
    });
});
$('#lightbox-close').addEventListener('click', closeLightbox);
$('.lightbox-backdrop').addEventListener('click', closeLightbox);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

// ===== Navbar =====
const navbar = $('#navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    const secs = $$('section[id]');
    const pos = window.scrollY + 100;
    secs.forEach(sec => {
        const top = sec.offsetTop, h = sec.offsetHeight, id = sec.getAttribute('id');
        const link = $(`.nav-link[href="#${id}"]`);
        if (link && pos >= top && pos < top + h) {
            $$('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        }
    });
});
$('#hamburger').addEventListener('click', () => {
    const nav = $('.nav-links');
    const showing = nav.style.display === 'flex';
    nav.style.display = showing ? 'none' : 'flex';
    if (!showing) {
        nav.style.position = 'absolute';
        nav.style.top = '64px'; nav.style.left = '0'; nav.style.right = '0';
        nav.style.flexDirection = 'column';
        nav.style.background = 'rgba(255,255,255,0.95)';
        nav.style.backdropFilter = 'blur(20px)';
        nav.style.padding = '16px'; nav.style.boxShadow = 'var(--shadow-lg)';
    }
});

// ===== Hero Canvas =====
const hCanvas = $('#hero-canvas');
const hCtx = hCanvas.getContext('2d');
let hParts = [];
function resizeHero() { hCanvas.width = window.innerWidth; hCanvas.height = window.innerHeight; }
resizeHero(); window.addEventListener('resize', resizeHero);
class HPart {
    constructor() {
        this.x = Math.random() * hCanvas.width;
        this.y = Math.random() * hCanvas.height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.r = Math.random() * 2 + 1;
    }
    update() {
        this.x += this.vx; this.y += this.vy;
        if (this.x < 0 || this.x > hCanvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > hCanvas.height) this.vy *= -1;
    }
    draw() {
        hCtx.beginPath();
        hCtx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        hCtx.fillStyle = 'rgba(14,165,233,0.12)';
        hCtx.fill();
    }
}
for (let i = 0; i < 55; i++) hParts.push(new HPart());
function animHero() {
    hCtx.clearRect(0, 0, hCanvas.width, hCanvas.height);
    hParts.forEach(p => { p.update(); p.draw(); });
    for (let i = 0; i < hParts.length; i++) {
        for (let j = i + 1; j < hParts.length; j++) {
            const dx = hParts[i].x - hParts[j].x, dy = hParts[i].y - hParts[j].y;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < 140) {
                hCtx.beginPath();
                hCtx.moveTo(hParts[i].x, hParts[i].y);
                hCtx.lineTo(hParts[j].x, hParts[j].y);
                hCtx.strokeStyle = `rgba(14,165,233,${0.08 * (1 - d / 140)})`;
                hCtx.lineWidth = 1;
                hCtx.stroke();
            }
        }
    }
    requestAnimationFrame(animHero);
}
animHero();

// ===== Route Planning Canvas =====
const rCanvas = $('#route-canvas');
const rCtx = rCanvas.getContext('2d');
let rNodes = [], rEdges = [], rPath = [];
function initRoute() {
    rNodes = []; rEdges = []; rPath = [];
    const n = 7;
    for (let i = 0; i < n; i++) {
        rNodes.push({
            x: 50 + Math.random() * (rCanvas.width - 100),
            y: 50 + Math.random() * (rCanvas.height - 100),
            id: i, label: String.fromCharCode(65 + i)
        });
    }
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (Math.random() < 0.35) {
                const dx = rNodes[i].x - rNodes[j].x, dy = rNodes[i].y - rNodes[j].y;
                rEdges.push({ from: i, to: j, weight: Math.round(Math.sqrt(dx * dx + dy * dy) / 8) });
            }
        }
    }
    drawRoute();
}
function drawRoute() {
    rCtx.clearRect(0, 0, rCanvas.width, rCanvas.height);
    rEdges.forEach(e => {
        const n1 = rNodes[e.from], n2 = rNodes[e.to];
        const inPath = rPath.some(p => (p.from === e.from && p.to === e.to) || (p.from === e.to && p.to === e.from));
        rCtx.beginPath();
        rCtx.moveTo(n1.x, n1.y);
        rCtx.lineTo(n2.x, n2.y);
        rCtx.strokeStyle = inPath ? '#22c55e' : '#e2e8f0';
        rCtx.lineWidth = inPath ? 3 : 1;
        rCtx.stroke();
        const mx = (n1.x + n2.x) / 2, my = (n1.y + n2.y) / 2;
        rCtx.fillStyle = inPath ? '#22c55e' : '#94a3b8';
        rCtx.font = '10px Inter';
        rCtx.textAlign = 'center';
        rCtx.fillText(e.weight, mx, my - 3);
    });
    rNodes.forEach((n, i) => {
        const isS = i === 0, isE = i === rNodes.length - 1;
        rCtx.beginPath();
        rCtx.arc(n.x, n.y, 18, 0, Math.PI * 2);
        rCtx.fillStyle = isS ? '#0ea5e9' : isE ? '#ef4444' : 'white';
        rCtx.fill();
        rCtx.strokeStyle = '#0ea5e9'; rCtx.lineWidth = 2; rCtx.stroke();
        rCtx.fillStyle = isS || isE ? 'white' : '#0f172a';
        rCtx.font = 'bold 12px Inter';
        rCtx.textAlign = 'center'; rCtx.textBaseline = 'middle';
        rCtx.fillText(n.label, n.x, n.y);
    });
}
function findRoute() {
    if (rNodes.length < 2) return;
    const n = rNodes.length;
    const dist = Array(n).fill(Infinity), prev = Array(n).fill(-1), vis = Array(n).fill(false);
    dist[0] = 0;
    for (let i = 0; i < n; i++) {
        let u = -1;
        for (let j = 0; j < n; j++) if (!vis[j] && (u === -1 || dist[j] < dist[u])) u = j;
        if (u === -1 || dist[u] === Infinity) break;
        vis[u] = true;
        rEdges.forEach(e => {
            let v = -1;
            if (e.from === u) v = e.to; else if (e.to === u) v = e.from;
            if (v !== -1 && !vis[v] && dist[u] + e.weight < dist[v]) {
                dist[v] = dist[u] + e.weight; prev[v] = u;
            }
        });
    }
    rPath = [];
    let cur = n - 1;
    while (prev[cur] !== -1) { rPath.push({ from: prev[cur], to: cur }); cur = prev[cur]; }
    drawRoute();
}
$('#route-reset').addEventListener('click', initRoute);
$('#route-find').addEventListener('click', findRoute);
initRoute();

// ===== Search Simulation =====
let searchInt;
$('#search-run').addEventListener('click', () => {
    clearInterval(searchInt);
    const fill = $('#search-fill');
    const stat = $('#search-stat');
    let p = 0;
    fill.style.width = '0%';
    stat.textContent = 'Indexing 30 trillion pages...';
    searchInt = setInterval(() => {
        p += 3;
        fill.style.width = p + '%';
        if (p >= 100) {
            clearInterval(searchInt);
            stat.innerHTML = 'Found <strong>2,340,000,000</strong> results in 0.42s';
        }
    }, 40);
});

// ===== Phone Analogy =====
const phoneDetail = $('#phone-detail');
const absInterface = $('#abs-interface');
const absImpl = $('#abs-implementation');
const phoneData = {
    call: { icon: '📞', interface: 'To make a call: input a person\'s phone number', impl: 'CPU, memory, battery, signal processing, base station negotiation, packet routing...' },
    internet: { icon: '🌐', interface: 'To access the Internet: open the browser', impl: 'DNS resolution, TCP handshake, HTTP requests, SSL encryption, rendering engine, JavaScript VM...' },
    storage: { icon: '💾', interface: 'To store data: tap save button', impl: 'Flash memory cells, wear leveling, error correction, filesystem journaling, encryption...' }
};
$$('.phone-app').forEach(app => {
    app.addEventListener('click', () => {
        $$('.phone-app').forEach(a => a.classList.remove('active'));
        app.classList.add('active');
        const d = phoneData[app.dataset.app];
        phoneDetail.textContent = `${d.icon} ${d.interface}`;
        absInterface.textContent = d.interface;
        absImpl.textContent = d.impl;
    });
});

// ===== Benefit Animation =====
$('#animate-benefits').addEventListener('click', () => {
    const cards = $$('.benefit-card');
    cards.forEach((c, i) => {
        c.style.opacity = '0';
        c.style.transform = 'translateY(20px)';
        setTimeout(() => {
            c.style.transition = 'all 0.5s ease';
            c.style.opacity = '1';
            c.style.transform = 'translateY(0)';
        }, i * 200);
    });
});

// ===== ADT Implementation Tabs =====
function renderVis(type) {
    const view = $(`#impl-${type}`);
    if (!view) return;
    const container = view.querySelector('div');
    container.innerHTML = '';
    if (type === 'array') {
        [3,1,4,1,5,9,2,6].forEach((v,i) => {
            const el = document.createElement('div'); el.className = 'vis-item'; el.textContent = v;
            el.style.animation = `fadeIn 0.3s ease ${i*0.05}s both`;
            container.appendChild(el);
        });
    } else if (type === 'list') {
        [3,1,4,1,5].forEach((v,i) => {
            const el = document.createElement('div'); el.className = 'vis-item'; el.textContent = v;
            el.style.animation = `fadeIn 0.3s ease ${i*0.05}s both`;
            container.appendChild(el);
        });
    } else if (type === 'tree') {
        const levels = [[5],[3,8],[1,4,7,9]];
        levels.forEach((level, li) => {
            const row = document.createElement('div'); row.className = 'vis-tree-row';
            level.forEach((v, i) => {
                const el = document.createElement('div'); el.className = 'vis-item'; el.textContent = v;
                el.style.animation = `fadeIn 0.3s ease ${(li*4+i)*0.05}s both`;
                row.appendChild(el);
            });
            container.appendChild(row);
        });
    } else if (type === 'hash') {
        const buckets = [{l:0,items:[4,8]},{l:1,items:[1,5,9]},{l:2,items:[2,6]},{l:3,items:[3,7]}];
        buckets.forEach((b, i) => {
            const buck = document.createElement('div'); buck.className = 'vis-bucket';
            buck.innerHTML = `<div class="vis-bucket-label">${b.l}</div>` + b.items.map(x => `<div>${x}</div>`).join('');
            buck.style.animation = `fadeIn 0.3s ease ${i*0.1}s both`;
            container.appendChild(buck);
        });
    }
}
$$('.impl-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        $$('.impl-tab').forEach(t => t.classList.remove('active'));
        $$('.impl-content').forEach(c => c.classList.remove('active'));
        tab.classList.add('active');
        $(`#impl-${tab.dataset.impl}`).classList.add('active');
        renderVis(tab.dataset.impl);
    });
});
renderVis('array');

// ===== Sorting Visualizer =====
const sCanvas = $('#sort-canvas');
const sCtx = sCanvas.getContext('2d');
let sData = [], sComp = 0, sSwap = 0, sAnim = false;
function initSort() {
    sData = []; sComp = 0; sSwap = 0;
    for (let i = 0; i < 28; i++) sData.push({ v: rand(15, 200), c: '#3b82f6' });
    updateSortStats(); drawSort();
}
function drawSort() {
    sCtx.clearRect(0, 0, sCanvas.width, sCanvas.height);
    const bw = sCanvas.width / sData.length;
    sData.forEach((b, i) => {
        const h = b.v, x = i * bw, y = sCanvas.height - h;
        sCtx.fillStyle = b.c;
        sCtx.fillRect(x + 1, y, bw - 2, h);
    });
}
function updateSortStats() {
    $('#sort-comp').textContent = sComp;
    $('#sort-swap').textContent = sSwap;
}
async function bubbleSort() {
    const n = sData.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            sData[j].c = '#f59e0b'; sData[j+1].c = '#f59e0b';
            sComp++; updateSortStats(); drawSort(); await sleep(60);
            if (sData[j].v > sData[j+1].v) {
                const t = sData[j]; sData[j] = sData[j+1]; sData[j+1] = t;
                sSwap++; updateSortStats(); drawSort(); await sleep(60);
            }
            sData[j].c = '#3b82f6'; sData[j+1].c = '#3b82f6';
        }
        sData[n-i-1].c = '#22c55e';
    }
    sData[0].c = '#22c55e'; drawSort();
}
async function selectionSort() {
    const n = sData.length;
    for (let i = 0; i < n - 1; i++) {
        let min = i; sData[i].c = '#8b5cf6';
        for (let j = i + 1; j < n; j++) {
            sData[j].c = '#f59e0b'; sComp++; updateSortStats(); drawSort(); await sleep(60);
            if (sData[j].v < sData[min].v) { if (min !== i) sData[min].c = '#3b82f6'; min = j; sData[min].c = '#ef4444'; drawSort(); await sleep(60); }
            else sData[j].c = '#3b82f6';
        }
        if (min !== i) { const t = sData[i]; sData[i] = sData[min]; sData[min] = t; sSwap++; updateSortStats(); }
        sData[min].c = '#3b82f6'; sData[i].c = '#22c55e'; drawSort();
    }
    sData[n-1].c = '#22c55e'; drawSort();
}
async function insertionSort() {
    const n = sData.length; sData[0].c = '#22c55e';
    for (let i = 1; i < n; i++) {
        const key = sData[i]; sData[i].c = '#ef4444'; drawSort(); await sleep(60);
        let j = i - 1;
        while (j >= 0 && sData[j].v > key.v) {
            sData[j+1] = sData[j]; sData[j].c = '#f59e0b'; sComp++; sSwap++;
            updateSortStats(); drawSort(); await sleep(60); sData[j+1].c = '#3b82f6';
            j--;
        }
        sData[j+1] = key; sData[j+1].c = '#22c55e'; drawSort();
    }
}
async function partition(l, h) {
    const pivot = sData[h]; sData[h].c = '#8b5cf6'; let i = l - 1;
    for (let j = l; j < h; j++) {
        sData[j].c = '#f59e0b'; sComp++; updateSortStats(); drawSort(); await sleep(60);
        if (sData[j].v < pivot.v) { i++; const t = sData[i]; sData[i] = sData[j]; sData[j] = t; sSwap++; updateSortStats(); }
        sData[j].c = '#3b82f6';
    }
    const t = sData[i+1]; sData[i+1] = sData[h]; sData[h] = t; sSwap++; updateSortStats();
    sData[h].c = '#3b82f6'; sData[i+1].c = '#22c55e'; drawSort(); return i + 1;
}
async function quickSort(l = 0, h = sData.length - 1) {
    if (l >= h) { if (l >= 0 && l < sData.length) sData[l].c = '#22c55e'; return; }
    const p = await partition(l, h);
    await quickSort(l, p - 1); await quickSort(p + 1, h);
    if (l === 0 && h === sData.length - 1) { sData.forEach(d => d.c = '#22c55e'); drawSort(); }
}
async function mergeSort(l = 0, r = sData.length - 1) {
    if (l >= r) return;
    const m = Math.floor((l + r) / 2);
    await mergeSort(l, m); await mergeSort(m + 1, r);
    const left = sData.slice(l, m + 1), right = sData.slice(m + 1, r + 1);
    let i = 0, j = 0, k = l;
    while (i < left.length && j < right.length) {
        sComp++; updateSortStats(); sData[k].c = '#f59e0b'; drawSort(); await sleep(50);
        if (left[i].v <= right[j].v) sData[k] = left[i++];
        else sData[k] = right[j++];
        sSwap++; sData[k].c = '#3b82f6'; drawSort(); k++;
    }
    while (i < left.length) { sData[k] = left[i++]; sSwap++; k++; }
    while (j < right.length) { sData[k] = right[j++]; sSwap++; k++; }
    updateSortStats(); drawSort();
    if (l === 0 && r === sData.length - 1) { sData.forEach(d => d.c = '#22c55e'); drawSort(); }
}
$$('.btn-sort').forEach(btn => {
    btn.addEventListener('click', async () => {
        if (sAnim) return;
        $$('.btn-sort').forEach(b => b.classList.remove('active'));
        btn.classList.add('active'); initSort();
        const map = { bubble: 'O(n²)', selection: 'O(n²)', insertion: 'O(n²)', quick: 'O(n log n) avg', merge: 'O(n log n)' };
        $('#sort-complexity').textContent = map[btn.dataset.algo];
        sAnim = true;
        if (btn.dataset.algo === 'bubble') await bubbleSort();
        else if (btn.dataset.algo === 'selection') await selectionSort();
        else if (btn.dataset.algo === 'insertion') await insertionSort();
        else if (btn.dataset.algo === 'quick') await quickSort();
        else if (btn.dataset.algo === 'merge') await mergeSort();
        sAnim = false;
    });
});
initSort();

// ===== Complexity Chart =====
const cCanvas = $('#complexity-chart');
const cCtx = cCanvas.getContext('2d');
function drawComplexity() {
    const w = cCanvas.width, h = cCanvas.height, pad = 40;
    const gw = w - pad * 2, gh = h - pad * 2;
    cCtx.clearRect(0, 0, w, h);
    cCtx.strokeStyle = '#e2e8f0'; cCtx.lineWidth = 1;
    cCtx.beginPath(); cCtx.moveTo(pad, pad); cCtx.lineTo(pad, h - pad); cCtx.lineTo(w - pad, h - pad); cCtx.stroke();
    cCtx.fillStyle = '#94a3b8'; cCtx.font = '10px Inter'; cCtx.textAlign = 'center';
    cCtx.fillText('Input Size (n)', w / 2, h - 10);
    cCtx.save(); cCtx.translate(12, h / 2); cCtx.rotate(-Math.PI / 2); cCtx.fillText('Operations', 0, 0); cCtx.restore();
    const maxN = 50, maxO = 2500;
    const fns = [
        { fn: n => 1, c: '#22c55e', l: 'O(1)' },
        { fn: n => Math.log2(n + 1) * 50, c: '#3b82f6', l: 'O(log n)' },
        { fn: n => n * 20, c: '#f59e0b', l: 'O(n)' },
        { fn: n => n * Math.log2(n + 1) * 2, c: '#ef4444', l: 'O(n log n)' },
        { fn: n => n * n, c: '#8b5cf6', l: 'O(n²)' }
    ];
    fns.forEach(f => {
        cCtx.beginPath(); cCtx.strokeStyle = f.c; cCtx.lineWidth = 2.5;
        for (let x = 0; x <= maxN; x += 0.5) {
            const px = pad + (x / maxN) * gw;
            const py = h - pad - (f.fn(x) / maxO) * gh;
            if (py >= pad) { if (x === 0) cCtx.moveTo(px, py); else cCtx.lineTo(px, py); }
        }
        cCtx.stroke();
    });
    for (let i = 0; i <= 5; i++) {
        const x = pad + (i / 5) * gw;
        cCtx.fillText(Math.round((i / 5) * maxN).toString(), x, h - pad + 14);
    }
}
drawComplexity();


// ===== Kth Largest Simulator =====
const kCanvas = $('#kth-canvas');
const kCtx = kCanvas.getContext('2d');
function drawKth(n, k, t1, t2) {
    kCtx.clearRect(0, 0, kCanvas.width, kCanvas.height);
    const bw = 70, gap = 100, sx = (kCanvas.width - (bw * 2 + gap)) / 2;
    const maxH = 140, maxT = Math.max(t1, t2, 1);
    const h1 = (t1 / maxT) * maxH, h2 = (t2 / maxT) * maxH;
    kCtx.fillStyle = '#f59e0b';
    kCtx.fillRect(sx, kCanvas.height - h1 - 25, bw, h1);
    kCtx.fillStyle = '#78350f'; kCtx.font = 'bold 12px Inter'; kCtx.textAlign = 'center';
    kCtx.fillText('Sol 1', sx + bw / 2, kCanvas.height - 8);
    kCtx.fillText(t1.toFixed(1) + 'ms', sx + bw / 2, kCanvas.height - h1 - 32);
    kCtx.fillStyle = '#22c55e';
    kCtx.fillRect(sx + bw + gap, kCanvas.height - h2 - 25, bw, h2);
    kCtx.fillStyle = '#14532d';
    kCtx.fillText('Sol 2', sx + bw + gap + bw / 2, kCanvas.height - 8);
    kCtx.fillText(t2.toFixed(1) + 'ms', sx + bw + gap + bw / 2, kCanvas.height - h2 - 32);
}
function runKth() {
    const n = parseInt($('#sim-n').value), k = parseInt($('#sim-k').value);
    const t1 = n * Math.log2(n) * 0.012;
    const t2 = n * k * 0.0012;
    drawKth(n, k, t1, t2);
    const insight = $('#sim-insight');
    if (t1 < t2) insight.innerHTML = `<strong>Solution 1 wins!</strong> When k is relatively large, O(N log N) beats O(N×k).`;
    else insight.innerHTML = `<strong>Solution 2 wins!</strong> When k is very small, maintaining a small sorted array is faster.`;
}
$('#sim-n').addEventListener('input', e => {
    $('#sim-n-val').textContent = e.target.value;
    $('#sim-k').max = parseInt(e.target.value) - 1;
    if (parseInt($('#sim-k').value) >= parseInt(e.target.value)) {
        $('#sim-k').value = parseInt(e.target.value) - 1;
        $('#sim-k-val').textContent = $('#sim-k').value;
    }
});
$('#sim-k').addEventListener('input', e => $('#sim-k-val').textContent = e.target.value);
$('#sim-run').addEventListener('click', runKth);
runKth();

$('#show-hint').addEventListener('click', () => {
    $('#hint-text').style.display = 'block';
    $('#show-hint').style.display = 'none';
});

// ===== Math Calculators =====
function calcExp() {
    const base = parseInt($('#e-base').value) || 2;
    const a = parseInt($('#e-a').value) || 0;
    const b = parseInt($('#e-b').value) || 0;
    $('#e-r1').textContent = Math.pow(base, a + b);
    const pb = parseInt($('#e-p-base').value) || 2;
    const pa = parseInt($('#e-p-a').value) || 0;
    const pb2 = parseInt($('#e-p-b').value) || 0;
    $('#e-r2').textContent = Math.pow(Math.pow(pb, pa), pb2);
    const n = parseInt($('#e-n').value) || 0;
    $('#e-r3').textContent = Math.pow(2, n + 1);
}
['e-base','e-a','e-b','e-p-base','e-p-a','e-p-b','e-n'].forEach(id => {
    const el = $('#' + id); if (el) el.addEventListener('input', calcExp);
});

function calcLog() {
    const a = parseFloat($('#log-in').value) || 1;
    $('#log-r').textContent = (Math.log2(a)).toFixed(2);
    const m1 = parseFloat($('#log-m1').value) || 1;
    const m2 = parseFloat($('#log-m2').value) || 1;
    $('#log-r2').textContent = (Math.log2(m1 * m2)).toFixed(2);
    const d1 = parseFloat($('#log-d1').value) || 1;
    const d2 = parseFloat($('#log-d2').value) || 1;
    $('#log-r3').textContent = (Math.log2(d1 / d2)).toFixed(2);
}
['log-in','log-m1','log-m2','log-d1','log-d2'].forEach(id => {
    const el = $('#' + id); if (el) el.addEventListener('input', calcLog);
});

$('#arith-calc').addEventListener('click', () => {
    const n = parseInt($('#arith-n').value) || 1;
    $('#arith-r').textContent = (n * (n + 1) / 2).toLocaleString();
});
$('#arith-calc2').addEventListener('click', () => {
    const n = parseInt($('#arith-n2').value) || 1;
    $('#arith-r2').textContent = (n * (n + 1) * (2 * n + 1) / 6).toLocaleString();
});
$('#geo-calc').addEventListener('click', () => {
    const r = parseFloat($('#geo-r').value) || 0.5;
    $('#geo-rslt').textContent = (1 / (1 - r)).toFixed(4);
});

// ===== Proof Techniques =====
$$('.proof-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        $$('.proof-tab').forEach(t => t.classList.remove('active'));
        $$('.proof-content').forEach(c => c.classList.remove('active'));
        tab.classList.add('active');
        $(`#proof-${tab.dataset.proof}`).classList.add('active');
    });
});

// Fibonacci bars
const fibContainer = $('#fib-bars');
const fibVals = [1,1,2,3,5,8,13,21,34,55,89,144];
const fibMax = Math.max(...fibVals);
fibVals.forEach((v, i) => {
    const bar = document.createElement('div'); bar.className = 'fib-bar' + (i === 10 ? ' highlight' : '');
    const h = Math.max(16, (v / fibMax) * 90);
    bar.innerHTML = `<span class="fib-bar-val">${v}</span><div class="fib-bar-h" style="height:${h}px"></div><span class="fib-bar-idx">F<sub>${i}</sub></span>`;
    fibContainer.appendChild(bar);
});

// Induction demo
const indSteps = [
    "Base Case (n=1): 1 = 1(2)/2 = 1 ✓",
    "Assume true for n=k: 1+2+...+k = k(k+1)/2",
    "For n=k+1: sum = k(k+1)/2 + (k+1) = (k+1)(k+2)/2 ✓",
    "Therefore, by induction, the formula holds for all n ≥ 1!"
];
let indIdx = 0;
$('#ind-run').addEventListener('click', () => {
    if (indIdx >= indSteps.length) indIdx = 0;
    $('#ind-state').textContent = indSteps[indIdx];
    indIdx++;
    $('#ind-run').textContent = indIdx >= indSteps.length ? 'Restart' : 'Next Step';
});

// Contradiction animation
$('#contra-run').addEventListener('click', () => {
    const steps = $$('.c-step');
    steps.forEach(s => s.classList.remove('active'));
    let i = 0;
    const int = setInterval(() => {
        if (i < steps.length) { steps[i].classList.add('active'); i++; }
        else clearInterval(int);
    }, 700);
});

// ===== Quiz =====
let qCur = 0, qScore = 0;
const qTotal = 5;
const qAnswered = [false, false, false, false, false];

function updateQuiz() {
    $$('.quiz-slide').forEach((s, i) => s.classList.toggle('active', i === qCur));
    $('#q-cur').textContent = qCur + 1;
    $('#quiz-bar').style.width = ((qCur / qTotal) * 100) + '%';
    $('#q-prev').disabled = qCur === 0;
    $('#q-next').disabled = !qAnswered[qCur];
}

$$('.q-opt').forEach(opt => {
    opt.addEventListener('click', () => {
        const slide = opt.closest('.quiz-slide');
        const idx = parseInt(slide.dataset.q) - 1;
        if (qAnswered[idx]) return;
        qAnswered[idx] = true;
        const correct = opt.dataset.c === 't';
        const fb = slide.querySelector('.q-feedback');
        slide.querySelectorAll('.q-opt').forEach(o => {
            o.classList.add('disabled');
            if (o.dataset.c === 't') o.classList.add('correct');
        });
        if (correct) {
            qScore++;
            opt.classList.add('correct');
            fb.className = 'q-feedback show-correct';
            fb.textContent = '✅ Correct! Well done.';
        } else {
            opt.classList.add('wrong');
            fb.className = 'q-feedback show-wrong';
            fb.textContent = '❌ Not quite. The correct answer is highlighted.';
        }
        $('#q-next').disabled = false;
    });
});

$('#q-next').addEventListener('click', () => {
    if (qCur < qTotal - 1) { qCur++; updateQuiz(); }
    else {
        $('#quiz-result-panel').classList.add('active');
        $('#score-num').textContent = qScore;
        const msgs = ['Keep studying! 📚', 'Good effort! 💪', 'Nice work! 👍', 'Great job! 🌟', 'Excellent! 🎉', 'Perfect score! 🏆'];
        $('#score-msg').textContent = msgs[qScore];
    }
});
$('#q-prev').addEventListener('click', () => { if (qCur > 0) { qCur--; updateQuiz(); } });
$('#q-restart').addEventListener('click', () => {
    qCur = 0; qScore = 0;
    for (let i = 0; i < qTotal; i++) qAnswered[i] = false;
    $$('.q-opt').forEach(o => o.classList.remove('correct', 'wrong', 'disabled'));
    $$('.q-feedback').forEach(f => { f.className = 'q-feedback'; f.textContent = ''; });
    $('#quiz-result-panel').classList.remove('active');
    updateQuiz();
});
updateQuiz();

// ===== Scroll Animations =====
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
$$('.t-item, .check-item, .info-card, .benefit-card, .flip-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});
// Override with visible class
const style = document.createElement('style');
style.textContent = `.visible { opacity: 1 !important; transform: translateY(0) !important; }`;
document.head.appendChild(style);

// ===== Smooth Scroll =====
$$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        const t = $(a.getAttribute('href'));
        if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

console.log('🚀 CSC3100 Lecture 1 Interactive Page Loaded with Original PPT Images!');
