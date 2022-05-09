function Form(){
    return(
        <div className="m-8 border-gray-500 shadow">
        <div className="container justify-center ">
        <form className="m-8 p-8">
        
        
        <div className="mb-6">
          <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
          <input type="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Name" required>
          </input>
        </div>
        <div className="mb-6">
          <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Quantity</label>
          <input type="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required>
          </input>
        </div>
        <div className="mb-6">
          <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">unit_price_cents</label>
          <input type="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required>
          </input>
        </div>
        
        <button type="submit" className="text-white bg-blue-400 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        
      </form>
      </div>
      </div>
    )
}

export default Form