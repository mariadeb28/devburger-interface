import styled from "styled-components";

export const Container = styled.div`
.carousel-item{
    padding-right: 40px;
}

overflow-x: hidden;

.react-multi-carousel-list{
    overflow: visible;
}

.react-multiple-carousel__arrow--left {
    left: 20px;
    top: 10px;
}

.react-multiple-carousel__arrow--right {
    top: 10px;
    
}

padding-left: 40px;
padding-bottom: 40px;

`;

export const Title = styled.h2`
font-size: 32px;
color: #61A120;
padding-bottom: 12px;
position: relative;
text-align: center;
font-weight: 800;
margin: 70px 0;


&::after{
   content: '';
   position: absolute;
   bottom: 0;
   width: 56px;
   height: 4px;
   background-color: #61A120;
   left: 50%;
   transform: translateX(-50%);
}

`;

