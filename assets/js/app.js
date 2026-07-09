function getWatch(slug) {
  return window.WATCHES.find((w) => w.slug === slug);
}

function renderGallery(container) {
  const watches = window.WATCHES;

  container.innerHTML = watches
    .map(
      (watch) => `
    <li class="gallery-card">
      <a class="gallery-link" href="watch.html?slug=${watch.slug}">
        <figure class="gallery-image">
          <img src="${watch.cover}" alt="${watch.name}" loading="lazy" width="800" height="1000">
        </figure>
        <h2 class="gallery-name">${watch.name}</h2>
      </a>
    </li>`
    )
    .join("");
}

function renderWatch(container) {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");
  const watch = getWatch(slug);

  if (!watch) {
    container.innerHTML =
      '<p class="watch-description">Watch not found. <a href="index.html">Return home</a>.</p>';
    document.title = "Not found — Daisy Watches";
    return;
  }

  document.title = `${watch.name} — Daisy Watches`;

  container.innerHTML = `
    <a class="back-link" href="index.html">← All watches</a>
    <header class="watch-header">
      <h1 class="watch-name">${watch.name}</h1>
      <p class="watch-description">${watch.description}</p>
    </header>
    <ul class="watch-gallery">
      ${watch.images
        .map(
          (img) => `
        <li class="watch-photo">
          <img src="${img.src}" alt="${img.alt}" loading="lazy">
        </li>`
        )
        .join("")}
    </ul>`;
}
