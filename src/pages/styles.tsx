import styled from 'styled-components'

export const Container = styled.div`
`
export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 91px;
        height: 63px;
        color: #B66E1E;
    }

`

export const Title = styled.div`
    font-size: 48px;
    font-weight: bold;
    color: #B66E1E;
    align-self: center;
`
export const HeaderDescription = styled.div`
    color: #FFFFFF;
    font-size: 24px;
    font-weight: normal;
    text-align: center;
    margin-top: 12px;
`

export const ContainerContent = styled.div`
    margin-top: 60px;
`

export const ContentForm = styled.div`
    display: flex;
    
    form {
    
        p {
        font-size: 24px;
        font-weight: bold;
        color: #F58F4B;

        margin-bottom: 8px;
        }

        input {
            width: 420px;
            height: 45px;

            background: #FFFFFF;
            border: 1px solid #000000;
            box-shadow: -2px 4px 4px 1px rgba(0, 0, 0, 0.8);
            border-radius: 8px;
            
            margin-bottom: 36px;
            padding: 12px 0 12px 21px;

            font-size: 18px;
            font-weight: normal;
        }

        button {
            display: block;
            width: 210px;
            height: 43;
            padding: 18px;
            background: #B66E1E;
            
            color: #000000;
            font-size: 18px;
            font-weight: 600;
            
            margin-left: 104px;
            cursor: pointer;
            border: 1px solid #000000;

            box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
            
            transition: opacity 0.3s;

            &:hover {
                filter: opacity(0.9);
            }
        }
    }
`

export const FlipeContainer = styled.div`
    width: 776px;
    height: 392px;
    margin-left: 80px;
`

export const FlipeContainerSide = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 165px;
    height: 392px;
    background: #3E44DB;
    border-radius: 20px;

    svg {
        color: white;
    }

`

export const Flipper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    transition: transform 0.9s;
    transform-style: preserve-3d;
`

export const CardFront = styled.div`
    background: #E1E1E1;
    border-radius: 20px;
`

export const CardBack = styled.div`
    background: #E1E1E1;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    svg {
        color: #000;
    }

    p {
        font-size: 18px;
        font-weight: bold;
    }
`

export const TextContainer = styled.div`
    display: block;
`

export const CardText = styled.p`
    color: #47263B;
    font-size: 24px;
    font-weight: bold;

    margin: 39px 0 12px 16px;
`

export const CardTextInput = styled.input`
    background: #E1E1E1;
    padding: 12px;
    margin-left: 16px;

    font-size: 18px;
    font-weight: normal;
    color: #000000;
    border: none;
`

export const TableContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 136px;

    table > thead > tr > th {
        color: #FFFFFF;
        padding: 12px 160px;
        font-size: 22px;
        font-weight: bold;

        background: #47263B;
    }

    td {
        color: #FFFFFF;
        text-align: center;
        font-size: 24px;
        font-weight: bold;
        padding: 12px;
    }

`