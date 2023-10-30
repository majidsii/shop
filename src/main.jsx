import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import imageMenu from './assets/menu.svg'
import imageshop from './assets/shop.svg'
import imageshop2 from './assets/shop2.svg'
import imageBanner from './assets/Banner.png'
import imageDeress1 from './assets/deress1.jpg'

const itemList1 = [
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
   
},
]

const itemList = Array(Math.round(Math.random() * 1000)).fill(null).map(
  (row, index) => {
    const price = Math.round(Math.random() * 1000000) + 100000;
    return{
      id: index, 
      name: "کالای شماره" + index + 1,
      description: "کالای شماره" + " " + Math.random(),
      price: price,
      salePrice: Math.round(price / 3),
      mojodi: Math.round(Math.random() * 100),
    }
  }
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <App/>
  </React.StrictMode>,
)

function App() {

  const [buyCount, setBuyCount] = useState(0);

  return( <div className='bg-[#ffffff] h-screen'>
  {/* tool bar */}
  <div className='flex items-center gap-2 p-4 bg-[#ffffff]'>
    <img src={imageMenu} className='h-7 w-7'/>
    <img src={imageshop2} className='h-10 w-10'/>
    <h2 className='text-2xl font-bold'>فراوین</h2>
    <div className='flex-1'/>
    <div className='relative'>
       <img src={imageshop} className='h-9 w-9'/>
       {buyCount !== 0 && (
       <span className='absolute left-[50%] top-[50%] bg-red-600 text-white rounded-full w-6 h-6 text-center'>
        {(buyCount > 99 ? "۹۹+" : buyCount).toLocaleString('fa-ir')}
       </span>)}
    </div>
   
    <h2 className='text-2xl font-bold'>سبد خرید</h2>
  </div>
  {/* Separator */}
  <div className='h-[1px] bg-slate-300 mx-4'/>
  <div className='flex items-center'>
  <img src={imageBanner} className='mt-4 m-auto h-96 w-96 rounded-md'/>
  </div>

  {/* commodity */}
  
  <div className='flex gap-3 p-6 flex-wrap shadow-inner	 '>
    {itemList.map((item)=> <div key={item.name} className='flex-1 rounded-lg border-[1px] bg-[#ffffff] overflow-hidden min-w-[400px]'>
    <div className='h-28'>
      <img src={item.image || imageBanner } className='h-full m-auto' alt={item.name}/>
    </div>
    <div className='flex flex-col h-48 bg-gray-200 rounded-t-2xl p-2'>
      <h4 className='text-xs font-semibold'>{item.name}</h4>
      <span className='text-xs'>(موجودی : {item.mojodi})</span>
      <p className='text-xs font-light mt-2 leading-6'>{item.discription}</p>
      <div className='flex-1'/>
      <p className='text-sm font-light line-through text-left text-slate-400'>{(+item.price).toLocaleString('fa-ir')} تومان</p>
      <h4 className='text-sm font-semibold text-left'>{(+item.salePrice).toLocaleString("fa-ir")} تومان</h4>
      <button disabled={item.mojodi === 0} onClick={()=> setBuyCount(c => c+1)} className='mt-2 rounded-md bg-[#30303a] text-white text-sm p-1'>افزودن به سبد خرید</button>
    </div>
    </div>)}
  </div>
</div>);
}