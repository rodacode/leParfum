import { Component } from "react"
import TextareaAutosize from "react-autosize-textarea"
import { sendContactMail } from "../mail-api" 
import './contacto.scss';

class Contacto extends Component {
    state = {
        formButtonDisabled: false,
        formButtonText: "Send",
        name: "",
        mail: "",
        formContent: ""
    }

    render() {    
        const { formButtonText, formButtonDisabled, name, mail, formContent } = this.state
        
        const btnClass = formButtonDisabled ? "disabled" : "" 

        return (
            <div className="container-fluid">               
                <div className="grid"> 
                    <div className="col-8">
                        <h2 className="text-center">Contacto</h2>
                    </div>
                </div>
                <div className="grid">
                    <div className="col-4">
                        <input
                            type="text"
                            placeholder="Nombre"
                            value={name}
                            name="fname"
                            onChange={this.onNameChange} />
                    </div>
                    <div className="col-4">
                        <input
                            type="email"
                            placeholder="E-Mail"
                            value={mail}
                            name="email"
                            onChange={this.onMailChange} />
                    </div>
                </div>
                <div className="grid">
                    <div className="col-8">
                        <TextareaAutosize
                            name="text"
                            placeholder="Mensaje"
                            value={formContent}
                            onChange={this.onFormContentChange}
                            style={{
                                minHeight: "48px",
                                width: "100%",
                                border: "none",
                                borderRadius: "0px",
                                margin: "8px 0px",
                                resize: "none",
                                padding: "0px",
                                paddingBottom: "14px",
                                WebkitAppearance: "none",
                                MozAppearance: "none"
                            }} /> 

                    </div>
                    <div className="col-8">
                        <button
                            className={btnClass}
                            type="submit"
                            onClick={this.submitContactForm}
                            disabled={formButtonDisabled}>

                           {formButtonText}
                       </button>
                    </div>
                </div>
            </div>
        )
    }

    onNameChange = (event) => {
        this.setState({ name: event.target.value })
    }

    onMailChange = (event) => {
        this.setState({ mail: event.target.value })
    }

    onFormContentChange = (event) => {
        this.setState({ formContent: event.target.value })
    }

    submitContactForm = async (event) => {
        event.preventDefault()

        const recipientMail = 'nhardmeier@yahoo.es'
        const { name, mail, formContent } = this.state
        console.log('hey', name, mail, formContent)

        const res = await sendContactMail(recipientMail, name, mail, formContent)
        if (res.status < 300) {
            this.setState({
                formButtonDisabled: true,
                formButtonText: "Gracias por su mensaje",
                name: "",
                mail: "",
                formContent: ""
            })

        } else {
            this.setState({ formButtonText: "Por favor rellene los campos." })
        }
    }
}

export default Contacto