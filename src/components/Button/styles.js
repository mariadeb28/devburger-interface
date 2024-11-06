import styled from "styled-components";

export const ContainerButton = styled.button`
width: 100%;
height: 50px;
border: none;
border-radius: 5px;
background-color: #9758a6;
font-family: "Road Rage", sans-serif;
font-size: 30px;
color: #fff;

&:hover{
    background-color: #6f357c;
    border: 1px dashed #fff;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='5' ry='5' stroke='%2323222200' stroke-width='7' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 5px;
}

`;