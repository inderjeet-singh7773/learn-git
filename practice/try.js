
    const colorInput = document.getElementById("color");
    const applyBtn = document.getElementById("apply");

    applyBtn.addEventListener("click", () => {
      document.body.style.background = `linear-gradient(135deg, #95918c, ${colorInput.value})`;
    });
