import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, CardText, Row } from 'reactstrap';

// query gets a list of all section titles for INDIA
const sectionsLink = 'https://en.wikipedia.org/w/api.php?action=parse&prop=sections&format=json&origin=*&page=';
//query gets the section text for that country and for the specified section
const sectionText = 'https://en.wikipedia.org/w/api.php?action=parse&prop=text&format=json&origin=*&page=';

export class Stories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sectionsList: {
                culture: {
                    subSections: []
                }
            }
        }
    }

    // action = query
    // prop = info

    componentDidMount() {
        let culture;
        fetch(sectionsLink + this.props.match.params.countryName)
            .then(results => {
                return results.json();
            }).then(data => {
                culture = data.parse.sections.find((section) => {
                    return section.line === 'Culture';
                });
                let subSections = data.parse.sections.filter((subSection) => {
                    return subSection.number.startsWith(culture.number + '.');
                })
                culture.subSections = subSections;
                let queryAll = subSections.map((subSection) => {
                    return fetch(sectionText + this.props.match.params.countryName + '&section=' + subSection.index);
                })
                return Promise.all(queryAll);
            }).then(outputArray => {
                return Promise.all(outputArray.map((output) => {
                    return output.json()
                }));
            }).then(subSectionContentArray => {
                culture.subSections.forEach((subSection, i) => {
                    subSection.content = subSectionContentArray[i].parse.text['*'];
                });
                this.setState({
                    sectionsList: {
                        culture: culture
                    }
                });
                console.log(culture);
            })
    }

    render() {
        console.log(this.props.match.params.countryName);
        let data = this.state.sectionsList.culture.subSections;
        return (
            <div className="container">
                {data.map((d, i) => {
                    return (
                        <Row sm="6" key={"project" + i}>
                            <Card>
                                {/* <CardImg top width="50%" src={d.EventImage} alt={d.EventName} /> */}
                                <CardBody>
                                    {/* <CardTitle>
                                        {d.line}
                                    </CardTitle> */}
                                    <CardText>
                                        <div dangerouslySetInnerHTML={{__html: d.content}}></div>
                                    </CardText>
                                    {/* <CardText>
                                        <small className="text-muted">{d.ImageAttribution}</small>
                                    </CardText> */}
                                    {/* <a target="_blank" href="https://www.infoplease.com/world/current-events-world-us-science-and-business-news">
                                        <Button>Link</Button>
                                    </a> */}
                                </CardBody>
                            </Card>
                            <br />
                        </Row>
                    )

                })}
            </div>
        )
    }
}