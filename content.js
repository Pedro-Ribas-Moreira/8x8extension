function createModal(message) {
  const modalContainer = document.createElement("div");
  modalContainer.style.position = "fixed";
  modalContainer.style.top = "0";
  modalContainer.style.left = "0";
  modalContainer.style.width = "100%";
  modalContainer.style.height = "100%";
  modalContainer.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  modalContainer.style.display = "flex";
  modalContainer.style.justifyContent = "center";
  modalContainer.style.alignItems = "center";
  modalContainer.style.zIndex = "1000";

  // Create the modal content
  const modalContent = document.createElement("div");
  modalContent.style.backgroundColor = "white";
  modalContent.style.width = "400px";
  modalContent.style.height = "400px";
  modalContent.style.padding = "20px";
  modalContent.style.boxShadow = "0px 2px 10px rgba(0, 0, 0, 0.1)";
  modalContent.style.textAlign = "center";

  // Create the title
  const title = document.createElement("h2");
  title.textContent = "Check your connection status";
  modalContent.appendChild(title);

  // Create the image
  const image = document.createElement("img");
  image.src =
    "https://prepaypower-my.sharepoint.com/personal/pedro_moreira_prepaypower_ie/_layouts/15/embed.aspx?UniqueId=c9a195db-0dba-4b3b-b344-8727569c8d48"; // Replace with the actual image URL
  image.style.maxWidth = "100%";
  image.style.height = "100%";
  modalContent.appendChild(image);

  // Create the paragraph
  const paragraph = document.createElement("p");
  paragraph.textContent = message;
  modalContent.appendChild(paragraph);

  // Create the OK button
  const okButton = document.createElement("button");
  okButton.textContent = "OK";
  okButton.style.marginTop = "20px";
  okButton.style.padding = "10px 20px";
  okButton.style.background = "blue";
  okButton.style.color = "white";
  okButton.style.border = "none";
  okButton.style.cursor = "pointer";
  okButton.style.borderRadius = "5px";

  okButton.addEventListener("click", () => {
    modalContainer.remove();
  });

  // Append the OK button to the modal content
  modalContent.appendChild(okButton);

  // Append the modal content to the modal container
  modalContainer.appendChild(modalContent);

  // Append the modal container to the body
  document.body.appendChild(modalContainer);
  // Close the modal after 10 seconds
}

function findAndAlertText() {
  setTimeout(() => {
    if (document.querySelector(".disconnected").classList.contains("ng-hide")) {
      alert("Good Work");
    } else {
      createModal("You are not connected to the in2tel integration");
    }
  }, 10000); // 10000 milliseconds (10 seconds)
}

window.onload = findAndAlertText;

// Create the modal container

// Function to dismiss the modal
