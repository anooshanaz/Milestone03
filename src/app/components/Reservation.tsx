import React from 'react'

const Reservation = () => {
  return (
    <div>
      <section className='bg-gradient-to-r from-black to-slate-900 py-10'>
        <div className='container mx-auto text-center'>
            <h2 className='text-3xl font-bold mb-6 text-white'>Make a Reservation</h2>
            <form className="max-w-md mx-auto">
                <div className='mb-4 text-white'>
                    <input type="text"
                    placeholder='Your name'
                    className='w-full p-3 border border-red-900 shadow-lg rounded-md' required/>
                </div>
                <div className='mb-4 text-white'>
                    <input type="text"
                    placeholder='Your email'
                    className='w-full p-3 border border-red-900  shadow-lg rounded-md' required/>
                </div>
                <div className='mb-4 text-white'>
                    <input type="date"
                    className='w-full p-3 border border-red-900 shadow-lg rounded-md' required/>
                </div>
                <div className='mb-4 text-white'>
                    <input type="time"
                    className='w-full p-3 border border-red-900 shadow-lg rounded-md' required/>
                </div>
                <div>
                <button className='bg-red-600 text-white text-sm font-semibold py-3 px-6 rounded-full shadow-lg hover hover:bg-amber-400 transition duration-300'>Reserve Table Now</button>
                </div>
            </form>
        </div>

      </section>
    </div>
  )
}

export default Reservation
