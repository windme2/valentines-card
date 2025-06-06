document.getElementById("open-letter").addEventListener("click", function () {
  const letter = document.getElementById("letter");
  letter.style.display = "block";
  setTimeout(() => {
    letter.style.opacity = 1;
    letter.style.transform = "translateY(0)";
  }, 100);

  setTimeout(function () {
    document.getElementById("popup").style.display = "flex";
    setTimeout(() => {
      document.getElementById("popup").style.opacity = 1;
    }, 100);
  }, 1500);

  startTimeCounter();
});

const startDate = new Date("2017-12-18T00:00:00");

function startTimeCounter() {
  setInterval(function () {
    const now = new Date();
    const timeDiff = now - startDate;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById("days-count").textContent = days;
    document.getElementById("hours-count").textContent =
      hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes-count").textContent =
      minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds-count").textContent =
      seconds < 10 ? "0" + seconds : seconds;
  }, 1000);
}

document.getElementById("close-popup").addEventListener("click", function () {
  document.getElementById("popup").style.opacity = 0;
  setTimeout(() => {
    document.getElementById("popup").style.display = "none";
  }, 500);
});

document.querySelectorAll(".image-item").forEach((image) => {
  image.addEventListener("click", function () {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    lightbox.style.display = "flex";
    lightbox.style.opacity = 1;
    lightboxImg.src = this.src;
  });
});

document.getElementById("close").addEventListener("click", function () {
  const lightbox = document.getElementById("lightbox");
  lightbox.style.opacity = 0;
  setTimeout(function () {
    lightbox.style.display = "none";
  }, 300);
});

document.getElementById("lightbox").addEventListener("click", function (event) {
  if (event.target === this) {
    this.style.opacity = 0;
    setTimeout(function () {
      event.target.style.display = "none";
    }, 300);
  }
});
