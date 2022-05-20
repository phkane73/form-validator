window.addEventListener("load", function () {
  var namesm = window.localStorage.getItem("fullname");
  var emailsm = window.localStorage.getItem("email");
  var languagessm = window.localStorage.getItem("languages").split(",");

  var h1 = document.getElementsByTagName("h1");
  var h2 = document.getElementsByTagName("h2");
  var ul = document.getElementsByTagName("ul");

  h1[0].innerHTML = "Họ và tên:" + namesm;
  h2[0].innerHTML = "Email: " + emailsm;
  ul[0].innerHTML = "Các ngôn ngữ đã biết";
  for (let i = 0; i < languagessm.length; i++) {
    ul[0].innerHTML += "<li>" + languagessm[i] + "</li>";
  }
});
