import contactItems from 'data/constants/contactItems';

const Contact = () => {
    return (
        <div className="center-row glass fixed bottom-0 z-50 w-screen pb-1">
            <nav className="center-row  cursor-pointer gap-5 p-2">
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
        </div>
    );
};

export default Contact;
