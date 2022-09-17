import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



export default function StoreListings() {
    return (
        <div style={{ margin: "auto" }}>
            <h2 style={{ fontSize: "36px", lineHeight: "50px", marginTop: "20px", textAlign: "center", fontWeight: "normal" }}>Browse stores in Houston</h2>
            <Container style={{ marginTop: "50px", textAlign: "center" }}>
                <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}} >
                    <Row>
                        <Col xs=".5" >
                            <Image style={{ height: "55px", width: "50px", border: "1px solid #E8E9EB" }} src="https://corporate.aldi.us/fileadmin/_processed_/7/6/csm_aldi_logo_2017_cbae513198.jpg" roundedCircle />
                        </Col>
                        <Col style={{textAlign: "center"}}>
                            <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                    <Row >
                        <Col xs=".5">
                            <Image style={{ height: "50px", width: "50px", border: "1px solid #E8E9EB" }} src="https://www.sprouts.com/wp-content/uploads/2020/03/sprouts-logo.png" roundedCircle />
                        </Col>
                        <Col style={{textAlign: "center"}}>
                            <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                    <Row >
                        <Col xs=".5" >
                            <Image style={{ height: "50px", width: "50px", border: "1px solid #E8E9EB" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Kroger_logo_%281961-2019%29.svg/375px-Kroger_logo_%281961-2019%29.svg.png" roundedCircle />
                        </Col>
                        <Col style={{textAlign: "center"}}>
                            <h5 style={{ fontWeight: "bold" }}>Kroger</h5>
                            <p>Delivery</p>
                        </Col>
                    </Row>
                </Row>


                <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly", marginTop: "40px"}} >
                    <Row>
                        <Col xs=".5" >
                            <Image style={{ height: "55px", width: "50px", border: "1px solid #E8E9EB" }} src="https://corporate.aldi.us/fileadmin/_processed_/7/6/csm_aldi_logo_2017_cbae513198.jpg" roundedCircle />
                        </Col>
                        <Col style={{textAlign: "center"}}>
                            <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                    <Row >
                        <Col xs=".5">
                            <Image style={{ height: "50px", width: "50px", border: "1px solid #E8E9EB" }} src="https://www.sprouts.com/wp-content/uploads/2020/03/sprouts-logo.png" roundedCircle />
                        </Col>
                        <Col style={{textAlign: "center"}}>
                            <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                    <Row >
                        <Col xs=".5" >
                            <Image style={{ height: "50px", width: "50px", border: "1px solid #E8E9EB" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Kroger_logo_%281961-2019%29.svg/375px-Kroger_logo_%281961-2019%29.svg.png" roundedCircle />
                        </Col>
                        <Col style={{textAlign: "center"}}>
                            <h5 style={{ fontWeight: "bold" }}>Kroger</h5>
                            <p>Delivery</p>
                        </Col>
                    </Row>
                </Row>

            </Container>
        </div >
    )
}
