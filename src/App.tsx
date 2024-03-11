import { useState } from 'react'
import './App.css'
import PrimaryInput from './componentes/Input/PrimaryInput'
import { Button, Spacer } from '@chakra-ui/react'
import { userIdentityMutation } from './hooks/userIdentityMutation'

function App() {
  const { mutate } = userIdentityMutation();
  const [email, setEmail] = useState("")
  const [firstName, setFirstname] = useState("")
  const [secondeName, setSecondeName] = useState("")

  const submit = () => {
    mutate({
      email,
      firstName,
      lastName: secondeName
    })
  }

  return (
    <div className='container'>
      <form>
        <div className='name-form-container'>
          <PrimaryInput 
            value={firstName} 
            onChance={event => setFirstname(event.target.value)} 
            name="firtsName"
            label='Primeiro'
            placeholder='Fernando'
          />
            <PrimaryInput 
            value={secondeName} 
            onChance={event => setSecondeName(event.target.value)} 
            name="secondeName"
            label='Sobrenome'
            placeholder='Kipper'
          />
        </div>
        <Spacer height="4"/>
        <PrimaryInput 
          value={email} 
          onChance={event => setEmail(event.target.value)} 
          name="email"
          label='Digite seu email'
          placeholder='jack@gmail.com'
        />
        <Spacer height="4"/>
        <Button colorScheme='green' width="100%" marginTop="4" onClick={submit}>Enviar</Button>
      </form>
      <Spacer width="6"  maxWidth="4"/>
      <div className="product-details">
        <h2>Assinatura mensal</h2>
        <Spacer height="4"/>
        <p>Você irá pagar</p>
        <span>R$ 250,00</span>
        <Spacer height="4"/>
        <p>regras: É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação.</p>
      </div>
    </div>
  )
}

export default App
