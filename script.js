const contactForm = document.getElementById('contact-form');

const handleSubmit = (e) => {
	const name = document.getElementById('name');
	const email = document.getElementById('email');
	const phone = document.getElementById('phone');
	const message = document.getElementById('message');

	if (name.value.length < 3 || email.value.length < 3 || phone.value.length < 3 || message.value.length < 3) {
		alert("Fill the details properly!")
	} else {
		e.innerText = "Sending..."
		fetch("https://reliance-backend.vercel.app/self-contact", {
			method: "POST",
			body: JSON.stringify({ name, email, phone, message })
		})
			.then((res) => {
				if (res.status === 200 || res.ok === true) {
					alert("Your response has been recorded, Our team will connect with you shortly!")
					contactForm.reset()
					e.innerText = "Send"
				}
			})
			.catch((err) => {
				alert(err.message)
			})
	}
}