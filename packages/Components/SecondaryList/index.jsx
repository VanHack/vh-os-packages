import React from 'react';
import * as S from './styles';
import VHText from '../Text'
import VHSelect from '../Input/Select'
import { Container, Row } from '../../Grid';

const VHSecondaryList = props => {
    let items = props.items ? props.items : [];
    const list = props.list ? props.list : [];
    const secondList = props.secondList ? props.secondList : []
    return (
        <React.Fragment>
            < S.Wrapper >
                <Row  alignItemsCenter row >
                    <Row marginRight={2}>
                        <VHSelect
                            removeIndicator
                            preLoading={props.controls.secondarySkill.preLoading}
                            marginBottom={'0px'}
                            removeBorder
                            
                            caption=""
                            data={'secondarySkillExperience'}
                            className={'secondarySkillExperience'}
                            currentItem={items[0] && items[0].id != 0  ? {value: items[0].id, label:items[0].name} : {}}
                            items={props.list}
                            description=""
                            descriptionColor="primary"
                            onEvent={props.onEvent}
                            order={0}
                            placeholder='Add secondary skill'
                        />
                    </Row>
                </Row>
                <Row width={'20%'}>
                    <VHSelect
                        removeIndicator
                        preLoading={props.controls.secondarySkill.preLoading}
                        isDisabled={!items[0] || items[0].id === 0  ? true : false}
                        marginBottom={'0px'}
                        removeBorder
                        caption=""
                        data={'secondarySkillYears'}
                        className={'secondarySkillYears'}
                        currentItem={items[0] ? secondList.find(element => element.value === items[0].yearsOfExperience) : {}}
                        items={secondList}
                        description=""
                        descriptionColor="primary"
                        leftText=""
                        onEvent={props.onEvent}
                        order={0}
                        placeholder="Experience"
                    />
                </Row>
            </ S.Wrapper>
            < S.Wrapper >
                <Row  alignItemsCenter row marginRight={2}>
                    <Row>
                        <VHSelect
                            removeIndicator
                            preLoading={props.controls.secondarySkill.preLoading}
                            marginBottom={'0px'}
                            removeBorder
                            caption=""
                            data={'secondarySkillExperience'}
                            className={'secondarySkillExperience'}
                            currentItem={items[1] && items[1].id != 0  ? {value: items[1].id, label:items[1].name} : {}}
                            items={props.list}
                            description=""
                            descriptionColor="primary"
                            onEvent={props.onEvent}
                            order={1}
                            placeholder='Add secondary skill'
                        />
                    </Row>
                </Row>
                <Row width={'20%'}>
                    <VHSelect
                        removeIndicator
                        preLoading={props.controls.secondarySkill.preLoading}
                        isDisabled={!items[1] || items[1].id === 0 ? true : false}
                        marginBottom={'0px'}
                        removeBorder
                        caption=""
                        data={'secondarySkillYears'}
                        className={'secondarySkillYears'}
                        currentItem={items[1] ? secondList.find(element => element.value === items[1].yearsOfExperience) : {}}
                        items={secondList}
                        description=""
                        descriptionColor="primary"
                        leftText=""
                        onEvent={props.onEvent}
                        order={1}
                        placeholder="Experience"
                    />
                </Row>
            </S.Wrapper>
            <S.Wrapper>
                <Row  alignItemsCenter row marginRight={2}>
                    <Row>
                        <VHSelect
                            removeIndicator
                            preLoading={props.controls.secondarySkill.preLoading}
                            marginBottom={'0px'}
                            removeBorder
                            caption=""
                            data={'secondarySkillExperience'}
                            className={'secondarySkillExperience'}
                            currentItem={items[2] && items[2].id != 0  ? {value: items[2].id, label:items[2].name} : {}}
                            items={props.list}
                            description=""
                            descriptionColor="primary"
                            onEvent={props.onEvent}
                            order={2}
                            placeholder='Add secondary skill'
                        />
                    </Row>
                </Row>
                <Row width={'20%'}>
                    <VHSelect
                        removeIndicator
                        preLoading={props.controls.secondarySkill.preLoading}
                        isDisabled={!items[2] || items[2].id === 0 ? true : false}
                        marginBottom={'0px'}
                        removeBorder
                        caption=""
                        data={'secondarySkillYears'}
                        className={'secondarySkillYears'}
                        currentItem={items[2] ? secondList.find(element => element.value === items[2].yearsOfExperience) : {}}
                        items={secondList}
                        description=""
                        descriptionColor="primary"
                        leftText=""
                        onEvent={props.onEvent}
                        order={2}
                        placeholder="Experience"
                    />
                </Row>
            </S.Wrapper>
            <S.Wrapper>
                <Row  alignItemsCenter row >
                    <Row>
                        <VHSelect
                            removeIndicator
                            preLoading={props.controls.secondarySkill.preLoading}
                            marginBottom={'0px'}
                            removeBorder
                            caption=""
                            data={'secondarySkillExperience'}
                            className={'secondarySkillExperience'}
                            currentItem={items[3] && items[3].id != 0  ? {value: items[3].id, label:items[3].name} : {}}
                            items={props.list}
                            description=""
                            descriptionColor="primary"
                            onEvent={props.onEvent}
                            order={3}
                            placeholder='Add secondary skill'
                        />
                    </Row>
                </Row>
                <Row width={'20%'}>
                    <VHSelect
                        removeIndicator
                        preLoading={props.controls.secondarySkill.preLoading}
                        isDisabled={!items[3] || items[3].id === 0 ? true : false}
                        marginBottom={'0px'}
                        removeBorder
                        caption=""
                        data={'secondarySkillYears'}
                        className={'secondarySkillYears'}
                        currentItem={items[3] ? secondList.find(element => element.value === items[3].yearsOfExperience) : {}}
                        items={secondList}
                        description=""
                        descriptionColor="primary"
                        leftText=""
                        onEvent={props.onEvent}
                        order={3}
                        placeholder="Experience"
                    />
                </Row>
            </S.Wrapper>
            <S.Wrapper>
                <Row  alignItemsCenter row >
                    <Row>
                        <VHSelect
                            removeIndicator
                            preLoading={props.controls.secondarySkill.preLoading}
                            marginBottom={'0px'}
                            removeBorder
                            caption=""
                            data={'secondarySkillExperience'}
                            className={'secondarySkillExperience'}
                            currentItem={items[4] && items[4].id != 0  ? {value: items[4].id, label:items[4].name} : {}}
                            items={props.list}
                            description=""
                            descriptionColor="primary"
                            onEvent={props.onEvent}
                            order={4}
                            placeholder='Add secondary skill'
                        />
                    </Row>
                </Row>
                <Row width={'20%'}>
                    <VHSelect
                        removeIndicator
                        preLoading={props.controls.secondarySkill.preLoading}
                        isDisabled={!items[4] || items[4].id === 0 ? true : false}
                        marginBottom={'0px'}
                        removeBorder
                        caption=""
                        data={'secondarySkillYears'}
                        className={'secondarySkillYears'}
                        currentItem={items[4] ? secondList.find(element => element.value === items[4].yearsOfExperience) : {}}
                        items={secondList}
                        description=""
                        descriptionColor="primary"
                        leftText=""
                        onEvent={props.onEvent}
                        order={4}
                        placeholder="Experience"
                    />
                </Row>
            </S.Wrapper>
        </React.Fragment>
    )
}

export default VHSecondaryList;