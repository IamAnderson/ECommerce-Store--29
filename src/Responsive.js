import { css } from "styled-components"

export const Mobile = (props) => {
    return css`
        @media screen and (max-width: 450px){
            ${props}
        }
    `
}