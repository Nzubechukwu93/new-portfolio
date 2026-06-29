const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">

        <h2 className="text-4xl font-bold mb-8">
          Contact Me
        </h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-4 rounded-lg border"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 rounded-lg border"
          />

          <textarea
            rows="5"
            placeholder="Message"
            className="w-full p-4 rounded-lg border"
          />

          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10">
          <p>Email: nzubechukwuoriji@gmail.com</p>
          <p>GitHub: https://github.com/Nzubechukwu93</p>
          <p>LinkedIn: linkedin.com/in/nzubechukwu-oriji</p>
        </div>

      </div>
    </section>
  );
};

export default Contact;