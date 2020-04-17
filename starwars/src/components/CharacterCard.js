import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardHeader, Col
} from 'reactstrap';

const CharacterCard = (props) => {
    return (
                <Col xl="5">
                    <Card>
                        <CardHeader>{props.name}</CardHeader>
                        <CardBody>
                            <CardText>Gender: {props.gender}</CardText>
                            <CardText>Height: {props.height}</CardText>
                            <CardText>Weight: {props.mass}kg</CardText>
                            <CardText>Hair Color: {props.hairColor}</CardText>
                            <CardText>Skin Color: {props.skinColor}</CardText>
                            <CardText>Eye Color: {props.eyeColor}</CardText>
                            <CardText>Birth Year: {props.birthYear}</CardText>
                        </CardBody>
                    </Card>
                </Col>
    )


};

export default CharacterCard;