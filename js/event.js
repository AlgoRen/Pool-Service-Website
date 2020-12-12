// Loading in elements
branding = $("#branding");
poolSectionHeader = $("#poolContainer span:last-of-Type");
deckSectionHeader = $("#decksContainer span:last-of-Type");
poolSectionButtons = document.querySelectorAll(".nav-item[id^='pool'] ");
console.log(poolSectionHeader);
console.log(poolSectionButtons);
// Listening for button click (with DOM)
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
    console.log(e.target.parentNode.id, " Section toggle");
    console.log(
      e.target.parentElement.nextSibling,
      " Sibling of parent element"
    );
    console.log();
    goTo(e.target.parentNode.id, true);
  }
};

// Listening for button click (with jQuery)
$(poolSectionButtons).click((e) => {
  console.log("The Jquery way");
  console.log(e.target);
  console.log(e.target.parentElement.id);
  poolSectionButtons.forEach((button) => {
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
  // console.log(e.target.parentNode);
  // if (e.target.classList.contains("active")) {
  //   console.log("Is working");
  //   console.log(e.target.classList);
  //   console.log(e.target.parentNode.classList);
  // } else {
  //   console.log("Not working");
  // }
});

// Get current page
const comparePage = (thisPage) => {
  // Page the user is on.
  let page = window.location.href;
  console.log("Current page: ", page);
  console.log(
    "Page starts with: ",
    window.location.href.substring(0, page.indexOf("#"))
  );

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
    changeHeader(page);
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

const applyActiveToButton = () => {};
