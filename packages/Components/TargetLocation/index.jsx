import React, { useState } from 'react'
import PropTypes from "prop-types";
import VHImg from '../Img/index'
import VHText from '../Text/index'
import { Row } from '../../Grid'
import * as S from './styles'
import USA from '../../../assets/flags/flag_usa.svg'
import Canada from '../../../assets/flags/flag_canada.svg'
import Germany from '../../../assets/flags/flag_germany.svg'
import Ireland from '../../../assets/flags/flag_ireland.svg'
import Netherlands from '../../../assets/flags/flag_netherlands.svg'
import UK from '../../../assets/flags/flag_uk.svg'

const VHTargetLocation = props => {

    const items = Object.keys(props.items).length > 0 ? props.items : [{ status: false }, { status: false }, { status: false }, { status: false }, { status: false }, { status: false }]
    console.log('props.items.length', items)
    console.log(items[0])
    const [canada, setCanada] = useState(items[0].status);
    const [germany, setGermany] = useState(items[1].status);
    const [ireland, setIreland] = useState(items[2].status);
    const [netherlands, setNetherlands] = useState(items[3].status);
    const [uk, setUk] = useState(items[4].status);
    const [usa, setUsa] = useState(items[5].status);

    React.useEffect(() => {
        setCanada(items[0].status),
        setGermany(items[1].status),
        setIreland(items[2].status),
        setNetherlands(items[3].status),
        setUk(items[4].status),
        setUsa(items[5].status)
    },
        [items[0].status,
        items[1].status,
        items[2].status,
        items[3].status,
        items[4].status,
        items[5].status])

    return (
        <Row className={`vh-target-location ${props.className ? props.className : ''}`} row justifySpaceBetween>
            <S.Wrapper disabled={!canada} onClick={() => {
                setCanada(!canada)
                props.onEvent({
                    type: "OnClick",
                    origin: "VHTargetLocation",
                    props: {
                        data: { id: items[0].id, status: canada ? 0 : 1 },
                        position: 0
                    }
                })
            }}>
                <VHImg source={Canada} title="city" lg />
                <VHText
                    variant={"platform2"}
                    color="black-100"
                    text={'Canada'}
                />
            </S.Wrapper>

            <S.Wrapper disabled={!germany} onClick={() => {
                setGermany(!germany)
                props.onEvent({
                    type: "OnClick",
                    origin: "VHTargetLocation",
                    props: {
                        data: { id: items[1].id, status: germany ? 0 : 1 },
                        position: 1
                    }
                })
            }}>
                <VHImg source={Germany} title="city" lg />
                <VHText
                    variant={"platform2"}
                    color="black-100"
                    text={'Germany'}
                />
            </S.Wrapper>

            <S.Wrapper disabled={!ireland} onClick={() => {
                setIreland(!ireland)
                props.onEvent({
                    type: "OnClick",
                    origin: "VHTargetLocation",
                    props: {
                        data: { id: items[2].id, status: ireland ? 0 : 1 },
                        position: 2
                    }
                })
            }}>
                <VHImg source={Ireland} title="city" lg />
                <VHText
                    variant={"platform2"}
                    color="black-100"
                    text={'Ireland'}
                />
            </S.Wrapper>

            <S.Wrapper disabled={!netherlands} onClick={() => {
                setNetherlands(!netherlands)
                props.onEvent({
                    type: "OnClick",
                    origin: "VHTargetLocation",
                    props: {
                        data: { id: items[3].id, status: netherlands ? 0 : 1 },
                        position: 3
                    }
                })
            }}>
                <VHImg source={Netherlands} title="city" lg />
                <VHText
                    variant={"platform2"}
                    color="black-100"
                    text={'Netherlands'}
                />
            </S.Wrapper>

            <S.Wrapper disabled={!uk} onClick={() => {
                setUk(!uk)
                props.onEvent({
                    type: "OnClick",
                    origin: "VHTargetLocation",
                    props: {
                        data: { id: items[4].id, status: uk ? 0 : 1 },
                        position: 4
                    }
                })
            }}>
                <VHImg source={UK} title="city" lg />
                <VHText
                    variant={"platform2"}
                    color="black-100"
                    text={'U.K'}
                />
            </S.Wrapper>

            <S.Wrapper disabled={!usa} onClick={() => {
                setUsa(!usa)
                props.onEvent({
                    type: "OnClick",
                    origin: "VHTargetLocation",
                    props: {
                        data: { id: items[5].id, status: usa ? 0 : 1 },
                        position: 5
                    }
                })
            }}>
                <VHImg source={USA} title="city" lg />
                <VHText
                    variant={"platform2"}
                    color="black-100"
                    text={'U.S.A'}
                />
            </S.Wrapper>
        </Row>
    )

}
VHTargetLocation.defaultProps = {
    description: "",
    onEvent: null,
    className: "",
}

VHTargetLocation.propTypes = {
    description: PropTypes.string,
    onEvent: PropTypes.func,
    className: PropTypes.string,
}

export default VHTargetLocation