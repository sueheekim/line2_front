import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import ArticleIcon from '@mui/icons-material/Article';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="justify-content-space-around">
                    <div className="justify-content-start">
                        <div>
                            <img className="footer_logo" src="./img/footer_logo.png" alt="footer logo" />
                        </div>
                        <div className="footer_info_column">
                            <div className="footer_info_title">A N S I M</div>
                            <div className="footer_info_text">Member: 김형동, 전창배, 김수희, 왕서윤</div>
                            <div className="footer_info_text2">
                                우리의 목표는 가정 밖 청소년을 안전한 쉼터로 인도하는 것 이상 입니다.
                            </div>
                        </div>
                    </div>
                    <div className="justify-content-start footer_icon_box">
                        <a href="https://github.com/Protocol-HD/line2_front">
                            <div className="center">
                                <GitHubIcon style={{ fontSize: '80px' }} />
                                <div>GibHub</div>
                            </div>
                        </a>
                        <Link className="cursor-pointer" to={'/about'}>
                            <div className="center">
                                <EmojiPeopleIcon style={{ fontSize: '80px' }} />
                                <div>About Us</div>
                            </div>
                        </Link>
                        <div className="center">
                            <ArticleIcon style={{ fontSize: '80px' }} />
                            <div>Doc</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
