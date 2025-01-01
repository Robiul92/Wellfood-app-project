export function SignUpPage() {
    const signUpContainer = document.getElementById("signUp");
  
    // Clear the container before rendering
    signUpContainer.innerHTML = "";

    // Set up the container with Flexbox for centering
    signUpContainer.className = "flex items-center justify-center min-h-screen bg-gray-100";

    // Create the card container
    const card = document.createElement("div");
    card.className = "w-full max-w-md p-8 bg-white rounded-lg shadow-md";

    // Title
    const title = document.createElement("h1");
    title.className = "mb-6 text-2xl font-bold text-center";
    title.innerText = "Create account";

    // Form
    const form = document.createElement("form");

    // Add fields for First Name, Last Name, Email, Phone, and Password
    const firstNameField = createInputField("first-name", "First name", "text");
    const lastNameField = createInputField("last-name", "Last name", "text");
    const emailField = createInputField("email", "Email", "email");
    const phoneField = createInputField("phone", "Phone", "tel");
    const passwordField = createPasswordField("password", "Password");

    // Submit Button
    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.className =
      "w-full py-3 mt-6 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400";
    submitButton.innerText = "Submit";

    // Append fields and button to form
    form.append(firstNameField, lastNameField, emailField, phoneField, passwordField, submitButton);

    // Append title and form to card
    card.append(title, form);

    // Append card to container
    signUpContainer.appendChild(card);
}
  
  // Helper function to create input fields
  function createInputField(id, label, type) {
    const fieldContainer = document.createElement("div");
    fieldContainer.className = "mb-4";
  
    const fieldLabel = document.createElement("label");
    fieldLabel.htmlFor = id;
    fieldLabel.className = "block mb-1 text-sm font-medium text-gray-700";
    fieldLabel.innerText = label;
  
    const input = document.createElement("input");
    input.type = type;
    input.id = id;
    input.placeholder = label;
    input.required = true;
    input.className =
      "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500";
  
    fieldContainer.append(fieldLabel, input);
    return fieldContainer;
  }
  
  // Helper function to create password field with toggle visibility
  function createPasswordField(id, label) {
    const fieldContainer = document.createElement("div");
    fieldContainer.className = "mb-4";
  
    const fieldLabel = document.createElement("label");
    fieldLabel.htmlFor = id;
    fieldLabel.className = "block mb-1 text-sm font-medium text-gray-700";
    fieldLabel.innerText = label;
  
    const inputGroup = document.createElement("div");
    inputGroup.className = "relative";
  
    const input = document.createElement("input");
    input.type = "password";
    input.id = id;
    input.placeholder = label;
    input.required = true;
    input.className =
      "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500";
  
    const toggleButton = document.createElement("button");
    toggleButton.type = "button";
    toggleButton.className =
      "absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 focus:outline-none";
    toggleButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12m-3 3a3 3 0 106-6 3 3 0 00-6 6z" /></svg>';
  
    // Toggle password visibility
    toggleButton.addEventListener("click", () => {
      input.type = input.type === "password" ? "text" : "password";
    });
  
    inputGroup.append(input, toggleButton);
    fieldContainer.append(fieldLabel, inputGroup);
    return fieldContainer;
  }
  