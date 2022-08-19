/* ==================== DYNAMIC COPYRIGHT YEAR ==================== */
function copyright() {
    
  copyrightYear = new Date().getFullYear();
  copyFinal = "© "  + copyrightYear + " Made by IgnacioPrados";
  document.getElementById("copyright").innerText = copyFinal;
};
copyright();