import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

interface BaseTopHeaderProps {
    back?: boolean
    title?: string
}

export const TopHeaderBase = ({ back = false, title}: BaseTopHeaderProps) => {
    const navigate = useNavigate();

    return (
        <div className="relative h-[47px]">
            <div className="fixed left-0 right-0  grid grid-cols-3 px-5 py-3 bg-red-100">
                <div className="justify-self-start">
                    {back ? <div onClick={() => { navigate(-1) }}><IoIosArrowBack size={24} /></div> : <></>}
                </div>
                <div className="justify-self-center font-bold">{title}</div>
                <div className="justify-self-end"></div>
            </div>
        </div>

    );
}