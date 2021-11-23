import { Link } from 'react-router-dom'

function Contact() {
    return (
        <section>
            <div className='wrapper'>
                <h3>got questions?</h3>
                <h4>The easiest thing to do is post on our <Link to='/forums'>forums</Link></h4>
            </div>
        </section>
    );
}

export default Contact;