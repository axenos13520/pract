let header = document.querySelector("header");
let header_button = document.querySelector(".mobile_icon");
let add_new_photo = document.querySelector("#add_new_photo");
let photo_grid = document.querySelector("#grid");

function close_popup() {
  header.classList.add("not-open");
  header.classList.remove("open");
}

header_button.addEventListener("click", () => {
  header.classList.add("open");
  header.classList.remove("not-open");
});

document.querySelector("#grid").addEventListener("click", close_popup, false);

document
  .querySelector("header .popup")
  .addEventListener("click", close_popup, false);

document.querySelector("#show_add_photo").addEventListener("click", () => {
  add_new_photo.classList.add("open");
});

document.querySelector("#cancel").addEventListener("click", () => {
  add_new_photo.classList.remove("open");
});

document.querySelector("#add_photo").addEventListener("click", () => {
  let src = document.querySelector("#new_photo_src").value;
  let text = document.querySelector("#new_photo_text").value;
  if (src) {
    let new_photo_div = document.createElement("div");
    new_photo_div.classList.add("photo");
    let new_img = document.createElement("img");
    new_img.src = src;
    new_photo_div.append(new_img);
    let new_p = document.createElement("p");
    new_p.innerText = text ? text : "Default text";
    new_photo_div.append(new_p);
    photo_grid.prepend(new_photo_div);
    add_new_photo.classList.remove("open");
    new_photo_div.addEventListener("click", open_photo, false);
    document.querySelector("#new_photo_src").value = "";
    document.querySelector("#new_photo_text").value = "";
  } else {
    document.querySelector("#new_photo_src").classList.add("error");
  }
});

popup_photo = document.querySelector("#popup_photo");

function open_photo() {
  let src = this.querySelector("img").src;
  popup_photo.querySelector("img").src = src;
  popup_photo.classList.add("open");
}

let photos = document.querySelectorAll(".photo");
for (let photo of photos) {
  photo.addEventListener("click", open_photo, false);
}

popup_photo.addEventListener("click", () => {
  popup_photo.classList.remove("open");
});
