export const CreateBotTextareas = () => {
    return (
        <div className="flex column pad-10px">
            <div className="pad-10px">
                <label htmlFor="">Experience</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>

            <div className="pad-10px">
                <label htmlFor="">Education</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>

            <div className="pad-10px">
                <label htmlFor="">Other</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
        </div>
    )
}