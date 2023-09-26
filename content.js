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
  modalContent.style.height = "auto";
  modalContent.style.padding = "20px";
  modalContent.style.boxShadow = "0px 2px 10px rgba(0, 0, 0, 0.1)";
  modalContent.style.textAlign = "center";

  // Create the title
  const title = document.createElement("h2");
  title.textContent = "You are not connected!";
  modalContent.appendChild(title);

  const paragraph = document.createElement("p");
  paragraph.style = "margin-top: 10px";
  paragraph.textContent = "In the top right corner, click on the settings icon";
  modalContent.appendChild(paragraph);

  // Create the image
  const image = document.createElement("img");
  image.src =
    "https://raw.githubusercontent.com/Pedro-Ribas-Moreira/8x8extension/main/systemOne.png";
  image.style.maxWidth = "100%";
  image.style.height = "auto";
  image.style.border = "1px solid black";
  modalContent.appendChild(image);

  const paragraphTwo = document.createElement("p");
  paragraphTwo.style = "margin-top: 10px";

  paragraphTwo.textContent =
    "Click on the button that says 'not connected', then click again in the button to connect";
  modalContent.appendChild(paragraphTwo);

  const imagetwo = document.createElement("img");
  imagetwo.src =
    "https://raw.githubusercontent.com/Pedro-Ribas-Moreira/8x8extension/main/systemThree.png";
  imagetwo.style.maxWidth = "100%";
  imagetwo.style.height = "auto";
  imagetwo.style.border = "1px solid black";

  modalContent.appendChild(imagetwo);

  const paragraphThree = document.createElement("p");
  paragraphThree.style = "margin-top: 10px";

  paragraphThree.textContent =
    "Wait for the connection to be established, then return to the 'Agent' tab";
  modalContent.appendChild(paragraphThree);

  const imageThree = document.createElement("img");
  imageThree.src =
    "https://raw.githubusercontent.com/Pedro-Ribas-Moreira/8x8extension/main/systemTwo.png";
  imageThree.style.maxWidth = "100%";
  imageThree.style.height = "auto";
  imageThree.style.border = "1px solid black";

  modalContent.appendChild(imageThree);

  // Create the paragraph

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
    } else {
      createModal();
    }
  }, 5000); // 10000 milliseconds (10 seconds)
}

window.onload = findAndAlertText;

// Create the modal container

// Function to dismiss the modal
