const form = document.querySelector("#contact-form");

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!form.reportValidity()) return;

  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const email = String(data.get("email") || "").trim();
  const subject = encodeURIComponent(`ezyMRI website enquiry from ${name}`);
  const body = encodeURIComponent(`Hello ezyMRI team,\n\nI would like to learn more about your portable MRI solutions.\n\nName: ${name}\nEmail: ${email}\n`);

  window.location.href = `mailto:contact@ezymri.com?subject=${subject}&body=${body}`;
});
