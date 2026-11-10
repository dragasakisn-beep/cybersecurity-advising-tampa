const search = document.querySelector('#resource-search');
if (search) {
  const links = Array.from(document.querySelectorAll('.resource'));
  const count = document.querySelector('#resource-count');
  search.addEventListener('input', () => {
    const term = search.value.trim().toLowerCase();
    let shown = 0;
    for (const link of links) {
      link.hidden = !link.textContent.toLowerCase().includes(term);
      if (!link.hidden) shown++;
    }
    count.textContent = shown ? `${shown} official resource${shown === 1 ? '' : 's'}` : 'No matching resources. Try “portal”, “library”, or “support”.';
  });
}
