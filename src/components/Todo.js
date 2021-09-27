import React from 'react';
import Button from '@atlaskit/button';
import styled, { css } from 'styled-components';
import CheckIcon from '@atlaskit/icon/glyph/check';

const Buttonstyled = styled(Button)`
    margin-top: 5px;
    text-align: left;
    &, &:hover{${p => p.isComplete && css`
    text-decoration: line-through;
`}}
    

    &:hover{
        .check-icon{
        display: inline-block;
        }
    }

    .check-icon{
        display:none;
        &:hover{
            background-color: #e2e2e2;
            border-radius: 3px;
        }
    }
`;

function Todo({ atodo, onCheckBtnClick }) {
    return (
        <>
            <Buttonstyled
                isComplete={atodo.isComplete}
                shouldFitContainer
                iconAfter={!atodo.isComplete&&
                    <span className="check-icon" onClick={() => onCheckBtnClick(atodo.id)}>
                        <CheckIcon primaryColor='#4fff4f' />
                    </span>}>{atodo.name}</Buttonstyled>
        </>
    );
}

export default Todo;