// Open a project note when navigating to its anchor, including on a direct visit.
function revealProjectNote() {
  const id = window.location.hash.slice(1);
  const section = document.getElementById(id);
  if (section instanceof HTMLDetailsElement) section.open = true;
}
window.addEventListener('hashchange', revealProjectNote);
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    const section = document.getElementById(link.getAttribute('href').slice(1));
    if (section instanceof HTMLDetailsElement) section.open = true;
  });
});
revealProjectNote();
document.getElementById('year').textContent = new Date().getFullYear();
