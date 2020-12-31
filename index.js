var theme = "dark";
var state = "all"

updateState();
$(".themeswitch").on("click", switchtheme);
$(".addBtn").on("click", addItem);
$(".allBtn").on("click", showAll);
$(".activeBtn").on("click", showActive);
$(".completedBtn").on("click", showCompleted);
$(".clearBtn").on("click", clear);

function switchtheme() {
  if (theme == "dark") {
    var elems = $(".dark-theme")
    elems.addClass("light-theme");
    elems.removeClass("dark-theme");
    $("body").addClass("light-bg");
    $("body").removeClass("dark-bg");
    $("#bg-img").attr("src", "images/bg-desktop-light.jpg");
    theme = "light";
  } else {
    var elems = $(".light-theme")
    elems.addClass("dark-theme");
    elems.removeClass("light-theme");
    $("body").addClass("dark-bg");
    $("body").removeClass("light-bg");
    $("#bg-img").attr("src", "images/bg-desktop-dark.jpg");
    theme = "dark";
  }
}

function updateState() {
  if (state == "all") {
    $(".allBtn").addClass("blue");
    $(".activeBtn").removeClass("blue");
    $(".completedBtn").removeClass("blue");
  } else if (state == "active") {
    $(".allBtn").removeClass("blue");
    $(".activeBtn").addClass("blue");
    $(".completedBtn").removeClass("blue");
  } else {
    $(".allBtn").removeClass("blue");
    $(".activeBtn").removeClass("blue");
    $(".completedBtn").addClass("blue");
  }
}

function updateCounter() {
  var totalItems = $(".todo-item").length;
  var checkedItems = $(".checked").length;
  var remainingItems = totalItems - checkedItems;
  if (remainingItems > 1) {
    $(".counter").html(remainingItems + " items remain.");
  } else if (remainingItems == 1) {
    $(".counter").html("1 item remains.");
  } else {
    $(".counter").html("No items remain!");
  }
}

function addItem() {
  console.log("foo");
  var list = document.getElementById("tdList");
  var listAdd = document.getElementById("input");
  var item = document.createElement("li")
  if (listAdd.value != "") {
    item.setAttribute('id', listAdd.value);
    item.appendChild(document.createTextNode(listAdd.value));
    if (theme == "dark") {
      item.classList.add("list-group-item", "todo-item", "dark-theme")
    } else {
      item.classList.add("list-group-item")
    }
    list.appendChild(item);
  }
  updateCounter();
}

function clear() {
  $(".checked").remove();
}

function showAll() {
  state = "all";
  updateState();
  $(".todo-item").slideDown();
}

function showActive() {
  state = "active";
  updateState();
  $(".checked").slideUp();
  $(".todo-item").not(".checked").slideDown();
}

function showCompleted() {
  state = "completed";
  updateState();
  $(".checked").slideDown();
  $(".todo-item").not(".checked").slideUp();
}

var lst = document.querySelector('#tdList');
lst.addEventListener('click', function(ev) {
  ev.target.classList.toggle('checked');
  updateCounter();
})
