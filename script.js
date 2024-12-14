const searchBar = document.getElementById('searchBar');
const searchButton = document.getElementById('searchButton');

// Function to handle the search and redirect to Google
function redirectToGoogleSearch() {
  const query = searchBar.value;
  if (query) {
    // Create the Google search URL with the user's query
    const googleSearchURL = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    // Redirect to the Google search page
    window.location.href = googleSearchURL;
  } else {
    alert("Please enter a search term.");
  }
}

// Event listener for the search button
searchButton.addEventListener('click', redirectToGoogleSearch);

// Optional: allow pressing "Enter" to trigger the search
searchBar.addEventListener('keypress', (event) => {
  if (event.key === "Enter") {
    redirectToGoogleSearch();
  }
});
