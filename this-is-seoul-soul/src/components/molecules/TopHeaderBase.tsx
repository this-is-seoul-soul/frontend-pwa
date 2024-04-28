import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

interface BaseTopHeaderProps {
    back?: boolean
    title?: string
}

export const TopHeaderBase = ({ back = false, title}: BaseTopHeaderProps) => {
    const navigate = useNavigate();

    return (
        <div className="relative  h-[47px]">
            <div className="fixed max-w-[500px] left-0 right-0 mx-auto grid grid-cols-3 px-5 py-3 bg-white">
                <div className="justify-self-start">
                    {back ? <div onClick={() => { navigate(-1) }}><IoIosArrowBack size={24} /></div> : <></>}
                </div>
                <div className="justify-self-center font-bold">{title}</div>
                <div className="justify-self-end"></div>
            </div>
        </div>

    );
}