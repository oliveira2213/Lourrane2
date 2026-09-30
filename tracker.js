import { URL_SCRIPT, configurado } from './config.js';
if (configurado) {
  const sid = Math.random().toString(36).slice(2, 10);
  window.track = (type, detail = '') => {
    fetch(URL_SCRIPT, { method: 'POST', mode: 'no-cors', keepalive: true, headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({ sid, type, detail: String(detail).slice(0, 90) }) }).catch(() => {});
  };
  track('visita');
  setInterval(() => { if (!document.hidden) track('ativo'); }, 30000);
  document.addEventListener('visibilitychange', () => track(document.hidden ? 'saiu' : 'voltou'));
}
