const Infobox = ({ type, title, open, children }) => {
    return (
        <div className={`info-box ${type}`}>
            <details open={open ? true : false }>
                <summary>{title}</summary>
                <div>{children}</div>
            </details>
        </div>
    )
}

export default Infobox;