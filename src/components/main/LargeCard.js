import React from 'react';

function LargeCard({ img}) {
    return (
        <div className="large_card_container">
            <div className="large_card_img">
                <img src={img} alt="large_img" />
            </div>
            <div className="large_card_text">
                <h2>안심 서비스 이념</h2>
                <h3>우리 프로젝트의 초기 단계에서 우리는 가능한 많은 가정 밖 청소년들의 이야기와 의견을 듣고 싶습니다.</h3>
                <h3>가정 밖  청소년들을 돕는 가장 좋은 방법은 그들을 위해 노력하는 조직 간의 의사 소통을 개선하는 것입니다.</h3>
                <h3>그래서 우리의 프로젝트는 쉼터 커뮤니티와 가정 밖 청소년들을 직접 돕기 위해 일하는 조직의 요구 사항을 반영합니다.</h3>
            </div>
        </div>
    );
}

export default LargeCard;
