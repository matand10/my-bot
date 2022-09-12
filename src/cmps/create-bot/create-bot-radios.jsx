export const CreateBotRadios = () => {
    return (
        <div className="radio-wrapper">
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
    )
}