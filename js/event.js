// Loading in elements
branding = $("#branding");
poolSectionHeader = $("#poolContainer span:last-of-Type");
deckSectionHeader = $("#deckContainer span:last-of-Type");
poolSectionButtons = document.querySelectorAll(".nav-item[id^='pool'] ");
deckSectionButtons = document.querySelectorAll(".nav-item[id^='deck'] ");
console.log(poolSectionHeader);
console.log(poolSectionButtons);
// Listening for button click (with DOM)
window.onclick = (e) => {
  // e.preventDefault();
  // Full href of clicked on link
  const isaNavItem = e.target.parentNode.classList.contains("nav-item");
  if (!isaNavItem) {
    console.log("Will be ignored");
    return;
  } else if (e.target.href) {
    console.log("Target link: ", e.target.href);
    // comparePage(e.target.href);
  } else {
    // Run function to toggle between work and material section
    console.log(e.target.parentNode.id, " Section toggle");
    console.log(
      e.target.parentElement.nextSibling,
      " Sibling of parent element"
    );
    goTo(null, e.target.parentNode.id, true);
  }
};

// Listening for button click (with jQuery)
$(poolSectionButtons).click((e) => {
  e.preventDefault();
  applyActiveToButton(e);
});

$(deckSectionButtons).click((e) => {
  e.preventDefault();
  applyActiveToButton(e);
});

// Get current page
const comparePage = (targetPage) => {
  // Page the user is on.
  let currentPage = window.location.href;
  console.log("Current page: ", currentPage);
  console.log("Target Page: ", targetPage);

  if (targetPage === currentPage) {
    console.log("page not redirected");
  } else {
    // See if the page starts with a # or contains .html in its href.
    // If so do something for each of those cases.

    goTo(currentPage, targetPage, false);
  }
};

const goTo = (currentPage, targetPage, section) => {
  // Determine if page is going to a brand new page
  // or if page is loading a new section within a page.
  if (!section) {
    // Send user to appropiate page
    window.location.replace(currentPage, targetPage);
  } else {
    // Determine what page section. Either pool or deck.
    // Add and remove active class to change button look and hide/unhide content.
    console.log("Will just load section");
    changeHeader(targetPage);
  }
};

// Determine how section information will be replaced on page:
// Either by hidding and unhiding the html structure
// or dynamically replacing the elements within the page...
// This will be fun, and may be better for reduced initial load times?

const changeHeader = (page) => {
  console.log(page);
  switch (page) {
    case "poolMaterial":
      poolSectionHeader[0].innerText = "Material";
      break;
    case "poolWork":
      poolSectionHeader[0].innerText = "Work";
      break;
    case "deckMaterial":
      deckSectionHeader[0].innerText = "Material";
      break;
    case "deckWork":
      deckSectionHeader[0].innerText = "Work";
      break;
    default:
      break;
  }
};

const toggleSections = (show) => {
  // if workContainer does not have hidden class then show()
  // else add hidden class to materialContainer
  // if workContainer does have hidden class then hide()
  // and show materialContainer and remove hidden class
};

const applyActiveToButton = (e) => {
  poolSectionButtons.forEach((button) => {
    // Does this button equal the clicked on li?
    console.log(button.id, " the child element of button");
    console.log(button.children[0], " the p tag");
    if (button.id === e.target.parentElement.id) {
      console.log(true);
      $(button.children[0]).addClass("active");
    } else {
      console.log(false);
      $(button.children[0]).removeClass("active");
    }
    // Add hidden class from this elements parent container
    // Remove class from the sibling parent container
  });
  deckSectionButtons.forEach((button) => {
    // Does this button equal the clicked on li?
    console.log(button, " in this function");
    console.log(button.id, " the child element of button");
    console.log(button.children[0], " the p tag");
    if (button.id === e.target.parentElement.id) {
      console.log(true);
      $(button.children[0]).addClass("active");
    } else {
      console.log(false);
      $(button.children[0]).removeClass("active");
    }
  });
};
