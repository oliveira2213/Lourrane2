// Cole este código em script.google.com (dentro de uma planilha: Extensões > Apps Script)
const SENHA = '@Ooliveira22'; // só você sabe; é a senha do painel

function aba_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  return ss.getSheetByName('eventos') || ss.insertSheet('eventos');
}
function limpa_(v, n) {            // evita fórmulas maliciosas na planilha
  v = String(v || '').slice(0, n);
  return /^[=+\-@]/.test(v) ? "'" + v : v;
}
function doPost(e) {               // o site dela ESCREVE aqui
  try {
    const d = JSON.parse(e.postData.contents);
    aba_().appendRow([new Date(), limpa_(d.sid, 20), limpa_(d.type, 30), limpa_(d.detail, 90)]);
  } catch (err) {}
  return ContentService.createTextOutput('ok');
}
function doGet(e) {                // o painel LÊ aqui, só com a senha
  const out = o => ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
  if (!e.parameter.key || e.parameter.key !== SENHA) return out({ erro: 'senha' });
  const s = aba_(), n = s.getLastRow();
  if (n < 1) return out({ ev: [] });
  const ini = Math.max(1, n - 799);
  const ev = s.getRange(ini, 1, n - ini + 1, 4).getValues()
    .map(r => ({ ts: new Date(r[0]).getTime(), sid: r[1], type: r[2], detail: r[3] }));
  return out({ ev });
}
