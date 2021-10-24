import './About.css'
import Footer from './Footer';
import Navbar from './Navbar';
const About = () => {
    return ( 
        <div className="about">
            <Navbar />
            <main>
                <h1>About</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis consequuntur praesentium esse tenetur voluptates laudantium quasi quisquam architecto numquam perspiciatis error, a, exercitationem similique ipsum sed blanditiis recusandae placeat vitae ullam qui iste. Corporis omnis aliquid alias maiores quod facere nisi tenetur dolore? Adipisci cumque neque alias optio eius architecto illum.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore excepturi doloremque eum officia a id doloribus praesentium numquam ipsum, fugiat nobis aliquid. Blanditiis aspernatur eaque incidunt sequi similique reprehenderit, obcaecati totam explicabo, sint repudiandae autem laboriosam iste pariatur tempora non!</p>
            </main>
            <Footer className="about-footer"/>
        </div>
     );
}
 
export default About;