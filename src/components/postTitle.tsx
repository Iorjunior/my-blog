interface PostTitleProps{
    title : string;
    date : string;
    timeToRead : number;
}

export default function PostTitle(props: PostTitleProps){
    return(
        <>
            <h1 className="font-bold text-3xl">{props.title}</h1>
            <div className="font-sm text-gray-500 mt-1">
            <span>{props.date}</span>
            <span>·</span>
            <span>{props.timeToRead}min</span>
            </div>
        </>
    )
}