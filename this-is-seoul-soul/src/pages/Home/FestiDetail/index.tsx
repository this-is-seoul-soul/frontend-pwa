import { useSearchParams } from "react-router-dom";

interface Props {}

export const FestiDetailPage = ({ }: Props) => {
    const [searchParams] = useSearchParams();
    const param = searchParams.get('festSeq') || "";
    const festSeq = parseInt(param);


    return (
        <div>
            상세 페이지 {festSeq}
        </div>
    );
}