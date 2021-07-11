import { useField } from "@unform/core"
import { InputHTMLAttributes, useEffect, useRef } from "react"

import { IconBaseProps } from 'react-icons'
import { Container } from './styles'



interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon?: React.ComponentType<IconBaseProps>
}

const Inputs: React.FC<InputProps> = ({ name, ...rest }) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const { fieldName, defaultValue, error, registerField } = useField(name)




    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });


    }, [fieldName, registerField])


    return (

        <Container>

            <input

                defaultValue={defaultValue}
                ref={inputRef}
                {...rest}

            />

        </Container>

    )
}
export default Inputs