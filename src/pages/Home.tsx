import React, { FormEvent, useEffect, useState } from 'react'

import { FiBook, FiUser } from 'react-icons/fi'
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
    Error
} from './styles'

interface Contact {
    id: string;
    firstName: string;
    lastName: string;
    phone: string;
}

const Home: React.FC = () => {
    const [firstNameinputError, setFirstNameInputError] = useState('')
    const [lastNameinputError, setLastNameInputError] = useState('')
    const [phoneInputError, setPhoneInputError] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [fullContact,  setFullContact] = useState<Contact[]>(() => {
        const storagedContacts = localStorage.getItem(
          '@Phonebook:contacts',
        );
        if (storagedContacts) {
            return JSON.parse(storagedContacts);
          }
          return [];
    })


    function handleFormSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault()

        const id =  Math.random().toString(36).substr(2, 9)

        const contact: Contact = {id, firstName, lastName, phone}

        if (!firstName) return setFirstNameInputError('Type your first name!')
        setFirstNameInputError('')
        
        if (!lastName) return setLastNameInputError('Type your last name!') 
        setLastNameInputError('')

        if (!phone) return setPhoneInputError('Type your phone number') 
        setPhoneInputError('')

        setFullContact([...fullContact, contact])

        setFirstName('')
        setLastName('')
        setPhone('')
    }

    useEffect(() => {
        localStorage.setItem(
          '@Phonebook:contacts',
          JSON.stringify(fullContact),
        );
      }, [fullContact]);

    return (
        <Container >
            <header>
                <TitleContainer>
                    <FiBook />
                    <Title>Phone Book</Title>
                </TitleContainer>
                <HeaderDescription>The best place to manage your contacts</HeaderDescription>
            </header>

            <ContainerContent>
                <ContentForm errorFirstName={!!firstNameinputError} errorLastName={!!lastNameinputError} errorPhone={!!phoneInputError}>
                    <form onSubmit={handleFormSubmit}>
                        <label htmlFor="FirstName">
                            <p>First name</p>
                            {firstNameinputError && <Error>{firstNameinputError}</Error>}
                            <input 
                                type="text" 
                                onChange={(e: React.ChangeEvent<HTMLInputElement>,): void => setFirstName(e.target.value)}
                                value={firstName}
                                id="FirstName"
                            />
                        </label>

                        <label htmlFor="LastName">
                            <p>Last name</p>
                            {lastNameinputError && <Error>{lastNameinputError}</Error>}
                            <input 
                                type="text" 
                                onChange={(e: React.ChangeEvent<HTMLInputElement>,): void => setLastName(e.target.value)} 
                                value={lastName}
                                id="LastName"
                            />
                        </label>

                        <label htmlFor="Phone">
                            <p>Phone</p>
                            {phoneInputError && <Error>{phoneInputError}</Error>}
                            <input 
                                type="text" 
                                onChange={(e: React.ChangeEvent<HTMLInputElement>,): void => setPhone(e.target.value)}
                                value={phone}
                                id="Phone"
                            />
                        </label>

                        <button type="submit">Add Contact</button>
                    </form>

                    <FlipeContainer className="flip-container">
                        <Flipper className="flipper">
                            <CardFront className="front">
                                <FlipeContainerSide >
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
                <table >
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
