import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

export const InputForm = ({ label, type = 'text', onChange, value }) => {
    return (
        <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
                {label}
            </InputGroup.Text>
            <Form.Control
                onChange={onChange}
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                type={type}
                value={value}
            />
        </InputGroup>
    )
}
