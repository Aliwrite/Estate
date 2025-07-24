import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {

const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bc5dc86f-861a-480c-9c4c-2586aab19e9e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Message sent successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <div id='Contact' className='flex flex-col items-center justify-center container bg-white text-black mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden '>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 '>Contact <span className='font-light underline underline-offset-4 decoration-1 under'>With Us</span></h1>
        <p className='text-gray-500 max-w-80 text-center mb-8'>Ready to Make a Move? Let’s Build Your Future Together</p>
        
        <form onSubmit={onSubmit} className='w-full max-w-2xl mx-auto pt-8'>
          <div className='flex flex-wrap'>
            <div className='w-full md:w-1/2 text-left px-2'>
              <label className='text-gray-500 text-sm font-semibold'>Name</label>
              <input name='name' type="text" placeholder='Enter your name' className='w-full p-2 border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2' required />
            </div>
            <div className='w-full md:w-1/2 text-left px-2'>
              <label className='text-gray-500 text-sm font-semibold'>Email</label>
              <input name='email' type="email" placeholder='Enter your email' className='w-full p-2 border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2' required />
            </div>
          </div>
          <div className='w-full text-left px-2 mt-4'>
            <label className='text-gray-500 text-sm font-semibold'>Message</label>
            <textarea name='message' placeholder='Enter your message' className='w-full p-2 border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 h-32 resize-none' required></textarea>
          </div>
          <div className='w-full text-center mt-6'>
          <button type='submit' className='mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300'>
            {result ? result : 'Send Message'}
            </button>
          </div>
        </form>
    </div>
  )
}

export default Contact