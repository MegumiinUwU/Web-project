// document.addEventListener("DOMContentLoaded", function() {
//     // Get the image element and file input element
//     const avatarImg = document.querySelector('.avatar');
//     const fileInput = document.getElementById('profilePicture');
  
//     // Add click event listener to the image
//     avatarImg.addEventListener('click', function(event) {
//       // Stop the event from propagating further
//       event.stopPropagation();
      
//       // Prevent the default action of the click event on the image
//       event.preventDefault();
  
//       // Trigger click event on file input when image is clicked
//       fileInput.click();
//     });
  
//     // Add change event listener to file input
//     fileInput.addEventListener('change', function() {
//       // Check if a file is selected
//       if (fileInput.files && fileInput.files[0]) {
//         // Read the selected file
//         const reader = new FileReader();
  
//         reader.onload = function(e) {
//           // Set the image source to the selected file
//           avatarImg.src = e.target.result;
//         }
  
//         reader.readAsDataURL(fileInput.files[0]);
//       }
//     });
//   });
  
// document.addEventListener('DOMContentLoaded', function() {
//   const profilePictureInput = document.getElementById('profilePicture');
//   const avatarImage = document.querySelector('.avatar');

//   avatarImage.addEventListener('click', function() {
//     profilePictureInput.click();
//   });

//   profilePictureInput.addEventListener('change', function() {
//     const file = this.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = function(e) {
//         avatarImage.src = e.target.result;
//       };
//       reader.readAsDataURL(file);
//     }
//   });
// });
