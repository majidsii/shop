import { useState } from 'react';
import Input from '../inputFrom.jsx'
import {  Link } from "react-router-dom";


function BuyerForm(){
    const [form, setForm] = useState({
        code:"",
        name:"",
        mobile:"",
    });
return(
    <div className="h-screen bg-[#ffffff] py-8 px-6">
        <div className="flex ">
            <span className="flex-1">آدرس گیرنده</span>
            <button className="text-[#9E9292]" ><Link to="/">بازگشت</Link></button>
        </div>
        <div className='mt-4'>
            <Input
                value={form.code}                 
                onInput={(e)=> setForm({...form, code: e.target.value})}
                label="کد ملی"
                text={form.code.length == "" ? "کد ملی اجباری میباشد" : form.code.length != 10 ? "کد ملی باید ده رقم باشد" : ""}
                type="number"
                />
                <Input
                value={form.name}
                onInput={(e)=> setForm({...form, name: e.target.value})}
                text={form.name.length < 5 ? "نام خانوادگی باید بیشتر از 5 کاراکتر باشد" : ""}
                label="نام و نام خانوادگی"
                />
                <Input
                value={form.mobile}
                onInput={(e)=> setForm({...form, mobile: e.target.value})}
                label='موبایل'
                type="number"
                text={ form.mobile == "" ? "وارد کردن شماره موبایل الزامی است" : form.mobile.length != 11 ? "شماره موبایل باید یازده رقم باشد" : form.mobile[0] != "0" && form.mobile[1] != "9" ? "شماره موبایل با 09 باید شروع شود" : "شماره موبایل به درستی وارد شده است"}
                />
            <h4>
                {form.code}
            </h4>

        </div>

    </div>
)
}

export default BuyerForm;

