"use client";
import * as S from './Footer.styled';
import { SocialIcon } from 'react-social-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer () {
    return (
        <>
            <S.Footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mt-md-0 mt-3">
                            <S.TitleFooter className="text-uppercase">Setor Futebol Clube</S.TitleFooter>
                            <S.TextFooter>O Setor Social desempenha um papel fundamental na construção de uma sociedade mais justa e igualitária. Nesse contexto,
                                uma associação filantrópica se destaca como um agente de mudança, dedicando-se incansavelmente a auxiliar crianças, jobes e adultos
                                por meio de diversas medidas sociais.
                            </S.TextFooter>
                        </div>

                        <hr className="clearfix w-100 d-md-none pb-0"/>

                        <div className="col-md-5 mb-md-0 mb-3">
                            <S.TitleFooter className="text-uppercase">Acesso Rápido ao site</S.TitleFooter>
                            <ul className="list-unstyled">
                            <li><a href="#!">Home</a></li>
                                <li><a href="#!">Contato</a></li>
                                <li><a href="#!">Institucional</a></li>
                                <li><a href="#!">Últimas notícias</a></li>
                                <li><a href="#!">Nossos Parceiros</a></li>
                                <li><a href="#!">Como se tornar um Parceiro</a></li>
                            </ul>
                        </div>

                        <div className="col-md-3 mb-md-0 mb-3">
                        <S.TitleFooter className="text-uppercase">Contato</S.TitleFooter>
                            <ul className="list-unstyled">
                            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                            <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                                <SocialIcon
                                bgColor="transparent"
                                network="facebook"
                                url="https://facebook.com"
                                style={{
                                    height: '40px',
                                    width: '40px',
                                    margin: '10px',
                                }}
                                />
                                <SocialIcon
                                bgColor="transparent"
                                network="instagram"
                                url="https://instagram.com"
                                style={{
                                    height: '40px',
                                    width: '40px',
                                    margin: '10px',
                                }}
                                />
                                <SocialIcon
                                bgColor="transparent"
                                network="youtube"
                                url="https://youtube.com"
                                style={{
                                    height: '40px',
                                    width: '40px',
                                    margin: '10px',
                                }}
                                />
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright text-center py-3">
                    © 2024 Copyright: 
                    <a href="/"> Setor Social Clube</a>
                </div>

            </S.Footer>
        </>
    );
}