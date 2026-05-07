/* ===== CONFIG ===== */
// Set to true to show campaign ended overlay
const CAMPAIGN_ENDED = false;

// UPDATE LEADERBOARD WEEKLY — edit this array
const LEADERBOARD = [
  { name: "J*** T.", province: "กรุงเทพฯ", store: "ร้านเบียร์สนามบอล ลาดพร้าว", points: 142 },
  { name: "S*** P.", province: "เชียงใหม่", store: "The Football Bar CM", points: 118 },
  { name: "A*** W.", province: "ขอนแก่น", store: "ฟุตบอลพับ ขอนแก่น", points: 97 },
  { name: "P*** N.", province: "กรุงเทพฯ", store: "Stadium Pub Ratchada", points: 84 },
  { name: "T*** K.", province: "ชลบุรี", store: "Beach Soccer Bar พัทยา", points: 76 },
  { name: "N*** R.", province: "ภูเก็ต", store: "Anchor Bar ภูเก็ต", points: 65 },
  { name: "C*** M.", province: "กรุงเทพฯ", store: "Goal Bar สุขุมวิท", points: 58 },
  { name: "W*** S.", province: "นครราชสีมา", store: "นัดชิงผับ โคราช", points: 51 },
  { name: "M*** B.", province: "สุราษฎร์ธานี", store: "Island Kick Bar สุราษฎร์", points: 43 },
  { name: "R*** C.", province: "กรุงเทพฯ", store: "Matchday Bar ทองหล่อ", points: 37 },
];

// STORES — update as partner list grows
const STORES = [
  { name: "ร้านเบียร์สนามบอล ลาดพร้าว", province: "กรุงเทพฯ", district: "ลาดพร้าว", dist: "0.3 กม." },
  { name: "Stadium Pub Ratchada", province: "กรุงเทพฯ", district: "รัชดาภิเษก", dist: "0.8 กม." },
  { name: "Goal Bar สุขุมวิท", province: "กรุงเทพฯ", district: "สุขุมวิท", dist: "1.2 กม." },
  { name: "Matchday Bar ทองหล่อ", province: "กรุงเทพฯ", district: "ทองหล่อ", dist: "1.5 กม." },
  { name: "The Football Bar CM", province: "เชียงใหม่", district: "เมืองเชียงใหม่", dist: "— กม." },
  { name: "ฟุตบอลพับ ขอนแก่น", province: "ขอนแก่น", district: "เมืองขอนแก่น", dist: "— กม." },
  { name: "Beach Soccer Bar พัทยา", province: "ชลบุรี", district: "พัทยา", dist: "— กม." },
  { name: "Anchor Bar ภูเก็ต", province: "ภูเก็ต", district: "เมืองภูเก็ต", dist: "— กม." },
  { name: "นัดชิงผับ โคราช", province: "นครราชสีมา", district: "เมืองโคราช", dist: "— กม." },
  { name: "Island Kick Bar สุราษฎร์", province: "สุราษฎร์ธานี", district: "เมืองสุราษฎร์ธานี", dist: "— กม." },
  { name: "Kick Off Bar หาดใหญ่", province: "สงขลา", district: "หาดใหญ่", dist: "— กม." },
  { name: "Premier Pub พิษณุโลก", province: "พิษณุโลก", district: "เมืองพิษณุโลก", dist: "— กม." },
];

