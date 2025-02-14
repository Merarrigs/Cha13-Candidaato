import Card from 'react-bootstrap/Card';

function WorkProfile(props: any) {
    return (

        <div>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.props.logo} />
        <Card.Body>
            <Card.Title>{props.props.name}</Card.Title>
            <Card.Text className='card-text-content'>
                <p> {props.props.name}@test.com</p>
                <p> {props.props.file_url}</p>
                <p> {props.props.bio === undefined ? `Long walks on the beach` : `${props.props.bio}`}</p>
                <p> {props.props.company === undefined ? `Github` : `${props.props.company}`}</p>
                <p> {props.props.location === undefined ? `Narnia` : `${props.props.location}`}</p>

            </Card.Text>
        </Card.Body>
        </Card>
        </div>
    )
}

export default WorkProfile;