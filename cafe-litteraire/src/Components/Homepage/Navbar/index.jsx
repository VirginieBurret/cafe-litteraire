import { React, useState} from 'react';
import './navbar.scss';
import { Form, Input, InputNumber, Button, DatePicker, Space } from 'antd';
const Navbar = () => {
   
    const [showRegisterForm, setRegisterForm] = useState(false);

    const displayRegisterForm = () => {
        setRegisterForm(!showRegisterForm)
    }

    const layout = {
        labelCol: {
          span: 5,
        },
        wrapperCol: {
          span: 16,
        },
      };

const [hideRegisterForm, sethideRegisterForm] = useState(true);

const hideForm = () => {
    setRegisterForm(!showRegisterForm)
}

function onChange(date, dateString) {
    console.log(date, dateString);
  }
    return (

<div className="navbar">
    <p className="navbar__title">Le cercle des litteraires</p>

    <div className="navbar__buttons">
        <button onClick={displayRegisterForm}>Inscription</button>
        <button>Connexion</button>
        </div>
        
        { showRegisterForm ? <>
   
<Form className="register-form" {...layout} name="nest-messages"  >
<h2 className="register-title">Formulaire d'inscription</h2>
      <Form.Item
        name="username"
        label="Pseudo"
        rules={[{ required: true, message: 'Merci de renseigner votre pseudo!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            type: 'email', required: true, message: 'Merci de renseigner une adresse email valide!'
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="age"
        label="Age"
        rules={[
          {
            type: 'number',
            min: 0,
            max: 99,
            required: true, message: 'Merci de renseigner un âge valide!'
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Merci d'entrer votre mot de passe" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button style={{marginRight:'1rem'}}type="primary" htmlType="submit">
          Envoyer
        </Button>
        
        <Button type="default" onClick={hideForm} >
          Retour
        </Button>
      </Form.Item>
    </Form> </>
    : ""}
        
   
    
</div>

    )
}

export default Navbar;