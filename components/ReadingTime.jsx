const ReadingTime = ({ words }) => {
    const timeToRead = Math.round(words / 200);
    return (
        <div className="readingtime">
            Estimated reading time: {timeToRead} {timeToRead <2 ? "minute" : "minutes"}
        </div>
    )
}

export default ReadingTime;