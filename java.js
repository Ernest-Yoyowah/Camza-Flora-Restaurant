function search() {
    // Get the input value
    var searchInput = document.getElementById("search-input").value;
    
    // Use the input value to search the website
    var results = document.querySelectorAll("*[data-search*='" + searchInput + "']");
    
    // Display the search results
    for (var i = 0; i < results.length; i++) {
      results[i].style.backgroundColor = "yellow";
    }
  }
  