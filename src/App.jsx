import React, { useState } from 'react'
import itemList from './itemList.js'
import imageBanner from './assets/Banner.png'
import imageshop2 from './assets/shop2.svg'
import imageshop from './assets/shop.svg'
import imageMenu from './assets/menu.svg'


export default function App() {

    // Purchase operation

    const [basketList, setbasketList] = useState([]);
    const [openBasketDialog, setbasketDialog] = useState(false);

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

    const getBasketGroupList = () =>{
      const list = []
      basketList.forEach(item => {const finded = list.find(i => i.item === item);
      if(finded) {
        finded.count++;
      }else {
        list.push({ count: 1, item });
      }
    });
    return list;
    };
    
  
    return (<div className='bg-[#ffffff] h-screen'>
      
      {/* tool bar */}
      
      <div className='flex items-center gap-2 p-4 bg-[#ffffff]'>
      
        <img src={imageMenu} className='h-7 w-7' />
      
        <img src={imageshop2} className='h-10 w-10' />
      
        <h2 className='text-2xl font-bold'>فراوین</h2>
      
        <div className='flex-1' />
      
        <div className='relative'>
      
          <img src={imageshop} className='h-9 w-9' />
      
          {buyCount !== 0 && (
      
      <span className='absolute left-[50%] top-[50%] bg-red-600 text-white rounded-full w-6 h-6 text-center'>
      
              {(buyCount > 99 ? "۹۹+" : buyCount).toLocaleString('fa-ir')}
      
            </span>)}
      
        </div>
  
      
        <h2 className='text-2xl font-bold'>سبد خرید</h2>
      
      </div>
      
      {/* Separator */}
      
      <div className='h-[1px] bg-slate-300 mx-4' />
      
      <div className='flex items-center'>
      
        <img src={imageBanner} className='mt-4 m-auto h-96 w-96 rounded-md' />
      
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
                  onClick={() => { decreseItem(item);}} 
                  className='w-6 disabled:bg-slate-300 cursor-pointer my-2 rounded-md bg-[#30303a] text-white text-sm p-1'>
                  -</button>
                }
  
                {buyItemCount === 0 && <button
                  disabled={item.mojodi === 0}
                  onClick={() => { buyItem(item);}}
                  className='flex-1 disabled:bg-slate-300 cursor-pointer my-2 rounded-md bg-[#30303a] text-white text-sm p-1'>
                    خرید کالا</button>
                }
  
                {buyItemCount !== 0 && <button
                  disabled={item.mojodi === 0}
                  onClick={() => { 
                  if (buyItemCount >= item.mojodi) return alert("موجودی این کالا تمام شد");
                  buyItem(item);}} 
                  className='flex-1 disabled:bg-slate-300 cursor-pointer my-2 rounded-md bg-[#30303a] text-white text-sm p-1'>
                  تعداد: {buyItemCount}عدد</button>
                }
  
                {buyItemCount !== 0 && <button 
                  disabled={item.mojodi === 0} 
                  onClick={() => {
                  if (buyItemCount >= item.mojodi) return alert("موجودی این کالا تمام شد");
                  buyItem(item);}} 
                  className='w-6 disabled:bg-slate-300 cursor-pointer my-2 rounded-md bg-[#30303a] text-white text-sm p-1'>
                  +</button>
                }
  
              </div>
            </div>
          </div>);
        })}
      </div>
      
      {/* basket dialog */}
      
      <div className='bg-[#00000088] fixed top-0 w-full h-full p-8 backdrop-blur-sm' >
        <div className='flex flex-col bg-white p-4 gap-4 rounded-xl'>
          {getBasketGroupList().map((orderItem)=> {
            const {item , count} = orderItem;
            return (<div className='flex gap-2 items-center' key={item.name}>
              <img src={imageBanner} className='w-10 h-10'/>
              <div className='text-sm'>
                {item.name}

                <span className='mr-10'>
                  تعداد خرید:
                  {count}
                </span>
                <p className='mt-1'>{item.description}</p>
              </div>
              <button>X</button>
              </div>);
              
          })}
        </div>
      </div>
    </div>);
  };