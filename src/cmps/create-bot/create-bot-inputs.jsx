

export const CreateBotInputs = (props) => {
    const { handleChange } = props

    return (
        <div className="input-wrapper flex justify-center ">

            <div className="wid-100 flex column pad-10px">

                <div className="pad-10px">
                    <label htmlFor="bot-name">Bot Name:</label>
                    <input onBlur={handleChange} type="text" placeholder="Bot Name" id="bot-name" name="botName" />
                </div>

                <div className="pad-10px">
                    <label htmlFor="role">Role:</label>
                    <input onBlur={handleChange} type="text" placeholder="Role" id="role" name="role" />
                </div>

            </div>

            <div className="wid-100 flex column pad-10px">
                <div className="pad-10px">
                    <label htmlFor="user-name">User Name:</label>
                    <input onBlur={handleChange} type="text" placeholder="User Name" id="user-name" name="userName" />
                </div>

                <div className="pad-10px">
                    <label htmlFor="email">Email:</label>
                    <input onBlur={handleChange} type="text" placeholder="Email" id="email" name="email" />
                </div>
            </div>

        </div>

    )
}