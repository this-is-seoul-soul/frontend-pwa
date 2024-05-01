interface TitleSectionProps {
    title: string
    description?: string
}

export const TitleSection = ({title, description} : TitleSectionProps) => {
    return (
        <div>
            <div className="text-lg font-bold">
                {title}
            </div>
            <div className="text-sm text-gray-800">
                {description}
            </div>
        </div>
    );
}