function Input(props) {

    const { text , label , ...others } = props;
    return (
        <div className="relative">
            <div className="rounded-md border-[#30303A] border-[1px] h-10 flex p-4 items-center mt-3 ">
                <label className="absolute top-[-16px] bg-[#ffffff] px-2"> { label } </label>
                <input
                 {...others}
                  className="outline-none w-full bg-transparent h-8"/>
            </div>
            <p className="text-[#9E9292] px-4 py-1">{text}</p>

        </div>
    );

}

export default Input;