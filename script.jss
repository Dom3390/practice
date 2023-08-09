// Write your code here
const items = document.querySelectorAll('.item')

const options = {
  threshold: 0.5
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in');
    }
  });
}, options)

items.forEach(item => {
  observer.observe(item);
})

d3.select('#mydiv')
  .append('div')
  .attr('id','mydiv')


d3.select('#myDiv')
 .append('h1')
  .text('Hello,D3!')

const svg = d3
    .select("#svg-example")
    .append("svg")
    .attr("width", 400)
    .attr("height", 200)
    .style("background-color","midnightblue")

// Before
$("#elementId").("myButton").addEventListener("click", function() {
    // Code here
});

// After
$("#myButton").on("click", function() {
    // Code here
});

// Before
element.style.opacity = 0;
element.style.display = "none";

// After
$("#elementId").fadeOut();

// Before
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.example.com/data", true);
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        // Process data
    }
};
xhr.send();

// After
$.get("https://api.example.com/data", function(data) {
    // Process data
});

$("#myElement")
    .addClass("highlight")
    .css("color", "blue")
    .slideUp(500);





