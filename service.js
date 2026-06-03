const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const s = SERVICES[id];

if (!s) { window.location.href = 'index.html#services'; }

document.getElementById('pageTitle').textContent = s.title + ' — Ramak Jaberizadeh, RP(Q)';

const icon = document.getElementById('serviceIcon');
icon.innerHTML = s.icon;
icon.style.background = s.iconBg;

document.getElementById('serviceTitle').textContent = s.title;
document.getElementById('serviceSubtitle').textContent = s.subtitle;
document.getElementById('metaDuration').textContent = s.duration;
document.getElementById('metaPrice').textContent = s.price;
document.getElementById('metaFormat').textContent = s.format;
document.getElementById('serviceAbout').textContent = s.about;

document.getElementById('sidebarDuration').textContent = s.duration;
document.getElementById('sidebarPrice').textContent = s.price;
document.getElementById('sidebarFormat').textContent = s.format;

document.getElementById('serviceTags').innerHTML =
  s.tags.map(t => `<span class="tag">${t}</span>`).join('');

document.getElementById('serviceBenefits').innerHTML =
  s.benefits.map(b => `<li>${b}</li>`).join('');

document.getElementById('serviceWhoHelps').innerHTML =
  s.whoHelps.map(w => `<li>${w}</li>`).join('');

document.getElementById('serviceProcess').innerHTML =
  s.process.map((p, i) => `<li><span class="process__num">${i + 1}</span> ${p}</li>`).join('');

document.getElementById('serviceWhatToExpect').textContent = s.whatToExpect;

const otherServices = s.otherServices.map(oid => SERVICES[oid]).filter(Boolean);
document.getElementById('otherServices').innerHTML = otherServices.map(o => `
  <li class="other-services__item" onclick="window.location='service.html?id=${o.id}'" style="cursor:pointer">
    <div class="other-services__icon">${o.icon}</div>
    <div>
      <strong>${o.title}</strong>
      <span>${o.duration} · ${o.price}</span>
    </div>
  </li>
`).join('');
