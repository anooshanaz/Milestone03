"use client"
import React from 'react'

interface Offer {
    title: string;
    desc: string;
  }

const SpecialOffers:React.FC  = () => {
    const offers:Offer[] =[
        {
            title:"Happy Hour",
            desc: "5pm to 7pm to taken drink per 50% discount"
        },
        {
            title: "Family Deal",
            desc: "Order for family deal available"
        },
        {
            title: "Weekly Brunch",
            desc: "Two free drinks enjoyed"
        },
        {
            title: "Breakfast Buffet",
            desc: "Unlimited breakfast buffet for $15 every Sunday.",
          },
          {
            title: "Seafood Night",
            desc: "Flat 30% off on seafood dishes every Friday night.",
          },
          {
            title: "Dessert Delight",
            desc: "Get 20% off on all desserts after 8 PM.",
          },
    ];
    const hundleOfferClick=(desc:string) => {alert(desc)}
  return (
    <section className='py-10'>
        <div className='container mx-auto text-center'>
        <h2 className='text-4xl font-bold mb-6 text-white'>Special Offers</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg-grid-col-3 gap-6'>
            {offers.map((offer,index) => (
                <button 
                key={index}
                 onClick={() => hundleOfferClick (offer.desc)}
                className="bg-slate-200 shadow-lg rounded-lg text-center hover hover:bg-cyan-300 transition duration-300  transform hover:scale-105">
                    <h3 className='text-xl font-semibold text-slate-600'>{offer.title}</h3>
                    <p className='text-slate-600 mt-3'>{offer.desc}</p>
                </button>
            ))}
        </div>
        </div>
    </section>
  )
}

export default SpecialOffers
