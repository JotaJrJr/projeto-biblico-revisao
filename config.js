// Configuração do site de revisão.
// APPS_SCRIPT_URL: Web App do Google Apps Script que grava os pareceres na planilha.
// Vazio = site funciona mas não envia (só localStorage + botão "Baixar backup").
window.REVIEW_CONFIG = {
  APPS_SCRIPT_URL: "https://script.google.com/macros/s/AKfycbx5ZD1_bXkcXTjRRhoWETSdkwyjjhquBbiGw4h4J0MZJJitn4DMKKjppG4AcupsSZoW/exec",
  TOKEN: "pb-CPyrnzl06h7r", // baixa segurança — só evita spam casual. Não é secreto.
};
