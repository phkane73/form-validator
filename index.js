window.addEventListener("load", function () {
  var fullname = document.getElementById("fullname");
  var email = document.getElementById("email");
  var submit = document.getElementById("submit");
  var mess = document.querySelectorAll(".form-message");
  var checkboxs = document.querySelectorAll(".checkbox");

  const success = "&#10004;passed!";
  const error = "&#10006;check again!";
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var test = [false, false];
  fullname.addEventListener("blur", function () {
    if (fullname.value.length > 1) {
      fullname.classList.add("border-success");
      fullname.classList.remove("border-error");
      mess[0].innerHTML = success;
      mess[0].classList.add("success");
      mess[0].classList.remove("error");
      test[0] = true;
    } else {
      fullname.classList.add("border-error");
      fullname.classList.remove("border-success");
      mess[0].innerHTML = error;
      mess[0].classList.add("error");
      mess[0].classList.remove("success");
      test[0] = false;
    }
  });

  email.addEventListener("blur", function () {
    if (re.test(email.value)) {
      email.classList.add("border-success");
      email.classList.remove("border-error");
      mess[1].innerHTML = success;
      mess[1].classList.add("success");
      mess[1].classList.remove("error");
      test[1] = true;
    } else {
      email.classList.add("border-error");
      email.classList.remove("border-success");
      mess[1].innerHTML = success;
      mess[1].classList.add("error");
      mess[1].classList.remove("success");
      test[1] = false;
    }
  });

  submit.addEventListener("click", function () {
    event.preventDefault();
    for (let i = 0; i < test.length; i++) {
      if (test[i]) {
        window.localStorage.setItem("fullname", fullname.value);
        window.localStorage.setItem("email", email.value);

        var languages = [];
        for (let i = 0; i < checkboxs.length; i++) {
          if (checkboxs[i].checked) {
            languages.push(checkboxs[i].id);
          }
        }
        window.localStorage.setItem("languages", languages);
        window.location.replace("submit.html");
      } else {
        alert("Vui lòng nhập đúng thông tin");
        return;
      }
    }
  });
});
