// Loading in elements
poolSectionHeader = $("#poolContainer span:last-of-Type");
deckSectionHeader = $("#deckContainer span:last-of-Type");
poolSectionButtons = document.querySelectorAll(".nav-item[id^='pool'] ");
deckSectionButtons = document.querySelectorAll(".nav-item[id^='deck'] ");

const loadedPage = location.href.substring(location.href.lastIndexOf("/") + 1);
console.log(loadedPage);
if (loadedPage === "#homeContainer") {
  $("#deckContainer").hide();
  $("#poolContainer").fadeIn();
} else {
  $("#poolContainer").hide();
  $("#deckContainer").fadeIn();
}

if (loadedPage === "#deckContainer") {
  $("#poolContainer").hide();
  $("#deckContainer").fadeIn();
}

if (loadedPage === "#poolContainer") {
  $("#deckContainer").hide();
  $("#poolContainer").fadeIn();
}

// Listening for button clicks for page links (with jQuery)
$("[data-button='home-page']").click(function () {
  console.log("home page");
  if ($("#deckContainer").is(":visible")) {
    $("#deckContainer").hide();
    $("#poolContainer").fadeIn();
  }
});

$("[data-button='pool-page']").click(function () {
  console.log("pool page");
  if ($("#deckContainer").is(":visible")) {
    $("#deckContainer").hide();
    $("#poolContainer").fadeIn();
  }
});

$("[data-button='deck-page']").click(function () {
  console.log("deck page");
  if ($("#poolContainer").is(":visible")) {
    $("#poolContainer").hide();
    $("#deckContainer").fadeIn();
  } else {
    $("#poolContainer").hide();
    $("#deckContainer").fadeIn();
  }
});

$("[data-button='contact-page']").click(function () {
  console.log("contact page");
});

$("[data-button='portfolio-page']").click(function () {
  console.log("portfolio page");
});
// Listening for button clicks of the sections (with jQuery)
// $(poolSectionButtons).click(() => {
//   console.log(this);
// });

// $(deckSectionButtons).click(() => {
//   console.log(this);
// });

// Listening for button clicks of the end of page button (with jQuery)
$("[data-button='moveToDeckPage']").click(function () {
  if ($("#poolContainer").is(":visible")) {
    $("#poolContainer").hide();
    $("#deckContainer").fadeIn();
  } else {
    $("#deckContainer").hide();
    $("#poolContainer").fadeIn();
  }
});

$("[data-button='moveToPoolPage']").click(function () {
  if ($("#poolContainer").is(":visible")) {
    $("#poolContainer").hide();
    $("#deckContainer").fadeIn();
  } else {
    $("#deckContainer").hide();
    $("#poolContainer").fadeIn();
  }
});

// Does the scrolling to top of page if necessary
// $("html, body").animate(
//   {
//     scrollTop: $("#poolContainer").offset().top - 20, //#DIV_ID is an example. Use the id of your destination on the page
//   },
//   "slow"
// );

// Only handles the changing of pages.
function togglePage() {}

// Only handles the toggling of sections
const toggleSections = () => {
  console.log("Registering click");

  $(
    "#poolContainer .workContainer, #poolContainer .materialContainer"
  ).toggle();

  // $(
  //   "#deckContainer .workContainer, #deckContainer .materialContainer"
  // ).toggle();
};

// Applies the Active class to section buttons.
const applyActiveToButton = (e) => {};

// INITIATE THE FOOTER
siteFooter();
// COULD BE SIMPLIFIED FOR THIS PEN BUT I WANT TO MAKE IT AS EASY TO PUT INTO YOUR SITE AS POSSIBLE
$(window).resize(function () {
  siteFooter();
});

function siteFooter() {
  var siteContent = $("#site-content");
  var siteContentHeight = siteContent.height();
  var siteContentWidth = siteContent.width();

  var siteFooter = $("#site-footer");
  var siteFooterHeight = siteFooter.height();
  var siteFooterWidth = siteFooter.width();

  console.log("Content Height = " + siteContentHeight + "px");
  console.log("Content Width = " + siteContentWidth + "px");
  console.log("Footer Height = " + siteFooterHeight + "px");
  console.log("Footer Width = " + siteFooterWidth + "px");

  siteContent.css({
    "margin-bottom": siteFooterHeight + 50,
  });
}

// $("button[data-button='moveToDeckPage']").click(function () {
//   console.log("Going to get mula today...");
// });
// $("button[data-button='moveToPoolPage']").click(function () {
//   console.log("Going to get a lot of mula today...");
// });
