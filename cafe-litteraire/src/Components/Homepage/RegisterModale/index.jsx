import { React, useState} from 'react';
import './register.scss';
import { Form, Input, InputNumber, Button } from 'antd';

const Register = () => {
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
    sethideRegisterForm(!hideRegisterForm)
}
    return (

<div className="register">
{ hideRegisterForm ? <>
    <h2 className="register__title">Formulaire d'inscription</h2>
<Form className="register__form" {...layout} name="nest-messages"  >
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
            required: true, message: 'Merci de renseigner votre âge!'
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

export default Register;