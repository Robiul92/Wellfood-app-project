export function signInPage() {
  const root = document.getElementById('signIN');
  if (!root) {
    console.error("Root element with ID 'signIN' not found.");
    return;
  }

  // Clear any existing content in the root
  root.innerHTML = '';

  // Create the main container
  const container = document.createElement('div');
  container.className = 'flex items-center justify-center min-h-screen bg-gray-100';

  // Create the card that holds the form
  const card = document.createElement('div');
  card.className = 'w-full max-w-sm p-6 bg-white rounded-lg shadow-md';

  // Add the title for the form
  const title = document.createElement('h1');
  title.className = 'mb-6 text-xl font-bold text-center';
  title.innerText = 'Login';

  // Create the form element
  const form = document.createElement('form');
  form.className = 'space-y-6';

  // Add email input field
  const emailField = document.createElement('div');
  emailField.className = 'mb-4';
  emailField.innerHTML = `
    <label for="email" class="block mb-2 text-sm font-medium text-gray-700">Email</label>
    <input 
      type="email" 
      id="email" 
      name="email" 
      placeholder="Enter your email"
      class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
    />
  `;

  // Add password input field
  const passwordField = document.createElement('div');
  passwordField.className = 'mb-4';
  passwordField.innerHTML = `
    <label for="password" class="block mb-2 text-sm font-medium text-gray-700">Password</label>
    <input 
      type="password" 
      id="password" 
      name="password" 
      placeholder="Enter your password"
      class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
    />
  `;

  // Add submit button
  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.className =
    'w-full py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400';
  submitButton.innerText = 'Sign In';

  // Append all elements to the form
  form.append(emailField, passwordField, submitButton);

  // Append the title and form to the card
  card.append(title, form);

  // Append the card to the container
  container.appendChild(card);

  // Append the container to the root
  root.appendChild(container);
}
