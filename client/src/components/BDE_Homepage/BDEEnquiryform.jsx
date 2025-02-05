import React from 'react'

const BDEEnquiryform = () => {
  return (
    <div class="flex mt-10 ms-10">

      <form>
        <div class="grid gap-6 mb-6 md:grid-cols-3">
          <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">First name</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
          </div>
          <div>
            <label for="middle_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Middle name</label>
            <input type="text" id="middle_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
          </div>
          <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Last name</label>
            <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required />
          </div>
          <div>
            <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Univercity</label>
            <select name="" id="" className='"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required '>
              <option value="Select" hidden>Select</option>
              <option value="Student">A</option>
              <option value="Admin">B</option>
              <option value="HR">C</option>
              <option value="BDE">D</option>
            </select>
          </div>
          <div>
            <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Collage</label>
            <select name="" id="" className='"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required '>
              <option value="Select" hidden>Select</option>
              <option value="Student">A</option>
              <option value="Admin">B</option>
              <option value="HR">C</option>
              <option value="BDE">D</option>
            </select>
          </div>
          <div>
            <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">City</label>
            <select name="" id="" className='"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required '>
              <option value="Select" hidden>Select</option>
              <option value="Student">A</option>
              <option value="Admin">B</option>
              <option value="HR">C</option>
              <option value="BDE">D</option>
            </select>
          </div>
          <div>
            <label for="number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Mobile Number</label>
            <input type="number" id="website" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div>
            <label for="number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Whatsapp Number</label>
            <input type="number" id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div>
            <label for="date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Date of Birth</label>
            <input type="date" id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div class="mb-6">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Email address</label>
            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div class="mb-6">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Blood Group</label>
            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div class="mb-6">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Education</label>
            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div class="mb-6">
            <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Marital Status</label>
            <input type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div>
            <label for="city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">City</label>
            <select name="" id="" className='"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required '>
              <option value="Select" hidden>Select</option>
              <option value="Student">A</option>
              <option value="Admin">B</option>
              <option value="HR">C</option>
              <option value="BDE">D</option>
            </select>
          </div>

        </div>

        <div class="mb-4">
          <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"> Temporary Address</label>
          <input type="text" id="large-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg  text-base focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <div class="mb-4">
          <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"> Permanent Address</label>
          <input type="text" id="large-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg  text-base focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <div class="grid gap-6 mb-6 md:grid-cols-4">
          <div>
            <label for="number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Reference Number</label>
            <input type="number" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
          </div>
          <div>
            <label for="middle_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Mode of education</label>
            <input type="text" id="middle_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
          </div>
          <div>
            <label for="city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Select Course</label>
            <select name="" id="" className='"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required '>
              <option value="Select" hidden>Select</option>
              <option value="Student">A</option>
              <option value="Admin">B</option>
              <option value="HR">C</option>
              <option value="BDE">D</option>
            </select>
          </div>
          <div>
            <label for="city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Duration</label>
            <select name="" id="" className='"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required '>
              <option value="Select" hidden>Select</option>
              <option value="Student">A</option>
              <option value="Admin">B</option>
              <option value="HR">C</option>
              <option value="BDE">D</option>
            </select>
          </div>

          <div>
            <label for="city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Interested in Placement Reference</label>
            <div class="flex items-center mb-4">
              <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="default-radio-1" class="ms-2 text-sm font-medium text-black-900 dark:text-black-300">YES</label>
            </div>
            <div class="flex items-center">
              <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="default-radio-2" class="ms-2 text-sm font-medium text-black-900 dark:text-black-300">NO</label>
            </div>
          </div>
          <div>
            <label for="city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Need PC from Comapny</label>
            <div class="flex items-center mb-4">
              <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="default-radio-1" class="ms-2 text-sm font-medium text-black-900 dark:text-black-300">YES</label>
            </div>
            <div class="flex items-center">
              <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="default-radio-2" class="ms-2 text-sm font-medium text-black-900 dark:text-black-300">NO</label>
            </div>
          </div>
          <div>
            <label for="city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"> T-shirt Size</label>
            <select name="" id="" className='"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required '>
              <option value="Select" hidden>Select</option>
              <option value="Student">A</option>
              <option value="Admin">B</option>
              <option value="HR">C</option>
              <option value="BDE">D</option>
            </select>
          </div>
          <div>
            <label for="city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Batch slot</label>
            <select name="" id="" className='"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required '>
              <option value="Select" hidden>Select</option>
              <option value="Student">A</option>
              <option value="Admin">B</option>
              <option value="HR">C</option>
              <option value="BDE">D</option>
            </select>
          </div>
        </div>
       



        <button type="submit" class="text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>

    </div>
  )
}

export default BDEEnquiryform
