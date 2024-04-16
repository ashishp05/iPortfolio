import React from 'react'
import toast from 'react-hot-toast';


export default function ContactMe() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f21b182c-d80c-4db4-8e45-ea5415d44385");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
    
      toast.success('Successfully Submitted Message!')
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
    }
  };

  return (
    <div className='flex flex-col m-5 p-5 bg-white rounded-md'>
      <h2 className='text-4xl  font-semibold'> Contact Me </h2>
          <div className='w-[100px] h-[3px] bg-blue-200 mt-1'></div>
          <div className=' flex flex-col text-xl text-richblack-500 w-full mx-auto p-2'>
            <span>Thanks for visiting!</span>
           <span>Let's connect and discuss how we can make your online presence shine! 🌟✨</span>


          </div>
      <form onSubmit={onSubmit}>
         <div className='flex flex-col mt-2 '>
           <label className='text-black'>Your Name <sup className='text-pink-200'>*</sup></label>
           <input 
           type="text"
            name="name"
            required
             className='border p-2 mt-1 rounded-sm'
             />
           
         </div>
         <div className='flex flex-col gap-y-1 mt-2 '>
           <label className='text-black'>Your Email <sup className='text-pink-200'>*</sup></label>
           <input
            type="email"
             name="email"
            required
            className='border p-2 mt-1 rounded-sm'
      
            />
          
         </div>
         <div className='flex flex-col gap-y-1 mt-2'>
           <label className='text-black'>Message <sup className='text-pink-200'>*</sup></label>
           <textarea name="message"
            rows={10}
             required
             className='border p-2 mt-1 rounded-sm'
             
             ></textarea>
         </div>
         <div className='flex  gap-y-1  w-full items-center justify-center'>
         <button type="submit" 
         className='text-richblack-25 bg-blue-100 p-2 mt-3 rounded-md'
         >Send Message</button>
         </div>
        
       

        

      </form>
      

    </div>
  );
}


