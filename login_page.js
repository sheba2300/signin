function saveUsername(){
  var input = document.getElementById("user").value;
  alert(input);
  localStorage.setItem("user", input);
  alert("Hi, "+ localStorage.getItem("user"));
}
