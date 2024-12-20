// Bookmark Event
const bookmark = document.querySelector(".bookmark-btn");
const spanBookmark = bookmark.querySelector("span");
const radios = document.querySelectorAll(".radio-buttons");

bookmark.addEventListener("click", (e) => {
  bookmark.classList.add("marked");
  spanBookmark.innerText = "Bookmarked";
  bookmark.setAttribute("disabled", true);
});

//Modal Event
const openModal = document.querySelector(".open-modal");
const closeModal = document.querySelector(".close-modal");
// Pledging Modal
const modal = document.querySelector(".modal");
// Success Modal
const modalSuccess = document.querySelector(".modal-success");
const closeSuccess = document.querySelector(".close-success");
openModal.addEventListener("click", (e) => {
  modal.showModal();
});
closeModal.addEventListener("click", (e) => {
  modal.close();
});

// Pledge Dropdown

radios.forEach((element) => {
  let currentlyActive = element;
  element.addEventListener("click", (e) => {
    pledgePricing =
      element.parentNode.parentNode.querySelector(".pledge-pricing");
    pledgePricing.classList.add("show");
    pledgePricing.parentNode.classList.add("active");
    radios.forEach((toRemove) => {
      if (toRemove == currentlyActive) {
      } else {
        toRemove.parentNode.parentNode
          .querySelector(".pledge-pricing")
          .classList.remove("show");
        toRemove.parentNode.parentNode.classList.remove("active");
      }
    });
  });
});

// Pledge Submission
pledgeForms = document.querySelectorAll(".pledge-pricing");
pledgeForms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (form.classList.contains("bamboo")) {
      numberInput = form.querySelector('input[type="number"]');
      if (numberInput.value >= 25 && numberInput.value <= 74) {
        form.querySelector("button").innerHTML = '<span class="loader"></span>';

        successPledge();
        console.log("You choose bamboo");
      }
      //   else {
      //     console.log("no");
      //   }
    } else if (form.classList.contains("stand")) {
      numberInput = form.querySelector('input[type="number"]');
      if (numberInput.value >= 75 && numberInput.value <= 199) {
        form.querySelector("button").innerHTML = '<span class="loader"></span>';
        successPledge();
        console.log("You choose stand");
      }
      //   else {
      //     console.log("no");
      //   }
    } else if (form.classList.contains("mahogany")) {
      numberInput = form.querySelector('input[type="number"]');
      if (numberInput.value >= 200) {
        form.querySelector("button").innerHTML = '<span class="loader"></span>';

        successPledge();
        console.log("You choose mahogany");
      }
      //   else {
      //     console.log("no");
      //   }
    } else {
      form.querySelector("button").innerHTML = '<span class="loader"></span>';
      successPledge();
      console.log("You choose no reward");
    }
  });
});

closeSuccess.addEventListener("click", (e) => {
  modalSuccess.close();
});

const mainPledgeContainers = document.querySelectorAll(
  ".all-pledge-container > *"
);

function successPledge() {
  setTimeout(() => {
    modal.close();
    modalSuccess.showModal();
  }, 4000);

  openModal.setAttribute("disabled", true);
  openModal.innerText = "Backed Project";
  mainPledgeContainers.forEach((element) => {
    element.classList.add("disabled");
    element.querySelector("button").innerText = "Backed Project";
  });
}

const selectRewardBtns = document.querySelectorAll(".select-reward");

selectRewardBtns.forEach((element, key) => {
  element.addEventListener("click", (e) => {
    if (key == 0) {
      modal.showModal();
      location.href = "#bamboo-container";
      check(document.querySelector("#bamboo-container"));
    } else if (key == 1) {
      modal.showModal();
      location.href = "#stand-container";
      check(document.querySelector("#stand-container"));
    } else if (key == 2) {
      modal.showModal();
      location.href = "#mahogany-container";
      check(document.querySelector("#mahogany-container"));
    }
  });
});

const modalPledgeContainers = document.querySelectorAll(
  ".modal-all-pledge-containers > *"
);
let i = 0;

function check(container) {
  container.classList.add("active");
  container.querySelector("form").classList.add("show");
  modalPledgeContainers.forEach((toRemove) => {
    if (toRemove === container) {
      container
        .querySelector("input[type='radio']")
        .setAttribute("checked", true);
    } else {
      toRemove.classList.remove("active");
      toRemove.querySelector("form").classList.remove("show");
      toRemove.querySelector("input[type='radio']").removeAttribute("checked");
    }
  });
}

const burgerMenu = document.querySelector(".burger");
const navLink = document.querySelector(".nav-links");
burgerMenu.addEventListener("click", (e) => {
  burgerMenu.classList.toggle("active");
  navLink.classList.toggle("show");
});