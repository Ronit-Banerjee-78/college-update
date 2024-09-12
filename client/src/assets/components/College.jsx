import React, { useState } from 'react'
import {useForm} from "react-hook-form";
import axios from "axios"
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom';

const College = () => {





const [udata,setUdata]=useState("")
const [error,setError]=useState(null)
const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true);

    const {register,handleSubmit,formState}=useForm();
    const {errors}=formState;
const onSubmithandeler=async(data)=>{
  let bio,college,name,email,phone;
bio=data.bio;
college=data.college;
name=data.name;
email=data.email;
phone=data.phone

try {


  const res=await axios.post("http://localhost:8170/api/register",data)
  if(res.data.success===true){
    handleOpen()
    console.log(res.data.user);

  }else{
    window.alert(res.data.message)
  }
  } catch (err) {
    setError(err.response.data)

  }

  console.log(data.name,udata);

}


const hanSubmit= async e=>{

  e.preventDefault();
try {


const res=await axios.post("http://localhost:8170/api/register",{})
if(res.data.success===true){
  handleOpen()
  console.log(res.data.user);
setUdata(res.data.message)
}else{
  window.alert(res.data.message)
}
} catch (err) {
  setError(err.response.data)

}

}

  return (
   <>
<div className="flex items-center justify-center p-12">

  <div className="mx-auto w-full max-w-[550px] bg-white">
    <form onSubmit={handleSubmit(onSubmithandeler)}>
      <div className="mb-5">
        <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
          Full Name
        </label>
        <input type="text" {...register("name",{
            required:"Name toh De vai!!!!"
        })} id="name" placeholder="Full Name" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
       <label  className="mb-3 block text-base font-medium text-red-500">
          {errors.name?.message}
        </label>
      </div>
      <div className="mb-5">
        <label htmlFor="phone"  className="mb-3 block text-base font-medium text-[#07074D] text-red">
          Phone Number
        </label>
        <input type="text" {...register("phone",{
            required:"Number dene maine kiya kanjusii!!!!"
        })} id="phone" placeholder="Enter your phone number" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
      <label  className="mb-3 block text-base font-medium text-red-500">
          {errors.phone?.message}
        </label>
      </div>
      <div className="mb-5">
        <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D] ">
          Email Address
        </label>
        <input type="email" {...register("email",{
            required:"Abb Email toh De vai!!!!"
        })} id="email" placeholder="Enter your email" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
      <label  className="mb-3 block text-base font-medium text-red-500">
          {errors.email?.message}
        </label>
      </div>


        <div className="mb-5">
        <label htmlFor="collegename" className="mb-3 block text-base font-medium text-[#07074D] ">
          College Name
        </label>
        <input type="text" {...register("college",{
            required:"College Name toh De vai!!!!"
        })} id="collegename" placeholder="College Name" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
     <label  className="mb-3 block text-base font-medium  text-red-500">
          {errors.college?.message}
        </label>
      </div>

      <div className="mb-5">
        <label htmlFor="bio" className="mb-3 block text-base font-medium text-[#07074D] ">
         Why You choose this college?
        </label>
        <textarea rows="6" id="bio"  {...register("bio",{
            required:"Iske Binaa nehi hogaa"
        })} className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
      <label  className="mb-3 block text-base font-medium text-red-500">
          {errors.bio?.message}
        </label>
      </div>
      <div>
        <button className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
         Click Me!!!!
        </button>
      </div>
    </form>
  </div>
</div>


<Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                    SuccessFulll
                  </DialogTitle>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                                          {udata}
                                          </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">

              <button
                type="button"
                data-autofocus
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                <NavLink reloadDocument>

                Cancel
                </NavLink>
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>




   </>
  )
}

export default College
