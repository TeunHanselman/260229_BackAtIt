
var projectButton = document.getElementById('_projectShow');

var bioButton = document.getElementById("_bioShow");
var bio = document.getElementById("_bio");



var p1Details = document.getElementById('_p1Details');
var p1Image = document.getElementById('_p1Image');

// p1Details.addEventListener('mouseover', () => {
//   p1Image.style.opacity = "100%";
// });

bioButton.addEventListener("click", () => {
  bio.classList.toggle('hidden');
  console.log("yo");

  if (toggleBio == 0) {
    bioButton.innerHTML = "Teun Hanselman is a designer/artist who";
    toggleBio = 1;
  } else {
    bioButton.innerHTML = "Teun Hanselman";
    toggleBio = 0;
  }

  document.querySelectorAll('._projectColumn, ._detailsColumn, ._tagsColumn, hr').forEach(el => {
    el.classList.add('hidden');
  });

  projectButton.innerHTML = "projects";
  toggle = 0;


})

// ---- STARTING CONDITION ---

var toggle = 0;
var toggleBio = 0;

bio.classList.toggle('hidden');

document.querySelectorAll('._projectColumn, ._detailsColumn, ._tagsColumn, hr').forEach(el => {
  el.classList.toggle('hidden');
});

// ---------

document.getElementById('_projectShow').addEventListener('click', () => {
  if (toggle == 0) {
    projectButton.innerHTML = "projects ----- >";
    toggle = 1;
  } else {
    projectButton.innerHTML = "projects";
    toggle = 0;
  }
    bio.classList.add('hidden');
    document.querySelectorAll('._projectColumn, ._detailsColumn, ._tagsColumn, hr').forEach(el => {
      el.classList.toggle('hidden');
  });


  bioButton.innerHTML = "Teun Hanselman";
  toggleBio = 0;

});



var thumbnails = Array.from(document.getElementsByClassName("_projectColumn"));
var titles = Array.from(document.getElementsByClassName("_detailsColumn"));