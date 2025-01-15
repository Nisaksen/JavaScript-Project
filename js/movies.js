export const movies = [
  {
    id: "1",
    title: "Godzilla: The King of Monsters",
    description:
      "Godzilla: King of the Monsters is an action-packed monster film that follows the story of...",
    genre: "Action",
    price: 139,
    imageUrl: "assets/images/godzilla-cover.jpeg",
    imageAlt: "godzilla moviecard",
  },
  {
    id: "2",
    title: "Toy Story 4",
    description:
      'When a new toy called "Forky" joins Woody and the gang, a road trip alongside old and ...',
    genre: "Animation, Comedy",
    price: 139,
    imageUrl: "assets/images/toystory-cover.jpeg",
    imageAlt: "toy story moviecard",
  },
  {
    id: "3",
    title: "Batman",
    description:
      "When a sadistic serial killer begins murdering key political figures in Gotham, Batman...",
    genre: "Action",
    price: 139,
    imageUrl: "assets/images/batman-cover.jpeg",
    imageAlt: "batman moviecard",
  },
  {
    id: "4",
    title: "The Addams Family Halloween",
    description:
      "The eccentrically macabre family moves to a bland suburb where Wednesday Addams' friendship with the...",
    genre: "Animation, Comedy",
    price: 139,
    imageUrl: "assets/images/addams-cover.jpeg",
    imageAlt: "addams family moviecard",
  },
  {
    id: "5",
    title: "Once Upon a Time in Hollywood",
    description:
      "A faded television actor and his stunt double strive to achieve fame and success in the final years of...",
    genre: "Action, Comedy",
    price: 139,
    imageUrl: "assets/images/hollywood-cover.jpeg",
    imageAlt: "hollywood moviecard",
  },
  {
    id: "6",
    title: "Sweetheart",
    description:
      "A woman washes ashore a small uninhabited island after an accident. The situation turns from bad to...",
    genre: "Thriller",
    price: 139,
    imageUrl: "assets/images/sweetheart-cover.jpeg",
    imageAlt: "sweetheart moviecard",
  },
  {
    id: "7",
    title: "Scream",
    description:
      "25 years after a streak of brutal murders shocked the quiet town of Woodsboro, Calif., a...",
    genre: "Horror, Thriller",
    price: 139,
    imageUrl: "assets/images/scream-cover.jpeg",
    imageAlt: "scream moviecard",
  },
];

// Function to render movie cards
function renderMovies(movieList) {
  const container = document.querySelector(".card-container");
  container.innerHTML = ""; // Clear existing content

  movieList.forEach((movie) => {
    const movieCard = `
        <div class="card">
        <img
          src="${movie.imageUrl}"
          alt="${movie.imageAlt}"
          class="card-img"
        />
        <div class="content-card">
          <h2 class="card-title">${movie.title}</h2>
          <hr />
          <p class="categories">${movie.genre}</p>
          <p class="card-description">${movie.description}</p>
          <p class="price">${movie.price}kr</p>
          <div class="buttons">
            <a href="video-preview.html" class="card-button-view">View</a>
            <a href="" class="add-to-basket-button" data-id="${movie.id}">Add to Basket</a>
          </div>
        </div>
      </div>
      `;

    container.innerHTML += movieCard;
  });

  // "Add to Basket" Button Event Listeners
  // const addButtons = document.querySelectorAll(".add-to-basket-button");
  // addButtons.forEach((button) => {
  //   button.addEventListener("click", (event) => {
  //     const movieId = event.target.getAttribute("data-id");
  //     addToBasket(movieId);
  //   });
  // });
}

// Search Functionality
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-item");

  searchInput.addEventListener("input", (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredMovies = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(searchTerm) ||
        movie.genre.toLowerCase().includes(searchTerm)
    );

    renderMovies(filteredMovies);
  });

  renderMovies(movies);
});
