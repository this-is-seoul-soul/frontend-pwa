import { FestiDetailPage } from "constants/pathname";
import { useAtomValue } from "jotai";
import { headerTitleAtom } from "stores/headerStore";
import { TopHeaderBase } from "./TopHeaderBase";

interface TopHeaderProps {
    label: string
}

export const TopHeader = ({ label }: TopHeaderProps) => {
    const headerTitle = useAtomValue(headerTitleAtom);

    return (
        <>
            {label === FestiDetailPage.label && <TopHeaderBase back title={headerTitle} /> }
        </>
    );
}