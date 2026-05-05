const ARRIVALS = [
  { target: new Date('2026-06-18T00:00:00'), ids: { d: 'e-days', h: 'e-hours', m: 'e-minutes', s: 'e-seconds' } },
  { target: new Date('2026-06-27T00:00:00'), ids: { d: 'i-days', h: 'i-hours', m: 'i-minutes', s: 'i-seconds' } },
];

function pad(n) {
  return String(n).padStart(2, '0');
}

export function startArrivals() {
  function tick() {
    const now = Date.now();
    for (const { target, ids } of ARRIVALS) {
      const diff = target - now;
      if (diff <= 0) {
        document.getElementById(ids.d).textContent = '00';
        document.getElementById(ids.h).textContent = '00';
        document.getElementById(ids.m).textContent = '00';
        document.getElementById(ids.s).textContent = '00';
        continue;
      }
      document.getElementById(ids.d).textContent = Math.floor(diff / 86400000);
      document.getElementById(ids.h).textContent = pad(Math.floor((diff % 86400000) / 3600000));
      document.getElementById(ids.m).textContent = pad(Math.floor((diff % 3600000) / 60000));
      document.getElementById(ids.s).textContent = pad(Math.floor((diff % 60000) / 1000));
    }
  }

  tick();
  setInterval(tick, 1000);
}
