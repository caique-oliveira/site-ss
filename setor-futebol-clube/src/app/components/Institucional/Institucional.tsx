'use client'
import React, { useState, useEffect, useRef } from 'react';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  PlayButton,
  PlayIcon,
  TitleInstitucional,
  BtnInstitucional,
  BgDark,
  ContainerXXL,
} from './Institucional.styled';

const Institucional: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [videoSrc, setVideoSrc] = useState<string>('');
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleShow = (videoId: string) => {
    setVideoSrc(`https://www.youtube.com/embed/${videoId}`);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setVideoSrc('');
  };

  const handleScroll = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        setIsVisible(true);
        window.removeEventListener('scroll', handleScroll); // Remove o listener após a primeira rolagem
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ContainerXXL ref={containerRef} className={`container-xxl px-0 ${isVisible ? 'slide-in-left' : ''}`}>
      <div className="row g-0">
        <div className="col-md-6">
          <Container>
            <PlayButton
              type="button"
              onClick={() => handleShow('ur5s7kQTqTo')}
            >
              <PlayIcon />
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 512 512">
                <path fill="#e8cf29" d="M504.1,256C504.1,119,393,7.9,256,7.9C119,7.9,7.9,119,7.9,256C7.9,393,119,504.1,256,504.1C393,504.1,504.1,393,504.1,256z"></path>
                <path fill="#FFF" d="M378.7,243.2L203.8,135.7c-4.8-2.9-11.1-3.1-16-0.3c-5,2.8-8.1,8.1-8.1,13.8v214c0,5.7,3.1,11,8,13.8c2.4,1.3,5,2,7.7,2c2.9,0,5.7-0.8,8.2-2.3l174.9-106.6c4.7-2.8,7.6-8,7.6-13.4C386.3,251.2,383.4,246,378.7,243.2z"></path>
              </svg>
            </PlayButton>
          </Container>
        </div>
        <BgDark className="col-md-6 d-flex align-items-center">
          <div className="p-5">
            <TitleInstitucional className="section-title ff-secondary text-start text-primary fw-normal">Institucional</TitleInstitucional>
            <h1 className="text-white mb-4">Entre em contato conosco</h1>
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="name" placeholder="Your Name" />
                    <label htmlFor="name">Seu Nome</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input type="email" className="form-control" id="email" placeholder="Your Email" />
                    <label htmlFor="email">Seu Email</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Special Request"
                      id="message"
                      style={{ height: '100px' }}
                    ></textarea>
                    <label htmlFor="message">Escreva aqui sua dúvida</label>
                  </div>
                </div>
                <div className="col-12">
                  <BtnInstitucional className="btn btn-primary w-100 py-3" type="submit">
                    Enviar
                  </BtnInstitucional>
                </div>
              </div>
            </form>
          </div>
        </BgDark>
      </div>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Youtube Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="ratio ratio-16x9">
            <iframe
              className="embed-responsive-item"
              src={videoSrc}
              allowFullScreen
              title="Video"
            ></iframe>
          </div>
        </Modal.Body>
      </Modal>
    </ContainerXXL>
  );
};

export default Institucional;