"use strict";

// todo: Data

const data = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

//UI element
const cardsContainer = document.querySelector(".cards-container");
const labelTracker = document.querySelectorAll(".report");

// time tracking
function displayUI(type) {
  data.forEach((el, i) => {
    const html = `<article class="card card-${i + 1}">
        <div class="card-body">
          <div class="card-upper">
            <h3 class="type">${el.title}</h3>
            <img src="./images/icon-ellipsis.svg" alt="icon-ellipsis" />
          </div>
          <div class="card-lower">
            <h2 class="secondary-title">${el.timeframes[type].current}hrs</h2>
            <p class="small">${
              (type === "daily" && "Yesterday") ||
              (type === "weekly" && "Last Week") ||
              (type === "monthly" && "Last Month")
            } - ${el.timeframes[type].previous}</p>
          </div>
        </div>
    </article>`;
    cardsContainer.insertAdjacentHTML("beforeend", html);
  });
}

// display time track for weekly
displayUI("weekly");

// remove active
function removeActive() {
  labelTracker.forEach((el) => el.classList.remove("active"));
}

labelTracker.forEach((el) => {
  el.addEventListener("click", function () {
    // remove active
    removeActive();

    // remove html
    cardsContainer.innerHTML = "";

    // add active
    el.classList.add("active");

    // time tracking for daily
    if (el.classList.contains("daily")) {
      displayUI("daily");
    }

    // time tracking for weekly
    if (el.classList.contains("weekly")) {
      displayUI("weekly");
    }

    // time tracking for monthly
    if (el.classList.contains("monthly")) {
      displayUI("monthly");
    }
  });
});
