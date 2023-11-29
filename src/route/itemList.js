import imageDeress1 from '../assets/deress1.jpg'

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
];

const itemList = Array(Math.round(Math.random() * 10)).fill(null).map(
  (row, index) => {
    const price = Math.round(Math.random() * 1000000) + 100000;
    return{
      id: index, 
      name: "کالای شماره" + index + 1,
      description: "توضیحات کالای مدل" + " " + Math.random(),
      price: price,
      salePrice: Math.round(price / 3),
      mojodi: Math.round(Math.random() * 100)
    }
  }
);

export default itemList;