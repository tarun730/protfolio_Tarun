import React, { useState } from 'react'

const modal = () => {
    const [resultMessage, setResultMessage] = useState('');
    const [Modal, setModal] = useState(false);
    const [Subject, setSubject] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        var object = {};
        formData.forEach((value, key) => {
            object[key] = value;
        });

        var json = JSON.stringify(object);
        setResultMessage("Please wait...");

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: json,
            });

            const jsonResponse = await response.json();

            if (response.status === 200) {
                setResultMessage(jsonResponse.message);
            } else {
                console.log(response);
                setResultMessage(jsonResponse.message);
            }
        } catch (error) {
            console.log(error);
            setResultMessage("Something went wrong!");
        } finally {
            form.reset();
            setTimeout(() => {
                setResultMessage('');
            }, 5000);
        }
    };
  return (
    <div style={{ display: Modal ? "" : "none" }} aria-hidden="true" className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0  dark:bg-[#e4e4e4c2]  dark:z-50 z-50 justify-center items-center  md:inset-0 h-[calc(100%-1rem)] max-h-full bg-[#808080c2] dark:bg-[rgb(0 0 0 / 89%)]">
    <div className="flex items-center min-h-screen w-full max-h-full bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">

            <div className="max-w-md mx-auto my-10 bg-white dark:bg-black p-3 rounded-md shadow-sm">

                <button onClick={() => setModal(false)} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="static-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>

                <div className="text-center">



                    {/* <h1 className="my-1 text-3xl font-semibold text-gray-700 dark:text-gray-200">Contact Us</h1> */}
                    <p className="text-gray-400 dark:text-gray-400">Reach out to me over email or fill up this contact form. I will get back to you ASAP.</p>
                </div>
                <div className="m-7">
                    <form onSubmit={handleSubmit} id="form">

                        <input type="hidden" name="apikey" value="900259a2-decb-4e69-8c7d-d16327087055" />
                        <input type="hidden" name="subject" value={Subject} />
                        <input type="checkbox" name="botcheck" style={{ display: 'none' }} />
                        <div className='flex flex-row gap-[1em]'>
                            <div className="mb-6">
                                <label htmlFor="name" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Full Name</label>
                                <input type="text" name="name" id="name" placeholder="John Doe" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                                <input type="email" name="email" id="email" placeholder="you@company.com" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                            </div>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="Subject" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Subject</label>
                            <input onChange={(e) => setSubject(e.target.value)} type="text" name="Subject" id="Subject" placeholder="Subject" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Your Message</label>

                            <textarea rows="5" name="message" id="message" placeholder="Your Message" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" required></textarea>
                        </div>
                        {/* ... (Repeat htmlFor other form fields) */}
                        <div className="mb-6">
                            <button type="submit" className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">Send Message</button>
                        </div>
                        <p className={`text-base text-center ${resultMessage ? 'text-green-500' : 'text-gray-400'}`}>
                            {resultMessage}
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default modal