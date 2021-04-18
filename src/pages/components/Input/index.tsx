/* eslint-disable no-restricted-globals */
import React, {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { useField } from '@unform/core'

import { IconBaseProps } from 'react-icons/lib'
import { Input, Container, Error } from './styles'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  icon?: React.ComponentType<IconBaseProps>
}

const InputComponent: React.FC<IInputProps> = ({
  name,
  icon: Icon,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const { fieldName, defaultValue, error, registerField } = useField(name)

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)

    setIsFilled(!!inputRef.current?.value)
  }, [])

  /* Assim que o componente for renderizado (exibido) em tela, o unform vai
     registrar este input
  */
  useEffect(() => {
    registerField({
      name: fieldName, // nome do campo do input
      ref: inputRef.current, // qual o elemento input que esta sendo referenciado
      path: 'value', // de onde o unform vai pegar o valor do input que esta no ref
    })
  }, [fieldName, registerField])

  return (
    <Container isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
      {Icon && <Icon size={20} />}
      <Input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
      {error && <Error title={error} />}
    </Container>
  )
}

export default InputComponent
