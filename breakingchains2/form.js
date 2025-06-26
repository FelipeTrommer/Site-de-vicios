    const addBtn = document.getElementById("addBtn");
    const formArea = document.getElementById("formArea");
    const containerArea = document.getElementById("containerArea");

    addBtn.addEventListener("click", () => {
      // Evita múltiplos inputs aparecendo
      if (formArea.childElementCount > 0) return;

      const label = document.createElement("p");
      label.textContent = "Como está se sentindo?";

      const input = document.createElement("input");
      input.type = "text";
      input.placeholder = "Pressione Enter para salvar";
      input.className = "input-form";

      formArea.appendChild(label);
      formArea.appendChild(input);
      input.focus();

      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && input.value.trim() !== "") {
          const div = document.createElement("div");
          div.className = "saved-text";
          div.textContent = input.value;
          containerArea.appendChild(div);
          formArea.innerHTML = ""; // limpa o formulário
        }
      });
    });