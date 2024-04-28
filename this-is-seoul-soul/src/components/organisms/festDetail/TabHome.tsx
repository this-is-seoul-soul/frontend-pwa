import { festDetail } from "types/festDetail";
import { GoLocation, GoPerson  } from "react-icons/go";
import { MdAccessTime } from "react-icons/md";
import { FaWonSign, FaLink } from "react-icons/fa6";

interface TabHomeProps {
    fest: festDetail
}

export const TabHome = ({ fest } : TabHomeProps) => {
    return (
        <div className="p-4 px-6 flex flex-col gap-5">
            <div className="flex items-start gap-2">
                <div><GoLocation size={18} className="mt-1 text-gray-600 stroke-1 stroke-gray-600"/></div>
                <span>{fest.guname} {fest.place}</span>
            </div>
            <div className="flex items-start gap-2">
            <div><MdAccessTime size={18} className="mt-1 text-gray-600 stroke-1 stroke-gray-600"/></div>
                <span className="font-bold">{fest.isContinue ? "진행중" : "미진행"}</span>
                <span id="period" className="text-gray-800">
                    {fest.startDate} ~ {fest.endDate}
                </span>
            </div>
            <div className="flex items-start gap-2">
            <div><FaWonSign size={18} className="mt-1 text-gray-600 "/></div>
                <span>{fest.isFree}</span>
            </div>
            <div className="flex items-start gap-2">
            <div><GoPerson size={18} className="mt-1 text-gray-600 stroke-1 stroke-gray-600"/></div>
                <span>{fest.useTrgt}</span>
            </div>
            <div className="flex items-start gap-2 break-all">
            <div><FaLink size={18} className="mt-1 text-gray-600 stroke-1 stroke-gray-600"/></div>
                <p className=" text-blue"><a href={fest.orgLink}>{fest.orgLink}</a></p>
            </div>
        </div>
    );
}