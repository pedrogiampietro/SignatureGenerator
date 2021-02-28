import React from 'react';
import { Form, FormGroup, Col, Label, Input } from 'reactstrap';

const FormNew = ({ setName, setEmail, setTelephone }) => {
  return (
    <Form className="mb-5">
      <FormGroup row className="mb-4">
        <Label for="name" sm={3}>
          Nome
        </Label>
        <Col sm={9}>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Nome"
            onChange={(e) => setName(e.target.value)}
          />
        </Col>
      </FormGroup>

      <FormGroup row className="mb-4">
        <Label for="exampleSelect" sm={3}>
          E-mail
        </Label>
        <Col sm={9}>
          <Input
            type="text"
            name="email"
            id="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Col>
      </FormGroup>

      <FormGroup row className="mb-4">
        <Label for="cargo" sm={3}>
          Telefone
        </Label>
        <Col sm={9}>
          <Input
            type="phone"
            name="cargo"
            id="cargo"
            placeholder="Telefone"
            onChange={(e) => setTelephone(e.target.value)}
          />
        </Col>
      </FormGroup>
    </Form>
  );
};

export default FormNew;
