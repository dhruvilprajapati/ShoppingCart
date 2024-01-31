import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export function Home() {
    return (
        <div>
            <h1>Welcome to My Store!</h1>
            <p>Discover a wide range of quality products at amazing prices. Start shopping now and find the perfect items for you!</p>
            <p>
                <Button as={Link} to="/store" variant="primary">
                    Explore the Store
                </Button>
            </p>
        </div>
    );
}

