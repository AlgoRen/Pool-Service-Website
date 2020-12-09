// Loading in elements
branding = $("#branding");
// Listening for button click
window.onclick = (e) => {
  e.preventDefault();
  // Full href of clicked on link
  const isaNavItem = e.target.parentNode.classList.contains("nav-item");
  if (!isaNavItem) {
    console.log("Will be ignored");
    return;
  } else if (e.target.href) {
    console.log("Target link: ", e.target.href);
    comparePage(e.target.href);
  } else {
    // Run function to toggle between work and material section
    console.log(e.target.parentNode.id, "Section toggle");
    goTo(e.target.parentNode.id, true);
  }
};

// Get current page
const comparePage = (thisPage) => {
  // Page the user is on.
  let page = window.location.href;
  console.log("Current page: ", page);

  if (thisPage === page) {
    console.log("page not redirected");
  } else {
    let pageString = thisPage.substring(thisPage.lastIndexOf("/") + 1);
    console.log(pageString);
    goTo(pageString, false);
  }
  //   console.log(page.substring(page.lastIndexOf("/") + 1));
  // Full href user wants to go to.
  //   console.log("Page user wants to go to: ", $(this).find("a")[0].href);
  // goTo(page);
  //   });
};

const goTo = (page, section) => {
  // Determine if page is going to a brand new page
  // or if page is loading a new section within a page.
  if (!section) {
    console.log("Will just load new page....");
    // Send user to appropiate page
    console.log(window.location.host + "/" + page, "getting better");
    const newURL = "/" + page;
    window.location.replace(newURL);
  } else {
    // Determine what page section. Either pool or deck.
    // Add and remove active class to change button look and hide/unhide content.
    console.log("Will just load section");
  }
};

// Determine how section information will be replaced on page:
// Either by hidding and unhiding the html structure
// or dynamically replacing the elements within the page...
// This will be fun, and may be better for reduced initial load times?
