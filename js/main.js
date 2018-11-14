
window.onload = function() {

var button = document.getElementById('buttonGenerateCode');

button.addEventListener('click', function() {

    var generatedCodeGoalkeepers = document.getElementById('generatedCodeGoalkeepers');
    var generatedCodeDefenders = document.getElementById('generatedCodeDefenders');
    var generatedCodeMidfielder = document.getElementById('generatedCodeMidfielder');
    var generatedCodeAttacker = document.getElementById('generatedCodeAttacker');
    var generatedCodePlayer = document.getElementById('generatedCodePlayer');
    var multipleInput = document.getElementById('multiple-input');
    var formGenerator = document.getElementById('formGenerator').elements;

    for(var i=1; i <= multipleInput.files.length;i++) {
      var nameFile = [];
      var nameFileSplit = [];
      var nameFileSplitPosition = [];
      var geberatedCode = '';
      var text = '';

      nameFile = multipleInput.files[i-1].name;
      nameFileSplit = nameFile.split('-');
      nameFileSplitPosition = nameFileSplit[3].split('.');

      generatedCode =
      "<div class='player-container'>"+
        "<div class='player-img' style='background:url('/wp-content/uploads/"+formGenerator[0].value+"/"+formGenerator[1].value+"/"+nameFileSplit[0]+"-"+nameFileSplit[1]+"-"+nameFileSplit[2]+"-"+nameFileSplitPosition[0]+".jpg');background-size: contain;'>"+
          "<div class='player-overlay'></div>"+
          "<div class='player-text'>"+nameFileSplit[1]+"<br>"+nameFileSplit[2]+"</div>"+
        "</div>"+
      "</div>";
      var text = document.createTextNode(generatedCode);

      if(nameFileSplitPosition[0] === 'bramkarz') {
        generatedCodeGoalkeepers.appendChild(text);
      }

      if(nameFileSplitPosition[0] === 'obronca') {
        generatedCodeDefenders.appendChild(text);
      }

      if(nameFileSplitPosition[0] === 'pomocnik') {
        generatedCodeMidfielder.appendChild(text);
      }

      if(nameFileSplitPosition[0] === 'napastnik') {
        generatedCodeAttacker.appendChild(text);
      }

      if(nameFileSplitPosition[0] === 'zawodnik') {
        generatedCodePlayer.appendChild(text);
      }

    }
});

function updateMonthAddedPhoto() {
  var parent = document.getElementById('monthAddedPhoto');
  var date = new Date();
  for(var i=1;i<=12;i++) {
    var option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    if(i==date.getMonth()+1) {
      option.setAttribute("selected","selected");
    }
    parent.appendChild(option);
  }
}

function updateYearAddedPhoto() {
  var parent = document.getElementById('yearAddedPhoto');
  var date = new Date();
  for(var i=date.getFullYear()-5;i<=date.getFullYear();i++) {
    var option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    if(i==date.getFullYear()) {
      option.setAttribute("selected","selected");
    }
    parent.appendChild(option);
  }
}

updateMonthAddedPhoto();
updateYearAddedPhoto();

}
