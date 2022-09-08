import { useState } from "react"

export const CreateBot = (props) => {
    const { } = props
    const [bot, setBot] = useState({
        botName: '',
        role: '',
        userName: '',
        email: '',
        gender: '',
        experience: '',
        education: '',
        other: ''
    })

    const onSubmit = () => {
        console.log('submiting')
    }
    return (
        <section className="create-bot pad-10px">
            <form onSubmit={onSubmit} className="flex column pad-10px">
                <div className="input-wrapper flex ">

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

                <div>
                    <fieldset>
                        <legend>Gender</legend>
                        <div className="flex pad-10px">
                            <div>
                                <input type="radio" id="male" name="gender" value="male" />
                                <label htmlFor="male">Male</label>
                            </div>

                            <div>
                                <input type="radio" id="female" name="gender" value="female" />
                                <label htmlFor="female">Female</label>
                            </div>
                        </div>

                    </fieldset>
                </div>


                <div className="flex column">
                    <label htmlFor="">Experience</label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>

                    <label htmlFor="">Education</label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>

                    <label htmlFor="">Other</label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
            </form>
        </section>
    )
}