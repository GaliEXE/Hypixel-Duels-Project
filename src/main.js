document.querySelector("form[name='signup']").addEventListener("submit", e => {
  e.preventDefault();
  const form = e.target;
  if (!auth) {
    noAuthFound(form)
  }

  const {
    email,
    password
  } = form.elements;
  auth
    .signup(email.value, password.value)
    .then(response =>
      showMessage(`<p>Created a user! </p><p>Response: </p><code>${JSON.stringify(response)}</code>`, form)
    )
    .catch(error => showMessage(`Failed :( <code>${JSON.stringify(error)}</code>`, form));
});
