 const searchBtn = document.getElementById("searchBtn");
    const searchInput = document.getElementById("searchInput");
    const movieContainer = document.getElementById("movieContainer");

    const modal = document.getElementById("movieModal");
    const closeModal = document.getElementById("closeModal");
    const modalPoster = document.getElementById("modalPoster");
    const modalTitle = document.getElementById("modalTitle");
    const modalYear = document.getElementById("modalYear");
    const modalGenre = document.getElementById("modalGenre");
    const modalPlot = document.getElementById("modalPlot");

    const apiKey = "f2f08f4"; // Replace with your OMDb API key

    async function getMovies() {
      const query = searchInput.value.trim();
      if (!query) {
        alert("Please enter a movie name!");
        return;
      }

      try {
        const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`);
        const data = await response.json();

        movieContainer.innerHTML = "";

        if (data.Response === "True") {
          data.Search.forEach(movie => {
            const card = document.createElement("div");
            card.className = "bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition p-3 cursor-pointer";
            card.innerHTML = `
              <img src="${movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/300x400?text=No+Image'}" 
                   class="rounded-lg w-full h-80 object-cover mb-3">
              <h3 class="text-lg font-semibold text-indigo-400">${movie.Title}</h3>
              <p class="text-gray-400">${movie.Year}</p>
            `;
            card.addEventListener("click", () => showMovieDetails(movie.imdbID));
            movieContainer.appendChild(card);
          });
        } else {
          movieContainer.innerHTML = `<p class='text-center col-span-full text-gray-400 text-lg'>No movies found!</p>`;
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
        movieContainer.innerHTML = `<p class='text-center col-span-full text-red-400'>Something went wrong!</p>`;
      }
    }

    async function showMovieDetails(id) {
      try {
        const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`);
        const movie = await res.json();

        modalPoster.src = movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/300x400?text=No+Image';
        modalTitle.textContent = movie.Title;
        modalYear.textContent = `Year: ${movie.Year}`;
        modalGenre.textContent = `Genre: ${movie.Genre}`;
        modalPlot.textContent = movie.Plot;

        modal.classList.remove("hidden");
        modal.classList.add("flex");
      } catch (error) {
        alert("Error loading details");
      }
    }

    closeModal.addEventListener("click", () => {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    });

    searchBtn.addEventListener("click", getMovies);
    searchInput.addEventListener("keypress", e => {
      if (e.key === "Enter") getMovies();
    });