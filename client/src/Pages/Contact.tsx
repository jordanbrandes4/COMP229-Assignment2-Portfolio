import { useNavigate } from 'react-router-dom'

function Contact() {
  const navigate = useNavigate()

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const contactInformation = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      contactNumber: formData.get('contactNumber'),
      email: formData.get('email'),
      message: formData.get('message'),
    }

    console.log('Contact Form:', contactInformation)

    alert('Thank you! Your message has been submitted.')

    navigate('/')
  }

  return (
    <main className="contact">
      <h1>Contact Me</h1>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Get In Touch</h2>

          <p>
            Feel free to contact me using the form if you would like to
            connect or learn more about my work.
          </p>

          <p>
            <strong>Name:</strong> Jordan Brandes
          </p>

          <p>
            <strong>Email:</strong> jbrande1@my.centennialcollege.ca
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            required
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            required
          />

          <input
            type="tel"
            name="contactNumber"
            placeholder="Contact Number"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            rows={6}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </main>
  )
}

export default Contact