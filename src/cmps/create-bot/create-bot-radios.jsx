export const CreateBotRadios = (props) => {
    const {handleChange } = props
    return (
        <div className="radio-wrapper">
            <fieldset>
                <legend>Gender</legend>
                <div className="flex pad-10px">
                    <div>
                        <input type="radio" onChange={handleChange} id="male" name="gender" value="male" />
                        <label htmlFor="male">Male</label>
                    </div>

                    <div>
                        <input type="radio" onChange={handleChange} id="female" name="gender" value="female" />
                        <label htmlFor="female">Female</label>
                    </div>
                </div>

            </fieldset>
        </div>
    )
}