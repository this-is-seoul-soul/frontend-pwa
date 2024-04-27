import { GoSearch } from "react-icons/go";

interface SearchBarProps {
    map?: boolean;
}

/* 지도 화면 검색바는 <SearchBar map /> 으로 사용합니다. */
export const SearchBar = ({ map = false }: SearchBarProps) => {
    
    
    return (
        <div className={`${map ? "p-4": `h-[52px]`}`}>
            <div className={`flex w-full max-w-[500px] bg-white shadow-md ${map ? "rounded-xl" : "fixed z-50"}`}>
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
            </div>
        </div>
    );
}