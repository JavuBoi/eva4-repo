const MessageBox = (props) => {
    const active = props.active
    const message = props.message

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