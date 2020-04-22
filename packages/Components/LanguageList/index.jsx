import React, { useState } from 'react';
import * as S from './styles';
import VHText from '../Text'
import VHSelect from '../Input/Select'
import { Container, Row } from '../../Grid';
import VHIcon from '../Icon';


const VHLanguageList = props => {
    const [languages, setLanguages] = useState(props.languages)
    const secondList = props.secondList ? props.secondList : []
    const [render, reRender] = useState(1)

    React.useEffect(() => {
        setLanguages(props.languages);
    }, [props.languages])


    return (
        <React.Fragment>
            {languages.length === 0 ?
                < S.Wrapper >
                    <Row alignItemsCenter row marginRight={2} marginLeft={2}>
                        <Row >
                            <VHSelect
                                removeIndicator
                                preLoading={true}
                                marginBottom={'0px'}
                                removeBorder
                                caption=""
                                data={'language'}
                                className={'language'}
                                currentItem={{}}
                                items={[]}
                                description=""
                                descriptionColor="primary"
                                onEvent={props.onEvent}
                                order={0}
                                placeholder={'Select Language'}
                            />
                        </Row>
                    </Row>
                    <Row width={'20%'}>
                        <VHSelect
                            preLoading={true}
                            marginBottom={'0px'}
                            removeBorder
                            caption=""
                            data={'proficiency'}
                            className={'proficiency'}
                            currentItem={{}}
                            items={[]}
                            description=""
                            descriptionColor="primary"
                            leftText=""
                            onEvent={props.onEvent}
                            order={0}
                            placeholder={'Proficiency'}
                        />
                    </Row>
                </ S.Wrapper>
                :
                <React.Fragment>
                    {languages.map((language, index) =>
                        < S.Wrapper >
                            <Row alignItemsCenter row marginRight={2} marginLeft={2}>
                                <Row >
                                    <VHSelect
                                        removeIndicator
                                        preLoading={props.controls.language.preLoading}
                                        marginBottom={'0px'}
                                        removeBorder
                                        caption=""
                                        data={language.code === 'en' || language.code === 'fr' ? 'defaultLanguage' : {option: 'language', id: language.id}}
                                        className={'language'}
                                        currentItem={language.code !== undefined ? { value: language.code, label: language.name } : {}}
                                        items={language.code === 'en' ? [{ value: 'en', label: 'English' }] : language.code === 'fr' ? [{ value: 'fr', label: 'French' }] : props.list}
                                        description=""
                                        descriptionColor="primary"
                                        onEvent={props.onEvent}
                                        order={index}
                                        placeholder={'Select Language'}
                                    />
                                </Row>
                            </Row>
                            <Row width={'20%'}>
                                <VHSelect
                                    preLoading={props.controls.language.preLoading}
                                    marginBottom={'0px'}
                                    removeBorder
                                    caption=""
                                    data={{option: 'proficiency', id: language.id}}
                                    className={'proficiency'}
                                    currentItem={language.level != undefined ? secondList[language.level] : {}}
                                    items={secondList}
                                    description=""
                                    descriptionColor="primary"
                                    leftText=""
                                    onEvent={props.onEvent}
                                    order={index}
                                    placeholder={'Proficiency'}
                                />
                            </Row>

                            <Row width={'10%'}>
                                {language.id && language.code && language.code !== 'en' && language.code !== 'fr' &&
                                    <S.Close
                                        onClick={() => {
                                            props.onEvent({
                                                event: 'deleteLanguage',
                                                code: language.code
                                            })
                                        }}>
                                        <VHIcon icon={'delete'} alt="Close icon" />
                                    </S.Close>
                                }
                            </Row>

                        </ S.Wrapper>
                    )}
                    <S.Wrapper>
                        <Row row paddingTop={2} paddingBottom={2} marginRight={2} marginLeft={2} >
                            <VHText color="gradient-primary" onEvent={(e) => {
                                let newLanguages = languages
                                newLanguages.push({ level: undefined, name: undefined, code: undefined })
                                setLanguages(newLanguages)
                                reRender(render + 1)
                            }} data={'addLanguage'} variant={'platform'} text="+ Add language" cursor />
                        </Row>
                    </S.Wrapper>
                </React.Fragment>
            }
        </React.Fragment>
    )
}

export default VHLanguageList;