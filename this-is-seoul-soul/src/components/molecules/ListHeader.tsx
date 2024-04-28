import { IoIosArrowDown } from "react-icons/io";

interface ListHeaderProps {
    total?: number
    sort?:boolean
}

export const ListHeader = ({ total, sort = false } : ListHeaderProps) => {
    return (
        <div className="flex justify-between items-center px-6 bg-white">
            {total ? <div>
                총 <span className=" text-yellow-400 font-bold">{total}</span>개
            </div> : <div></div>}
            {sort && <div className="flex items-center">
                추천순 <IoIosArrowDown className="mt-1 pl-1" />
            </div>}
        </div>
    );
}