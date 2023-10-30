import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import imageMenu from './assets/menu.svg'
import imageshop from './assets/shop.svg'
import imageshop2 from './assets/shop2.svg'
import imageBanner from './assets/Banner.png'
import imageDeress1 from './assets/deress1.jpg'

const itemList = [
{
  name: 'بالا باز / ورزشی زنانه',
  discription: 'گرمکن ورزشی زنانه بالا باز مدل 59-80201005905',
  price: '630000',
  salePrice: '360000',
  image: imageDeress1,
},
{
  name: 'بالا باز / ورزشی زنانه',
  discription: 'گرمکن ورزشی زنانه بالا باز مدل 59-80201005905',
  price: '630000',
  salePrice: '360000',
  image: imageDeress1,
},
{
  name: 'بالا باز / ورزشی زنانه',
  discription: 'گرمکن ورزشی زنانه بالا باز مدل 59-80201005905',
  price: '630000',
  salePrice: '360000',
  image: imageDeress1,
},
{
  name: 'بالا باز / ورزشی زنانه',
  discription: 'گرمکن ورزشی زنانه بالا باز مدل 59-80201005905',
  price: '630000',
  salePrice: '360000',
  image: imageDeress1,
},
{
  name: 'بالا باز / ورزشی زنانه',
  discription: 'گرمکن ورزشی زنانه بالا باز مدل 59-80201005905',
  price: '630000',
  salePrice: '360000',
  image: imageDeress1,
},
{
  name: 'بالا باز / ورزشی زنانه',
  discription: 'گرمکن ورزشی زنانه بالا باز مدل 59-80201005905',
  price: '630000',
  salePrice: '360000',
  image: imageDeress1,
},
{ 
  name: 'بالا باز / ورزشی زنانه',
  discription: 'گرمکن ورزشی زنانه بالا باز مدل 59-80201005905',
  price: '630000',
  salePrice: '360000',
  image: imageDeress1,},
{
   name: 'بالا باز / ورزشی زنانه',
  discription: 'گرمکن ورزشی زنانه بالا باز مدل 59-80201005905',
  price: '630000',
  salePrice: '360000',
  image: imageDeress1,},
{ 
  name: 'بالا باز / ورزشی زنانه',
  discription: 'گرمکن ورزشی زنانه بالا باز مدل 59-80201005905',
  price: '630000',
  salePrice: '360000',
  image: imageDeress1,},
{
  name: 'بالا باز / ورزشی زنانه',
  discription: 'گرمکن ورزشی زنانه بالا باز مدل 59-80201005905',
  price: '630000',
  salePrice: '360000',
  image: imageDeress1,
},
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-[#ffffff] h-screen'>
      {/* tool bar */}
      <div className='flex items-center gap-2 p-4 '>
        <img src={imageMenu} className='h-7 w-7'/>
        <img src={imageshop2} className='h-10 w-10'/>
        <h2 className='text-2xl font-bold'>فراوین</h2>
        <div className='flex-1'/>
        <img src={imageshop} className='h-7 w-7'/>
        <h2 className='text-2xl font-bold'>سبد خرید</h2>
      </div>
      {/* Separator */}
      <div className='h-[1px] bg-slate-300 mx-4'/>
      <div className='flex items-center'>
      <img src={imageBanner} className='mt-4 m-auto h-96 w-96 rounded-md'/>
      </div>

      {/* commodity */}
      
      <div className='flex gap-3 p-6 flex-wrap'>
        {itemList.map((item)=> <div key={item.name} className='flex-1 rounded-lg border-[1px] bg-[#ffffff] overflow-hidden min-w-[400px]'>
        <div className='h-28'>
          <img src={item.image} className='h-full m-auto'/>
        </div>
        <div className='flex flex-col h-48 bg-[#f1f1f1] rounded-t-2xl p-2'>
          <h4 className='text-xs font-semibold'>{item.name}</h4>
          <p className='text-xs font-light mt-2 leading-6'>{item.discription}</p>
          <div className='flex-1'/>
          <p className='text-xs font-light line-through text-left text-slate-300'>{item.price}</p>
          <h4 className='text-sm font-semibold text-left'>{item.salePrice}تومان</h4>
          <button className='mt-2 rounded-md bg-[#30303a] text-white text-sm p-1'>خرید کالا</button>
        </div>
        </div>)}
      </div>
    </div>
  </React.StrictMode>,
)
