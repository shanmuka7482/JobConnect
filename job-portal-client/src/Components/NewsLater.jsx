import React from 'react'
import { FaEnvelope, FaRocket } from 'react-icons/fa'
import {} from "react-icons/fa6"
const NewsLater = () => {
  return (
    <div>
        <div>
            <h3 className='text-lg text-primary font-bold mb-2 flex items-center gap-2'>
                <FaEnvelope/>
                Email me:
            </h3>
            <p className='text-primary/75 text-base mb-4'>
            Have a question or inquiry? Feel free to reach out to us via email.
            </p>
            <div className='w-full space-y-4'>
                 <input type="email" name='email' placeholder='name@gmail.com' className='w-full block py-2 pl-3 border rounded-lg border-primary focus:outline-none' />
                <input type="submit" value="Subscribe" className='w-full block py-2 pl-3 border rounded-lg border-primary bg-primary rounde text-light1 cursor-pointer font-semibold'/>
            </div>
            
        </div>
        <div className='mt-20'>
            <h3 className='text-lg text-primary font-bold mb-2 flex items-center gap-2'>
                <FaRocket/>
                Get Noticed Faster
            </h3>
            <p className='text-primary/75 text-base mb-4'>
            Ready to take the next step in your career journey? Upload your resume here to apply for exciting opportunities with us.
            </p>
            <div className='w-full space-y-4'>
                 <input type="submit" value="Upload Your resume" className='w-full block py-2 pl-3 border rounded-lg border-primary bg-primary rounde text-light1 cursor-pointer font-semibold'/>
            </div>
            
        </div>
    </div>
    
  )
}

export default NewsLater