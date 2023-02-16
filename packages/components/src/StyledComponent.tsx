import { PropsWithChildren, ReactElement } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    backgroun: #00ff00;
`

export const StyledComponent = ({children}: PropsWithChildren): ReactElement => <StyledDiv>{children}</StyledDiv>