const form = document.querySelector(".greeting");
const input = form.querySelector(".greeting__input");
const message = form.querySelector(".greeting__message");
const USER_NAME = "userName";
const IS_HIDE = "isHide";

form.onsubmit = handleSubmit;
displayForm();

function handleSubmit() {
  event.preventDefault();
  localStorage.setItem(USER_NAME, input.value);
  displayForm();
  input.value = null;
}

function displayForm() {
  const userName = localStorage.getItem(USER_NAME);
  if (userName === null) {
    input.classList.remove(IS_HIDE);
  } else {
    input.classList.add(IS_HIDE);
    message.textContent = `Greeting!!! ${userName}`;
  }
}
