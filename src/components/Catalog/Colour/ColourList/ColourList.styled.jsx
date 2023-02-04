import styled from "@emotion/styled";
import { desktop, tablet } from "utils/breakpoints";

export const List = styled.ul`
list-style:none;
display:flex;
flex-wrap:wrap;
align-items:center;
margin:0;
padding:0;

@media screen and (min-width:${tablet}){
    margin:-5px;
    margin-bottom:50px;
}
@media screen and (min-width:${desktop}){
    margin:-15px;
    margin-bottom:80px;
    
}`

export const Item = styled.li`
margin:0;
padding:0;

@media screen and (min-width:${tablet}){
    display:flex;
    flex-basis: calc((100% - 3 * 10px) / 3);
    margin:5px;
}
@media screen and (min-width:${desktop}){
    flex-basis: calc((100% - 5 * 30px) / 5);
    margin:15px;
}`

export const Img = styled.img`
margin:0;
padding:0;`