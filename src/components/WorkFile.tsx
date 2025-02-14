import Card from 'react-bootstrap/Card';

function WorkFiles(props: any) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.props.avatar_url} />
                <Card.Body>
                    <Card.Title>{props.props.login}</Card.Title>
                    <Card.Text className='card-text-content'>
                        <span>{props.props.email}@test.com</span><br />
                        <span>{props.props.html_url}</span><br />
                        <span>{props.props.bio === undefined ? `Long walks on the beach` : `${props.props.bio}`}</span><br />
                        <span>{props.props.company === undefined ? `Github` : `${props.props.company}`}</span><br />
                        <span>{props.props.location === undefined ? `Narnia, CA` : `${props.props.location}`}</span>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}



export default WorkFiles;