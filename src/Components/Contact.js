import React, { useEffect, useState } from 'react'
import useOnScreen from '../UseOnScreen';
function Contact()
{
    const [details, setdetails] = useState({ name: '', email: '', message: '' });
    const [buttontext,setbuttontext]=useState('CONTACT');
    const [ref, isIntersecting] = useOnScreen({ root: null, rootMargin: '0px', threshold: 0.1 });

    // Log the component name when it becomes visible
    React.useEffect(() =>
    {
        if (isIntersecting) {
            console.log('Contact component is now visible');
        }
    }, [isIntersecting]);

    function sendmail()
    {
        // const { name, email, message } = details;
        // const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=shivshankarkushwaha0000@gmail.com&subject=from Portfolio&body=Name:${name}%0D%0AEmail:${email}%0D%0AMessage:
        // ${message}`;
        // // window.location.href =mailtoLink;
        // window.open(mailtoLink, '_blank');
        var data =details;
        if (!validateName(data.name) || !validateEmail(data.email)) {
            return false;
        }
        setbuttontext('Processing...');
        fetch("/sendMail", { method: 'POST', body: new URLSearchParams({ ...details }) })
            .then(responce =>
            {
                setbuttontext('CONTACT');
                if (responce.status === 200) {
                    alert('Thank you, we will contact you soon!');
                }
                else {
                    alert('Mail not sent');
                }
            })
            .catch(err =>
            {
                setbuttontext('CONTACT');
                alert('Some error occured');
            })
    };
    const validateName = (name) =>
    {
        if (name.trim() === '') {
            alert('Please use correct name');
            return false;
        }
        return true;
    };
    const validateEmail = (email) =>
    {
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!emailPattern.test(email)) {
            alert('please use correct email');
            return false;
        }
        return true;
    };

    return (
        <div ref={ref} id='contact' className=' flex flex-col justify-center items-center py-5 gap-10 scrollitems'>
            <img className='w-full h-full absolute -z-10 opacity-30' src="https://d33wubrfki0l68.cloudfront.net/daac8858fd4a0ccea44f59dfd079c3c16c263f33/c157c/assets/svg/common-bg.svg" alt="" />
            <div className='flex flex-col justify-center items-center gap-3'>
                <h1 className='lg:text-3xl text-xl font-bold border-b-4 border-[#e31b6d]'>CONTACT</h1>
                <p className='lg:text-xl text-sm text-center  space-x-7 font-serif'>Feel free to contact me by submitting the form below, and I will get back to you as soon as possible</p>
            </div>
            <div className='lg:w-1/2 w-screen mx-auto border-2 flex flex-col gap-5 lg:p-10 p-2 contactform bg-white'>
                <div className='flex flex-col'>
                    <span className='roboto text-xl my-2'>Name</span>
                    <input className='p-1 text-xl outline-none border-2 border-gray-500 rounded bg-slate-200' value={details.name} onChange={(e) => { setdetails({ ...details, name: e.target.value }) }} type="text" name="name" id="name" placeholder='Enter Name' />
                </div>
                <div className='flex flex-col'>
                    <span className='roboto text-xl my-2'>Email</span>
                    <input className='p-1 text-xl outline-none border-2 border-gray-500 rounded bg-slate-200' value={details.email} onChange={(e) => { setdetails({ ...details, email: e.target.value }) }} type="email" name="email" id="email" placeholder='Enter Email' />
                </div>
                <div className='flex flex-col'>
                    <span className='roboto text-xl my-2'>message</span>
                    <textarea style={{ letterSpacing: '2px' }} className='p-1 text-xl border-2 border-gray-500 outline-none rounded resize-none bg-slate-200' value={details.message} onChange={(e) => { setdetails({ ...details, message: e.target.value }) }} name="message" id="message" cols="30" rows="5" placeholder='Write Message'></textarea>
                </div>
                <div className='flex flex-col'>
                    <button onClick={() => { sendmail() }} className='text-xl font-light p-2 bg-sky-500 text-white shadow-sm hover:shadow-sky-900 active:shadow-none shadow-sky-800 rounded'>{buttontext}</button>
                </div>

            </div>
        </div>
    )
}

export default Contact;