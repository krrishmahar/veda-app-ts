import React from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);  // For now, it logs the form data
        alert("Form submitted successfully!");
    };

    return (
        <div className='border shadow-2xl shadow-[#afaeae] flex justify-start border-black rounded-xl m-3 mb-14 px-1 py-4'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className='m-3' htmlFor="Name">Name <samp className='text-[#FF0000]'>*</samp></label>
                <input 
                    className='block bg-[#F4F4F4] text-[#818181] rounded-md px-2 py-2 pr-[14.5rem] border-black border m-3' 
                    placeholder="Full Name"
                    {...register('name', { required: true })}
                />
                {errors.name && <span className='text-red-500 m-3 block'>Name is required</span>}

                <label className='m-3' htmlFor="Email">Email <samp className='text-[#FF0000]'>*</samp></label>
                <input 
                    className='block bg-[#F4F4F4] text-[#818181] rounded-md px-2 py-2 pr-[14.5rem] border-black border m-3' 
                    placeholder="mail@sitename.com"
                    {...register('email', { 
                        required: true, 
                        pattern: {
                            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                            message: 'Invalid email address'
                        }
                    })}
                />
                {errors.email && <span className='text-red-500 m-3 block'>{errors.email.message || 'Email is required'}</span>}

                <label className='m-3' htmlFor="Subject">Subject <samp className='text-[#FF0000]'>*</samp></label>
                <input 
                    className='block bg-[#F4F4F4] text-[#818181] rounded-md px-2 py-2 pr-[14.5rem] border-black border m-3' 
                    placeholder="Your Subject Here"
                    {...register('subject', { required: true })}
                />
                {errors.subject && <span className='text-red-500 m-3 block'>Subject is required</span>}

                <label className='m-3' htmlFor="Message">Message <samp className='text-[#FF0000]'>*</samp></label>
                <textarea 
                    className="block bg-[#F4F4F4] text-[#818181] rounded-md px-2 py-2 pr-[14.5rem] pb-20 border-black border m-3" 
                    placeholder="Your Message Here"
                    {...register('message', { required: false })}
                ></textarea>

                <div className='flex justify-center'>
                    <button className='bg-black lexand p-2 m-1 rounded-md px-14 font-semibold flex justify-center text-white' type="submit">Send Message</button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
