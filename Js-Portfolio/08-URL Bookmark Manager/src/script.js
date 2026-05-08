// ====== Bookmark Manager Logic ======

// Select elements
const form = document.getElementById("bookmark-form");
const nameInput = document.getElementById("name");
const urlInput = document.getElementById("url");
const tagsInput = document.getElementById("tags");
const bookmarkList = document.getElementById("bookmark-list");
const searchInput = document.getElementById("search");



let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

// Render bookmarks on page load
renderBookmarks(bookmarks);

// Add bookmark
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const url = urlInput.value.trim();
  const tags = tagsInput.value.trim().split(",").map(t => t.trim()).filter(Boolean);

  if (!name || !url) return alert("Please fill all required fields!");

  const newBookmark = {
    id: Date.now(),
    name,
    url,
    tags
  };

  bookmarks.push(newBookmark);
  saveAndRender();

  form.reset();
});

// Search functionality
searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = bookmarks.filter(
    b =>
      b.name.toLowerCase().includes(query) ||
      b.tags.some(tag => tag.toLowerCase().includes(query))
  );
  renderBookmarks(filtered);
});

// Delete bookmark
function deleteBookmark(id) {
  bookmarks = bookmarks.filter(b => b.id !== id);
  saveAndRender();
}

// Edit bookmark
function editBookmark(id) {
  const bookmark = bookmarks.find(b => b.id === id);
  const newName = prompt("Edit name:", bookmark.name);
  const newUrl = prompt("Edit URL:", bookmark.url);
  const newTags = prompt("Edit tags (comma separated):", bookmark.tags.join(","));

  if (!newName || !newUrl) return alert("Name and URL are required!");

  bookmark.name = newName.trim();
  bookmark.url = newUrl.trim();
  bookmark.tags = newTags.split(",").map(t => t.trim()).filter(Boolean);

  saveAndRender();
}

// Save bookmarks to localStorage and re-render
function saveAndRender() {
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  renderBookmarks(bookmarks);
}

// Render all bookmarks
function renderBookmarks(list) {
  bookmarkList.innerHTML = "";

  if (list.length === 0) {
    bookmarkList.innerHTML = `<p class="text-gray-400 text-center">No bookmarks yet...</p>`;
    return;
  }

  list.forEach(bookmark => {
    const div = document.createElement("div");
    div.className = "bg-gray-800 p-4 rounded flex justify-between items-start shadow-md";

    div.innerHTML = `
      <div>
        <a href="${bookmark.url}" target="_blank" class="text-blue-400 font-semibold text-lg hover:underline">
          ${bookmark.name}
        </a>
        <p class="text-gray-400 text-sm break-all">${bookmark.url}</p>
        ${bookmark.tags.length
          ? `<div class="mt-2 space-x-1">
              ${bookmark.tags.map(tag => `<span class="bg-blue-600 text-xs px-2 py-1 rounded">${tag}</span>`).join("")}
            </div>`
          : ""
        }
      </div>
      <div class="space-x-2">
        <button onclick="editBookmark(${bookmark.id})" class="bg-yellow-500 hover:bg-yellow-600 px-2 py-1 rounded text-sm">Edit</button>
        <button onclick="deleteBookmark(${bookmark.id})" class="bg-red-600 hover:bg-red-700 px-2 py-1 rounded text-sm">Delete</button>
      </div>
    `;

    bookmarkList.appendChild(div);
  });
}
