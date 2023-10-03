import './RollingBox.css';

const RollingBox = ({ onClick }: { onClick?: () => void }) => {
    return (
        <div onClick={onClick} className="flex min-h-max w-max items-center justify-center pr-2 ">
            <div className="box">
                <div className="face top">
                    <div className="top-left"></div>
                    <div className="top-right"></div>
                </div>
                <div className="face bottom"></div>
                <div className="face back"></div>
                <div className="face front"></div>
                <div className="face left"></div>
                <div className="face right"></div>
            </div>
        </div>
    );
};

export default RollingBox;
