const form = document.getElementById("searchForm");
const input = document.getElementById("searchInput");
const results = document.getElementById("results");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const value = input.value;

  fetch(`https://api.tvmaze.com/search/shows?q=${value}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);

      results.innerHTML = ""; // clear old results

      data.forEach(tvShow => {
        const article = document.createElement("article");

        const title = document.createElement("h2");
        title.textContent = tvShow.show.name;

        const link = document.createElement("a");
        link.href = tvShow.show.url;
        link.textContent = "Open show";
        link.target = "_blank";

        const image = document.createElement("img");
        image.src = tvShow.show.image?.medium || "";
        image.alt = tvShow.show.name;

        const summary = document.createElement("div");
        summary.innerHTML = tvShow.show.summary;

        article.appendChild(title);
        article.appendChild(link);
        article.appendChild(image);
        article.appendChild(summary);

        results.appendChild(article);
      });
    });
});
const form = document.getElementById("searchForm");
const input = document.getElementById("searchInput");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const value = input.value;

  fetch(`https://api.tvmaze.com/search/shows?q=${value}`)
    .then(response => response.json())
    .then(data => {
      console.log(data); // THIS is the main requirement
    });
});