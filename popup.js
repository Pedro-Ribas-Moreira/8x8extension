// document.addEventListener("DOMContentLoaded", function () {
//   // Add a click event listener to the "Check Feature" button.
//   const dialogBox = document.getElementById("dialog-box");

//   const query = { active: true, currentWindow: true };

//   chrome.tabs.query(query, (tabs) => {
//     chrome.scripting.executeScript(
//       {
//         target: { tabId: tabs[0].id },
//         function: () => {
//           alert("run");
//         },
//       },
//       function (results) {
//         const featureDiv = document.querySelector(".status-line");
//         const isFeatureEnabled = !featureDiv.classList.contains("ng-hide");
//         return isFeatureEnabled; // Handle the results if needed
//       }
//     );
//   });
// });

// // function checkFeature() {
// //   // Use the chrome.tabs API to execute a script in the active tab.
// //   chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
// //     chrome.scripting.executeScript(
// //       {
// //         target: { tabId: tabs[0].id },
// //         function: checkIfFeatureEnabled,
// //       },
// //       function (results) {
// //         const isEnabled = results[0].result;
// //         alert(isEnabled ? "Feature is enabled" : "Feature is disabled");
// //       }
// //     );
// //   });
// // }

// // function checkIfFeatureEnabled() {
// //   // Function to check if the feature div has the 'ng-hide' class.
// //   const featureDiv = document.querySelector(".status-line");
// //   const isFeatureEnabled = !featureDiv.classList.contains("ng-hide");
// //   alert(isFeatureEnabled);
// //   return isFeatureEnabled;
// // }
