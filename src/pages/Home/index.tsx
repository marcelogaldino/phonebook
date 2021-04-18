import React, { useCallback, useEffect, useState, useRef } from 'react'

import { FiBook, FiUser, FiPhone } from 'react-icons/fi'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'
import InputComponent from '../components/Input'
import Button from '../components/Button'

import getValidationErrors from '../../utils/getValidationErrors'

import {
  Container,
  TitleContainer,
  Title,
  HeaderDescription,
  ContainerContent,
  ContentForm,
  FlipeContainer,
  Flipper,
  CardFront,
  CardBack,
  FlipeContainerSide,
  TextContainer,
  CardText,
  CardTextInput,
  TableContainer,
} from './styles'

interface IContact {
  id: string
  firstName: string
  lastName: string
  phone: string
}

const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [fullContact, setFullContact] = useState<IContact[]>(() => {
    const storagedContacts = localStorage.getItem('@Phonebook:contacts')
    if (storagedContacts) {
      return JSON.parse(storagedContacts)
    }
    return []
  })

  const handleFormSubmit = useCallback(
    async (data: IContact) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          FirstNameInput: Yup.string().required('First name is required'),
          LastNameInput: Yup.string().required('Last name is required'),
          PhoneInput: Yup.string().required('Phone number is required'),
        })

        await schema.validate(data, {
          abortEarly: false,
        })

        const id = Math.random().toString(36).substr(2, 9)

        const contact: IContact = { id, firstName, lastName, phone }

        setFullContact([...fullContact, contact])

        setFirstName('')
        setLastName('')
        setPhone('')
      } catch (error) {
        const errors = getValidationErrors(error)
        formRef.current?.setErrors(errors)
      }
    },
    [firstName, lastName, phone, fullContact],
  )

  useEffect(() => {
    localStorage.setItem('@Phonebook:contacts', JSON.stringify(fullContact))
  }, [fullContact])

  return (
    <Container>
      <header>
        <TitleContainer>
          <FiBook />
          <Title>Phone Book</Title>
        </TitleContainer>
        <HeaderDescription>
          The best place to manage your contacts
        </HeaderDescription>
      </header>
      <ContainerContent>
        <ContentForm>
          <Form ref={formRef} onSubmit={handleFormSubmit}>
            <p>First name</p>
            <InputComponent
              type="text"
              name="FirstNameInput"
              icon={FiUser}
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                setFirstName(e.target.value)
              }
              value={firstName}
              id="FirstName"
            />

            <p>Last name</p>
            <InputComponent
              type="text"
              name="LastNameInput"
              icon={FiUser}
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                setLastName(e.target.value)
              }
              value={lastName}
              id="LastName"
            />

            <p>Phone</p>
            <InputComponent
              type="text"
              name="PhoneInput"
              icon={FiPhone}
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                setPhone(e.target.value)
              }
              value={phone}
              id="Phone"
            />

            <Button type="submit">Add Contact</Button>
          </Form>

          <FlipeContainer className="flip-container">
            <Flipper className="flipper">
              <CardFront className="front">
                <FlipeContainerSide>
                  <FiUser size={78} />
                </FlipeContainerSide>
                <TextContainer>
                  <CardText>First Name</CardText>
                  <CardTextInput type="text" value={firstName} disabled />
                  <CardText>Last Name</CardText>
                  <CardTextInput type="text" value={lastName} disabled />
                  <CardText>Phone</CardText>
                  <CardTextInput type="text" value={phone} disabled />
                </TextContainer>
              </CardFront>
              <CardBack className="back">
                <FiBook size={20} />
                <p>Phone Book Inc.</p>
              </CardBack>
            </Flipper>
          </FlipeContainer>
        </ContentForm>
      </ContainerContent>

      <TableContainer>
        <table>
          <thead>
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Phone</th>
            </tr>
          </thead>

          <tbody>
            {fullContact.map(contact => (
              <tr key={contact.id}>
                <td>{contact.firstName}</td>
                <td>{contact.lastName}</td>
                <td>{contact.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableContainer>
    </Container>
  )
}

export default Home
