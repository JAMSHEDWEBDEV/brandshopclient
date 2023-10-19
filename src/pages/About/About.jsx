
import { FaHandsHelping } from 'react-icons/fa';
import { MdPolicy } from 'react-icons/md';

const About = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-7 mt-10">
            <div>
                <img src="https://i.ibb.co/8jH53X7/about.png" alt="about_img" />
            </div>
            <div>
                <p className='font-bold'>100% Organic Food Provide</p>
                <h1 className='text-4xl font-bold my-5'>Be healthy & eat <br /> fresh organic food</h1>
                <p>Assertively target market Interactivel product distinctive paradigms whereas one-to-one intellectual capital. resource sucking services.</p>
                <div className='flex flex-col md:flex-row lg:flex-row gap-5'>
                    <div className="mt-10 card bg-base-100 shadow-xl border-2">
                        <div className='ml-10 text-6xl pt-5 text-green-600'>
                            <h1><FaHandsHelping /></h1>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">Trusted Partner</h2>
                            <p>Continually transform virtual meta- methodologies. leverage existing alignments.</p>
                        </div>
                    </div>
                    <div className="mt-10 card bg-base-100 shadow-xl border-2">
                        <div className='ml-10 text-6xl pt-5 text-green-600'>
                            <h1><MdPolicy /></h1>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">Return Policy</h2>
                            <p>Continually transform virtual meta- methodologies. leverage existing alignments.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;