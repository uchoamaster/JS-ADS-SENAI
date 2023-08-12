const tag = document.getElementById("tag");
const result = document.getElementById("results");
const loading = document.getElementById("loading");

const searchCat = (event) => {
  result.style.display = "none";
  loading.style.display = "block";

  const url = `https://cataas.com/cat/${tag.value}`;

  fetch(url)
    .then((response) => {
      if (response.ok) {
        showResult(url);
      } else if (response.status === 404) {
        swal("Cat not found", "Cat not found, try new tag", "info");
      } else {
        swal("Error", "Something went wrong", "error");
      }
    })
    .catch((error) => {
      swal("Error", "Something went wrong", "error");
    })
    .finally(() => {
      loading.style.display = "none";
    });

  event.preventDefault();
  return false;
};

const showResult = (cat) => {
  result.style.display = "block";
  let html = `
    <div class="card">
        <img src="${cat}" alt="cat">
    </div>
    `;
  result.innerHTML = html;
};
