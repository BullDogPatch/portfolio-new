'use client';

import { useRef, useState } from 'react';

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState<boolean>(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);
    const formData = new FormData(event.currentTarget);

    formData.append('access_key', '584dd52f-934e-4dfc-a8ce-dcf16bc25d40');

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log('Success', res);
      formRef.current?.reset();
    }
    setIsSending(false);
  };

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      className='w-full max-w-lg mx-auto bg-gray-900 p-6 rounded-2xl shadow-lg space-y-4'
    >
      <div className='flex flex-col'>
        <label className='text-gray-300 mb-1'>Your Name</label>
        <input
          type='text'
          name='name'
          placeholder='Enter your name...'
          className='p-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 outline-none'
          required
        />
      </div>
      <div className='flex flex-col'>
        <label className='text-gray-300 mb-1'>Your Email</label>
        <input
          type='email'
          name='email'
          placeholder='Enter your email...'
          className='p-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 outline-none'
          required
        />
      </div>
      <div className='flex flex-col'>
        <label className='text-gray-300 mb-1'>Leave a message...</label>
        <textarea
          rows={4}
          name='message'
          placeholder='Write your message here...'
          className='p-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 outline-none'
          required
        />
      </div>
      <button
        type='submit'
        className='w-full mt-4 p-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition'
      >
        {isSending ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;
