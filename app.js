const toggleBtn = document.querySelector(".btn");
toggleBtn.addEventListener("click", () => {
  console.log(document.documentElement);
  document.documentElement.classList.toggle("dark-theme");
});

const articlesContainer = document.querySelector(".articles");
const articlesData = articles
  .map((article) => {
    // destructuring
    const { title, date, length, snippet } = article;
    // format date
    const formatDate = moment(date).format("MMMM Do, YYYY");
    return `      <article class="post">
        <h2>${title}</h2>
        <span>${formatDate}</span>
        <span>${length} min read</span>
        <p>
         ${snippet}
        </p>
      </article>`;
  })
  .join("");
articlesContainer.innerHTML = articlesData;

// console.log(moment);
