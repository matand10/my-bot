

export const CreateBotInputs = () => {

    return (
        <div className="input-wrapper flex align-center ">

            <div className="flex column pad-10px">

                <div className="pad-10px">
                    <label htmlFor="bot-name">Bot Name:</label>
                    <input type="text" placeholder="Bot Name" id="bot-name" />
                </div>

                <div className="pad-10px">
                    <label htmlFor="role">Role:</label>
                    <input type="text" placeholder="Role" id="role" />
                </div>

            </div>

            <div className="flex column pad-10px">
                <div className="pad-10px">
                    <label htmlFor="user-name">User Name:</label>
                    <input type="text" placeholder="User Name" id="user-name" />
                </div>

                <div className="pad-10px">
                    <label htmlFor="email">Email:</label>
                    <input type="text" placeholder="Email" id="email" />
                </div>
            </div>

        </div>

    )
}