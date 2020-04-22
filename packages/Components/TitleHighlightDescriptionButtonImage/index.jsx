import React from 'react';
import PropTypes from 'prop-types';
import { Row, Container } from '../../Grid/index';
import VHText from "../Text/index";
import VHButton from "../Button-New/index";
import * as S from './styles';

const VHTitleHighlightDescriptionButtonImage = props => {
    return (
        <Container>
            <Row row responsive>
                <Row width={"40%"} marginTop={150}>
                    <Row marginBottom5>
                        <VHText 
                            variant={"h3"}
                            color="gray-90"
                            text={props.title}
                        />
                    </Row>
                    <Row marginBottom5>
                        <VHText 
                            variant={"h1"}
                            color="gray-90"
                            text={props.highlight}
                        />     
                    </Row>
                    <Row marginBottom5>
                        <VHText 
                            variant={"bodyweb"}
                            color="gray-90"
                            text={props.description}
                        />     
                    </Row>
                    <Row width={"50%"} marginTop={30} marginBottom={30}>
                        <VHButton 
                            secondary
                            onEvent={props.onEvent}
                            data={props.data} 
                            label={props.label}
                            lg
                        />
                    </Row>
                </Row>
                <Row width={"60%"} height={600} marginTop={50} mobileDisplayNone>
                    <S.ImgWrapper image={props.image}/>
                </Row>
            </Row>
        </Container>
    )
}

VHTitleHighlightDescriptionButtonImage.defaultProps = {
    className: '',
}

VHTitleHighlightDescriptionButtonImage.prototypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    highlight: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    label: PropTypes.string,
    image: PropTypes.string.isRequired
}

export default VHTitleHighlightDescriptionButtonImage;