function Button(props){
    const { name } = props;
    return ( <button className="m-[0.5em] rounded-lg border border-transparent  py-[0.rem] px-[0.5em] text-base font-medium bg-[rgb(210,250,255)] cursor-pointer transition-colors duration-[250ms] hover:border-[#646cff] hover:bg-[rgb(164,237,247)] w-36 h-12 text-black">{ name }</button>)
}

export default Button;