const FAQS = [
  { q: "ใครสามารถเข้าร่วมได้บ้าง?", a: "ทุกคนที่มี LINE สามารถเข้าร่วมได้ ไม่จำกัดอายุหรือจังหวัด เพียงเพิ่มเพื่อน Carabao Cup LINE OA และเริ่มเล่นได้เลย" },
  { q: "สามารถส่งเซลฟี่ได้กี่ครั้ง?", a: "ไม่จำกัดจำนวนครั้ง ทุกเซลฟี่ที่ผ่านการอนุมัติ = 1 แต้ม ยิ่งเล่นมาก ยิ่งมีสิทธิ์ลุ้นมาก อย่างไรก็ตาม แต่ละภาพต้องเป็นการถ่ายใหม่ในสถานการณ์จริง" },
  { q: "Face Scan คืออะไร ทำไมถึงต้องทำ?", a: "Face Scan ใช้สำหรับยืนยันตัวตนเพียงครั้งแรกของการเข้าร่วม เพื่อป้องกันการสร้างบัญชีปลอมหรือส่งภาพซ้ำ ทำเพียงครั้งเดียวตลอดแคมเปญ" },
  { q: "ทำไมต้องถ่ายจากกล้องในแอป ไม่ใช้รูปจากคลัง?", a: "เพื่อยืนยันว่าภาพถ่ายในวันและเวลาจริง ณ ร้านค้าพาร์ทเนอร์ ป้องกันการใช้ภาพเก่าหรือภาพที่แต่งด้วย AI" },
  { q: "ถ้าแต้มเท่ากันในอันดับที่ 1 จะเกิดอะไรขึ้น?", a: "ทุกคนที่มีแต้มเท่ากันในอันดับสูงสุดจะได้รับสิทธิ์บินดูคาราบาวคัพ Final 2027 ที่เวมบลีย์ทุกคน" },
  { q: "รางวัลเวมบลีย์รวมอะไรบ้าง?", a: "รางวัลประกอบด้วยตั๋วเครื่องบินไป-กลับ, โรงแรม, ค่าเดินทาง, และตั๋วชมการแข่งขัน Carabao Cup Final 2027 ณ Wembley Stadium ลอนดอน" },
  { q: "จะทราบผลอนุมัติเซลฟี่เมื่อไหร่?", a: "ทีมแอดมินจะตรวจสอบและอนุมัติภายใน 24-48 ชั่วโมง แต้มจะถูกอัพเดทเข้าบัญชีของคุณทันทีที่ผ่านการอนุมัติ" },
  { q: "สามารถโอนสิทธิ์รางวัลได้ไหม?", a: "ได้ แต่ต้องมีหนังสือมอบอำนาจเท่านั้น กรุณาติดต่อผู้จัดการแข่งขันผ่าน LINE OA เพื่อดำเนินการ" },
];

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  if (CAMPAIGN_ENDED) showCampaignEnded();
  initNav();
  initHeroParticles();
  initTabs();
  initStores();
  initLeaderboard();
  initFAQ();
  initReveal();
  initStoreSearch();
  setLbDate();
});

/* ===== CAMPAIGN ENDED ===== */
function showCampaignEnded() {
  document.getElementById('campaignEnded').style.display = 'flex';
  document.querySelectorAll('.btn-primary, .nav-cta, .mobile-cta').forEach(el => {
    if (el.href && el.href.includes('line.me')) el.style.pointerEvents = 'none';
  });
}

/* ===== NAV ===== */
function initNav() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });

  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });
}

/* ===== PARTICLES ===== */
function initHeroParticles() {
  const container = document.getElementById('heroParticles');
  if (!container) return;
  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    const size = Math.random() * 3 + 1;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const dur = Math.random() * 8 + 6;
    const delay = Math.random() * 6;
    p.style.cssText = `position:absolute;width:${size}px;height:${size}px;border-radius:50%;background:rgba(45,190,96,${Math.random() * 0.4 + 0.1});left:${x}%;top:${y}%;animation:particleFade ${dur}s ${delay}s ease-in-out infinite;`;
    container.appendChild(p);
  }
  const style = document.createElement('style');
  style.textContent = `@keyframes particleFade{0%,100%{opacity:0;transform:translateY(0) scale(1);}50%{opacity:1;transform:translateY(-30px) scale(1.2);}}`;
  document.head.appendChild(style);
}

/* ===== TABS ===== */
function initTabs() {
  document.querySelectorAll('.tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const tab = btn.dataset.tab;
      document.getElementById('tab-first').classList.toggle('hidden', tab !== 'first');
      document.getElementById('tab-returning').classList.toggle('hidden', tab !== 'returning');
      // re-trigger reveal for newly shown steps
      document.querySelectorAll('.flow-step').forEach(s => {
        if (!s.classList.contains('hidden') && s.closest('.flow:not(.hidden)')) {
          setTimeout(() => s.classList.add('revealed'), 100);
        }
      });
    });
  });
}

