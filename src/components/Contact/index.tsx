import contactItems from 'data/constants/contactItems';

const Contact = () => {
    return (
        <nav className="center-row z-50 cursor-pointer gap-5 p-2">
            {contactItems.map((item) => (
                <a
                    href={item.link}
                    className="group font-sans text-custom-primary filter hover:brightness-110"
                >
                    <span className="hidden lg:inline-block">{item.title}</span>
                    <i
                        className={`ri-${item.icon}-line ml-[5px] mt-[2px] text-2xl transition-opacity duration-200 ease-in-out  lg:text-base lg:opacity-0 lg:group-hover:opacity-100`}
                    />
                </a>
            ))}
        </nav>
    );
};

export default Contact;
