count = 0;
cityName=false;
gender=false;
function openLink(evt, animName, direction) {
  console.log(direction, count);
  var i, x, tablinks;
  x = document.getElementsByClassName("Tabs");
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  if (direction =='right' && count < 2) {
    if (!gender) {
      alert('Please Select Gender First')
      document.getElementsByClassName("Tabs")[count].style.display = "block"
      return;
    }
    if (count>0 && !cityName) {
      alert('Please Select City First')
      document.getElementsByClassName("Tabs")[count].style.display = "block"
      return;
    }
    count ++;
  } else if (direction == 'left' && count > 0) {
    count--;
  }

  pointers = document.getElementsByClassName("pointers");
  for (var i = 0; i < pointers.length; i++) {
    pointers[i].style.display = "block";
  }
  if (count == 2) {
    document.getElementById('rightArrow').style.display = "none";
    document.getElementById('SelectedCity').innerHTML = cityName;
  }
  if (count == 0) {
    document.getElementById('leftArrow').style.display = "none";
  }
  document.getElementById('progressBar').value = 33.33*(count+1);
  document.getElementsByClassName("Tabs")[count].style.display = "block"
  // document.getElementById(animName).style.display = "block";
  // evt.currentTarget.className += " w3-red";
}

function selectCity(name) {
  cityName = name;
  x = document.getElementsByClassName("cityLabel");
  for (i = 0; i < x.length; i++) {
     x[i].style.color = "#93DCCD";
  }

  document.getElementById(name).style.color = "teal";
}

function selectCharacter(name) {
  gender=name;
  x = document.getElementsByClassName("genderImages");
  for (i = 0; i < x.length; i++) {
     x[i].style.opacity = 0.5;
  }
  document.getElementById(name).style.opacity = 1;
}
