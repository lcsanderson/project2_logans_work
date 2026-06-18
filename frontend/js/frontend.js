// Grab the input element by its id
// Allows for search bar to return elements on hitting Enter on keyboard
  const searchInput = document.getElementById('recipeSearch');
 
  // Listen for any key press while the input is focused
  searchInput.addEventListener('keydown', function(e) {
 
    // Only proceed if the key pressed was Enter AND the input isn't empty/whitespace
    if (e.key === 'Enter' && this.value.trim()) {
 
      // TODO: replace this with your actual filter/search logic
      // e.g. filterRecipes(this.value.trim());
      console.log('Searching for:', this.value.trim());
    }
  });