import { useState } from "react"
import { CreateBotInputs } from "../cmps/create-bot/create-bot-inputs"
import { CreateBotRadios } from "../cmps/create-bot/create-bot-radios"
import { CreateBotTextareas } from "../cmps/create-bot/create-bot-textareas"

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

    const onSubmit = (ev) => {
        console.log('submiting')
    }

    const handleChange = (ev) => {
        let timeOut
        const { target } = ev
        const val = target.value
        const field = target.name
        clearTimeout(timeOut)
         timeOut = setTimeout(() => {
            setBot({ ...bot, [field]: val })
            console.log('Hola');
        }, 3000)
        
    }
    console.log(bot);
    return (
        <div className="fake-section flex">
            <section className="create-bot align-center pad-10px">
                <form onSubmit={onSubmit} className="flex column pad-10px">
                    <CreateBotInputs handleChange={handleChange} />
                    <CreateBotRadios handleChange={handleChange} />
                    <CreateBotTextareas handleChange={handleChange} />
                </form>
            </section>

            <div className="will-remove">

            </div>
        </div>
    )
}