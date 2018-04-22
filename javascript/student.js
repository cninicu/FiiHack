var userId1 = 2044, skillName1, experienta1;
function adaugaSkills(){
  skillName1 = document.getElementById("skillNames").value;
  $.ajax({
        type: "POST",
        url: "../Code/studAddSkill.php",
        data: ({userId:userId1, skillName: skillName1}),
        success: function(rs){
          var href = window.location;
          window.location=href;
        }
    });
}
function adaugaExps(){
  experienta1 = document.getElementById("experientas").value;
  $.ajax({
        type: "POST",
        url: "../Code/studAddExperienta.php",
        data: ({userId:userId1, experienta: experienta1}),
        success: function(rs){
          var href = window.location;
          window.location=href;
        }
    });
}
function adaugaProjs(){
  proiect1 = document.getElementById("proiect").value;
  $.ajax({
        type: "POST",
        url: "../Code/studAddProjs.php",
        data: ({userId:userId1, proiect: proiect1}),
        success: function(rs){
          var href = window.location;
          window.location=href;
        }
    });
}
function showSkillForm() {
    var x = document.getElementById("formSkill");
    var y = document.getElementById("addSkill");
    if (x.style.display === "block") {
        x.style.display = "none";
        y.style.transform = "rotate(0deg)";
    } else {
        x.style.display = "block";
        y.style.transform = "rotate(45deg)";
    }
}

function showExperienceForm() {
    var x = document.getElementById("formExperience");
    var y = document.getElementById("addExperience");
    if (x.style.display === "block") {
        x.style.display = "none";
        y.style.transform = "rotate(0deg)";
    } else {
        x.style.display = "block";
        y.style.transform = "rotate(45deg)";
    }
}

function showProjectForm() {
    var x = document.getElementById("formProject");
    var y = document.getElementById("addProject");
    if (x.style.display === "block") {
        x.style.display = "none";
        y.style.transform = "rotate(0deg)";
    } else {
        x.style.display = "block";
        y.style.transform = "rotate(45deg)";
    }
}

function addSkill() {
    var skill1 = document.getElementById("addSkillText").value;
    alert(id1 + " " + skill1);
    $.ajax({
        type: "POST",
        URL: "../Code/addStudentSkill.php",
        data: ({id:id1, skill:skill1}),
        success : function (rs) {
            alert(rs)
        }
    })
}

function addExperience() {
    var experience1 = document.getElementById("addExperienceText").value;
    $.ajax({
        type: "POST",
        URL: "../Code/addStudentExperience.php",
        data: ({id:id1, experience:experience1})
    })
}

function addProject() {
    var project1 = document.getElementById("addProjectText").value;
    $.ajax({
        type: "POST",
        URL: "../Code/addStudentProject.php",
        data: ({id:id1, proiect:project1})
    })
}

function searchElements() {
  var nume = document.getElementById("cuvantInserat").value;
  $.ajax({
        type: "POST",
        url: "../Code/search.php",
        data: ({nume: nume}),
        success: function(jsData){
            //alert("ok");
            var p = JSON.parse(jsData);
            //console.log(jsData);
            alert(p[0]["name"]);
            //JSON.parse(jsData);
            //alert(jsData[nume]);
        }
    });
}
function searchElements() {
  var nume = document.getElementById("cuvantInserat").value;
  $.ajax({
        type: "POST",
        url: "",
        data: ({nume: nume}),
        success: function(data){
          var res = data.split(" ");
          location.href = "../html/results.php?nume=" + nume;
          //document.getElementById("toAdd").innerHTML = "Paragraph changed!";

          //alert(res[0] + " " + res[1] + " " + res[2] + " " + res[3])
        }
    });
}
