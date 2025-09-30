const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

const grid = document.getElementById('demo-grid');
const filterButtons = Array.from(document.querySelectorAll('.chip'));
let demos = [];
let activeFilter = 'all';

function renderGrid() {
  if (!grid) return;
  const items = demos.filter(d => {
    if (activeFilter === 'all') return true;
    return d.tags && d.tags.includes(activeFilter);
  });
  grid.innerHTML = items.map(item => {
    const tags = (item.tags || []).map(t => `<span class="tag">#${t}</span>`).join('');
    const audioSrc = `demos/audio/${item.file}`;
    return `
      <article class="card" role="region" aria-label="${item.title}">
        <div class="card-body">
          <h3 class="card-title">${item.title}</h3>
          <div class="card-tags">${tags}</div>
          <audio controls preload="none" src="${audioSrc}"></audio>
        </div>
      </article>
    `;
  }).join('');
}

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    activeFilter = btn.dataset.filter || 'all';
    renderGrid();
  });
});

fetch('demos/demo_config.json')
  .then(res => res.ok ? res.json() : [])
  .then(json => { demos = json; renderGrid(); })
  .catch(() => { demos = []; renderGrid(); });


