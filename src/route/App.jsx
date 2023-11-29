import react, { useEffect, useState } from 'react'
import {  Link } from "react-router-dom";
import itemList from './itemList.js'
import imageBanner from '../assets/banner.png'
import imageBanner2 from '../assets/deress1.jpg'
import imageshop2 from '../assets/shop2.svg'
import imageshop from '../assets/shop.svg'
import imageMenu from '../assets/menu.svg'
// import BuyerForm from './pages/BuyerForm.jsx'

function useIntervalHook(callback,intervalTime = 1000){
  useEffect(()=>{
    const id = setInterval(()=>{
    callback();
    }, intervalTime);
    return()=> clearInterval(id);
  },[callback, intervalTime]);
}


export default function App() {

  // Purchase operation

  const [basketList, setbasketList] = useState([]);
  const [openBasketDialog, setBasketDialog] = useState(false);
  const [page, setPage] = useState('buyerForm');
  const [sliderimage, setSliderImage] = useState(imageBanner2);
  
  useIntervalHook(()=>setSliderImage(image => image === imageBanner ? imageBanner2 : imageBanner ),2000);
  const buyItem = (item) => {

    basketList.push(item);

    setbasketList([...basketList]);

  };

  // Remove from shopping cart

  const decreseItem = (item) => {

    const findItemIndex = basketList.findIndex((basketItem) => basketItem === item);

    if (findItemIndex === -1) return alert("از این کالا در سبد خرید ندارید");

    basketList.splice(findItemIndex, 1);

    setbasketList([...basketList]);

  };

  // Number of purchases

  const buyCount = basketList.length;

  const getBasketGroupList = () => {
    const list = []
    basketList.forEach(item => {
      const finded = list.find(i => i.item === item);
      if (finded) {
        finded.count++;
      } else {
        list.push({ count: 1, item });
      }
    });
    return list;
  };

  
    return (
      <div className='bg-[#ffffff] h-screen'>

        {/* tool bar */}

        <div className='flex items-center gap-2 p-4 bg-[#ffffff]'>

          <img src={imageMenu} className='h-7 w-7' />

          <img src={imageshop2} className='h-10 w-10' />

          <h2 className='text-2xl font-bold'>فراوین</h2>

          <div className='flex-1' />

          <div className='relative' onClick={() => setBasketDialog(true)}>

            <img src={imageshop} className='h-9 cursor-pointer  w-9' />

            {buyCount !== 0 && (

              <span className='absolute left-[50%] top-[50%] bg-red-600 text-white rounded-full w-6 h-6 text-center'>

                {(buyCount > 99 ? "۹۹+" : buyCount).toLocaleString('fa-ir')}

              </span>)}

          </div>


          <span className='text-2xl cursor-pointer font-bold' onClick={() => setBasketDialog(true)} >سبد خرید</span>

        </div>

        {/* Separator */}

        <div className='h-[1px] bg-slate-300 mx-4' />

        <div className='relative flex w-full mt-2  h-96 items-center'>
          
          
          <img src={imageBanner} style={{transitionDuration:'1500ms'}}  className={'absolute left-[0px] right-[0px] mx-auto h-96 w-96 rounded-md transition-opacity ' + (sliderimage === imageBanner2 ? 'opacity-0' :'')} />
          

          <img src={imageBanner2} style={{transitionDuration:'1500ms'}}  className={'absolute left-[0px] right-[0px]  mx-auto h-96 w-96 rounded-md transition-opacity ' + (sliderimage === imageBanner ? 'opacity-0':'')} />
              

        </div>


        {/* commodity */}


     <div className='flex gap-3 p-6 flex-wrap shadow-inner	 '>

          {itemList.map((item) => {

            const buyItemCount = basketList.filter((buyItem) => buyItem === item).length;

            return (<div key={item.name} className='flex-1 rounded-lg border-[1px] bg-[#ffffff] overflow-hidden min-w-[400px]'>
              
              <div className='h-28'>

                <img src={item.image || imageBanner} className='h-full m-auto' alt={item.name} />

              </div>

              <div className='flex flex-col h-48 bg-gray-200 rounded-t-2xl p-2'>

                <h4 className='text-xs font-semibold'>{item.name}</h4>

                <span className='text-xs'>(موجودی : {item.mojodi})</span>

                <p className='text-xs font-light mt-2 leading-6'>{item.discription}</p>

                <div className='flex-1' />

                <p className='text-sm font-light line-through text-left text-slate-400'>{(+item.price).toLocaleString('fa-ir')} تومان</p>

                <h4 className='text-sm font-semibold text-left'>{(+item.salePrice).toLocaleString("fa-ir")} تومان</h4>

                {/* buttons */}

                <div className='flex gap-1 items-center'>

                  {buyItemCount !== 0 && <button
                    disabled={item.mojodi === 0}
                    onClick={() => { decreseItem(item); }}
                    className='w-6 disabled:bg-slate-300 cursor-pointer my-2 rounded-md bg-[#30303a] text-white text-sm p-1'>
                    -</button>
                  }

                  {buyItemCount === 0 && <button
                    disabled={item.mojodi === 0}
                    onClick={() => { buyItem(item); }}
                    className='flex-1 disabled:bg-slate-300 cursor-pointer my-2 rounded-md bg-[#30303a] text-white text-sm p-1'>
                    خرید کالا</button>
                  }

                  {buyItemCount !== 0 && <button
                    disabled={item.mojodi === 0}
                    onClick={() => {
                      if (buyItemCount >= item.mojodi) return alert("موجودی این کالا تمام شد");
                      buyItem(item);
                    }}
                    className='flex-1 disabled:bg-slate-300 cursor-pointer my-2 rounded-md bg-[#30303a] text-white text-sm p-1'>
                    تعداد: {buyItemCount}عدد</button>
                  }

                  {buyItemCount !== 0 && <button
                    disabled={item.mojodi === 0}
                    onClick={() => {
                      if (buyItemCount >= item.mojodi) return alert("موجودی این کالا تمام شد");
                      buyItem(item);
                    }}
                    className='w-6 disabled:bg-slate-300 cursor-pointer my-2 rounded-md bg-[#30303a] text-white text-sm p-1'>
                    +</button>
                  }

                </div>
              </div>
            </div>);
          })}
        </div>
      
        {/* basket dialog */}

        {openBasketDialog && buyCount &&
          <div onClick={() => setBasketDialog(false)} className='bg-[#00000088] fixed top-0 w-full h-full p-8 backdrop-blur-sm' >
            <div onClick={(event) => { event.stopPropagation() }} className='flex flex-col bg-white p-4 gap-4 rounded-xl'>
              <div className='flex items-start bg-black text-white w-6 rounded-full'>
                <button onClick={() => setBasketDialog(false)} className=' mx-auto font-bold'>X</button></div>
              {getBasketGroupList().map((orderItem) => {
                const { item, count } = orderItem;
                return (<div className='flex gap-2 items-center' key={item.name}>
                  <img src={imageBanner} className='w-10 h-10' />
                  <div className='text-sm'>
                    {item.name}

                    <span className='mr-10'>
                      تعداد خرید:
                      {(+count).toLocaleString("fa-ir")}
                    </span>
                    <span className='mr-10'>
                      {" "}
                      {(+item.salePrice * count).toLocaleString("fa-ir")} تومان
                    </span>
                    <p className='mt-1'>{item.description}</p>
                  </div>

                </div>);

              })}
              <div className='mr-11'>قیمت قابل پرداخت : {" "}{getBasketGroupList().reduce((price, orderItem) => {
                return orderItem.count * orderItem.item.salePrice + price
              }, 0).toLocaleString("fa-ir")} تومان
                <button  className='mx-10 bg-lime-600 rounded-lg px-4 py-1 text-white '><Link to="/buyform">پرداخت سفارش</Link> </button>
              </div>



            </div>
          </div>};
      </div>
    );

  
}