interface ListHeaderProps {
    total?: number
}

export const ListHeader = ({ total } : ListHeaderProps) => {
    return (
        <div className="flex justify-between items-center px-4 bg-white">
            <div>
                총 <span className=" text-yellow-400 font-bold">{total}</span>개
            </div>
        </div>
    );
}