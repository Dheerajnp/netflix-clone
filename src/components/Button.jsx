const Button = ({ icon, text, style }) => {
    return (
        <button
            className={`py-2 px-8 rounded-md flex items-center justify-center font-bold mr-3 cursor-pointer ${style}`}
        >
            {icon}
            <span className="ml-2">{text}</span>
        </button>
    );
};

export default Button;