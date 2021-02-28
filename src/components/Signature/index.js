import React, { useEffect, useRef, useState } from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import SignatureImage from '../../assets/img/Assinatura.png';
import FormNew from '../FormNew';

const Signature = () => {
  const canvas = useRef(null);

  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');

  useEffect(() => {
    const catImage = new Image();
    catImage.src = SignatureImage;
    catImage.onload = () => setImage(catImage);
  }, []);

  useEffect(() => {
    if (image && canvas) {
      const ctx = canvas.current.getContext('2d');

      ctx.drawImage(image, 10, 10);

      ctx.font = 'bold 17px Arial';
      ctx.fillStyle = '#202124';
      ctx.textAlign = 'left';
      ctx.fillText(name, 280 / 2, 38);

      ctx.font = 'normal 15px Arial';
      ctx.fillStyle = '#00a8ff';
      ctx.fillText(email, 280 / 2, 57);

      ctx.font = 'normal 15px Arial';
      ctx.fillStyle = '#202124';
      ctx.fillText(telephone, 280 / 2, 77);
    }
  }, [image, canvas, name, email, telephone]);

  function downloadPng() {
    if (!name || !email || !telephone) {
      return;
    }

    const canvas = document.getElementById('canvas');

    let link = document.getElementById('link');
    link.setAttribute('download', `${name}.png`);
    link.setAttribute(
      'href',
      canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')
    );
    link.click();
  }

  return (
    <div className="hero">
      <Container>
        <Row>
          <Col lg="6" className="mb-5">
            <div className="nav-header mt-4 mb-5">Gerador de Assinaturas</div>

            <FormNew
              setName={setName}
              setEmail={setEmail}
              setTelephone={setTelephone}
            />

            <Button color="primary" onClick={downloadPng}>
              <i className="fal fa-copy"></i> Baixe sua Assinatura
            </Button>
            <a href="/" id="link">
              {' '}
            </a>
          </Col>

          <Col lg="6" className="ml-auto">
            <div className="nav-header mt-4 mb-5">Pré-visualizar</div>

            <div className="header-email">Nova Mensagem</div>
            <div className="card-email">
              <div className="destinatario">
                <span>Para:</span> Seu destinatário
              </div>
              <div className="assunto">
                <span>Assunto:</span> Veja minha nova assinatura de e-mail
              </div>
              <div className="mensagem">
                Olá {name}
                <br />
                <br />
                Esse é um exemplo de e-mail criado no Gerador de Assinaturas de
                E-mail da L8 Group. Aqui dá para você ter uma ideia de como vai
                ficar a sua assinatura final.
                <br />
                <br />
                Abraços!
              </div>
              <div className="assinatura" id="assinatura">
                <canvas id="canvas" ref={canvas} width={484} height={207} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Signature;