/* ===== STORES ===== */
function initStores(filter = '') {
  const grid = document.getElementById('storeGrid');
  const filtered = STORES.filter(s =>
    s.name.toLowerCase().includes(filter.toLowerCase()) ||
    s.province.toLowerCase().includes(filter.toLowerCase()) ||
    s.district.toLowerCase().includes(filter.toLowerCase())
  );
  grid.innerHTML = filtered.length === 0
    ? `<div style="grid-column:1/-1;text-align:center;color:var(--text-muted);padding:40px">ไม่พบร้านค้าที่ตรงกับการค้นหา</div>`
    : filtered.map(s => `
      <div class="store-card">
        <div class="sc-name">${s.name} <span class="sc-dist">${s.dist}</span></div>
        <div class="sc-info">
          <span>📍 ${s.district}, ${s.province}</span>
        </div>
        <span class="sc-badge">✅ ร้านพาร์ทเนอร์</span>
      </div>
    `).join('');
}

function initStoreSearch() {
  const input = document.getElementById('storeSearch');
  input.addEventListener('input', () => initStores(input.value));

  document.getElementById('gpsBtn').addEventListener('click', () => {
    const btn = document.getElementById('gpsBtn');
    btn.textContent = '📡 กำลังหาตำแหน่ง...';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = '📍 ใกล้ฉัน';
      btn.disabled = false;
      initStores('กรุงเทพฯ');
      document.getElementById('storeSearch').value = 'กรุงเทพฯ';
      // Simulate nearest first
      const grid = document.getElementById('storeGrid');
      const note = document.createElement('p');
      note.style.cssText = 'grid-column:1/-1;font-size:0.8rem;color:var(--green);text-align:center;margin-bottom:8px;';
      note.textContent = '📍 แสดงร้านใกล้ตำแหน่งปัจจุบัน (จำลอง)';
      grid.prepend(note);
    }, 1800);
  });
}

/* ===== LEADERBOARD ===== */
function setLbDate() {
  const d = new Date();
  document.getElementById('lbDate').textContent = d.toLocaleDateString('th-TH', { day: 'numeric', month: 'long', year: 'numeric' });
}

function initLeaderboard() {
  const tbody = document.getElementById('lbBody');
  const rankIcons = ['🥇', '🥈', '🥉'];
  const rankClass = ['r1', 'r2', 'r3'];

  tbody.innerHTML = LEADERBOARD.map((u, i) => {
    const r = i + 1;
    const rankDisplay = r <= 3
      ? `<span class="lb-rank ${rankClass[i]}">${rankIcons[i]} ${r}</span>`
      : `<span class="lb-rank ${r <= 7 ? 'top' : ''}">${r}</span>`;
    return `
      <tr>
        <td>${rankDisplay}</td>
        <td class="lb-name">${u.name}</td>
        <td>${u.province}</td>
        <td>${u.store}</td>
        <td class="lb-pts">${u.points}</td>
      </tr>
    `;
  }).join('');
}

/* ===== FAQ ===== */
function initFAQ() {
  const list = document.getElementById('faqList');
  list.innerHTML = FAQS.map((f, i) => `
    <div class="faq-item" id="faq${i}">
      <div class="faq-q" onclick="toggleFaq(${i})">
        <span>${f.q}</span>
        <span class="faq-toggle">+</span>
      </div>
      <div class="faq-a"><div class="faq-a-inner">${f.a}</div></div>
    </div>
  `).join('');
}

function toggleFaq(i) {
  const item = document.getElementById(`faq${i}`);
  const wasOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('open'));
  if (!wasOpen) item.classList.add('open');
}

/* ===== SCROLL REVEAL ===== */
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, idx) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const siblings = [...el.parentElement.querySelectorAll('[data-reveal]')];
        const delay = siblings.indexOf(el) * 80;
        setTimeout(() => el.classList.add('revealed'), delay);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));

  // Flow steps
  const flowObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const steps = entry.target.querySelectorAll('.flow-step');
        steps.forEach((s, i) => setTimeout(() => s.classList.add('revealed'), i * 120));
        flowObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.flow').forEach(f => flowObserver.observe(f));
}

/* ===== SHARE ===== */
function shareLine() {
  const msg = encodeURIComponent('เชียร์บอล เชียร์บาว 🏆 ร่วมสะสมแต้มลุ้นบินดูคาราบาวคัพที่เวมบลีย์! เพิ่มเพื่อน LINE OA: https://line.me/ti/p/@carabaobao');
  window.open(`https://line.me/share/ui?text=${msg}`, '_blank');
}

function shareFb() {
  const url = encodeURIComponent(window.location.href);
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'width=580,height=400');
}
