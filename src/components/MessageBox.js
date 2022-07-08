const MessageBox = (props) => {
    const active = props.active
    const message = props.message

    return (
        <>
            {active && <div className="alert alert-danger">
                <strong>ERROR</strong>
                <p>{message}</p>
            </div>}
        </>
    )
}

export default MessageBox