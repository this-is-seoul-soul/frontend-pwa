import { GoSearch } from "react-icons/go";

export const SearchBar = ({ }) => {
    return (
        <div className="flex w-full bg-white shadow-md">
            <div className="p-4">
                <GoSearch
                    size={20}
                    className="text-yellow-400 stroke-1 stroke-yellow-400"
                />
            </div>
            <input
                type="text"
                placeholder="어떤 축제를 찾으시나요?"
                className=" placeholder-gray-500 w-full mr-4 text-base"
            />
        </div>)
    ;
}