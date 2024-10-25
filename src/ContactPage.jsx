import React from 'react'
import Layout from './Layout'
import Marker from './components/global/Marker'
import ContactForm from './components/home/ContactForm'


const ContactPage = () => {
    return (
        <Layout>
            <Marker marker={"Contact Us"} />
            <div>
                <p className='underlined text-2xl m-7 px-5 my-1 font-light border-black border-l-2'>
                    <samp className='text-2xl extra-lexa '>Contact</samp> With Us
                </p>
            </div>
            <div className='border-black border-b-2 m-8 flex justify-around'>

                <div>
                    <div className=' flex justify-center lexend font-light mb-2'>SEND US A MESSAGE</div>
                    <ContactForm />
                </div>
                <div className='map-container '>
                    <div className='flex justify-center lexend font-light mb-2'>WE ARE LOCATED HERE</div>
                    <div className='border-[#bebdbd] border-2 drop-shadow-xl shadow-[#818181] rounded-lg'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.949220145546!2d72.84515737490369!3d19.021959153667467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ced9a3f77f11%3A0xf0ea7b0191ee1ff9!2sThe%20Bombay%20Andhra%20Mahasabha%20And%20Gymkhana!5e0!3m2!1sen!2sin!4v1729771950740!5m2!1sen!2sin" width="500" height="535" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ContactPage
