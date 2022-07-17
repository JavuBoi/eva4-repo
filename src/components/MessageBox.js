const MessageBox = ({ active, message }) => {
    return (
        <>
            {active && <div className="alert alert-danger mt-1">
                <strong>ERROR</strong>
                <p>{message}</p>
            </div>}
        </>
    )
}

export default MessageBox