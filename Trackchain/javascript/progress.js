const circles = document.querySelectorAll(".circle");
      const btnNext = document.getElementById("next");
      const btnPrev = document.getElementById("prev");
      const progressBar = document.getElementById("progress-bar");
      
      let circleActive = document.querySelector(".active");
      
      btnNext.addEventListener("click", function () {
        circleActive = circleActive.nextElementSibling;
        circleActive.classList.add("active");
        updateProgressBarWidth();
      });
      
      btnPrev.addEventListener("click", function () {
        circleActive.classList.remove("active");
        circleActive = circleActive.previousElementSibling;
        updateProgressBarWidth();
      });
      
      function updateProgressBarWidth() {
        const actives = document.querySelectorAll(".active");
        const currentWidth = ((actives.length - 1) / (circles.length - 1)) * 100;
      
        progressBar.style.width = currentWidth + "%";
      
        if (currentWidth === 0) {
          btnPrev.setAttribute("disabled", true);
        } else if (currentWidth === 100) {
          btnNext.setAttribute("disabled", true);
        } else {
          btnPrev.removeAttribute("disabled");
          btnNext.removeAttribute("disabled");
        }
      }