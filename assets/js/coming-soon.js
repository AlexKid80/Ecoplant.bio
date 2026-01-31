(function(){
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const btn = document.querySelector("[data-notify]");
  const emailInput = document.querySelector("[data-email]");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const email = (emailInput?.value || "").trim();
    const subject = "EcoPlant — Ενημέρωση για το λανσάρισμα";
    const body =
`Γεια σας EcoPlant,

Θα ήθελα ενημέρωση όταν βγει το site.

Email: ${email || "(γράψτε εδώ)"}

Ευχαριστώ!`;

    const mailto = `mailto:info@ecoplant.bio?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  });
})();
