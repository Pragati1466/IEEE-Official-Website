import Navbar from '@/sections/Header';
import Footer from '@/sections/Footer';

const IeeeWeek24 = () => {
    
    return (
        <div id='ieeeWeek24'>
            <Navbar />
            <div className="flex items-center justify-center h-screen bg-[#030014] text-white">
                <h1 className="text-4xl font-bold">Welcome to IEEE Week 2024!</h1>
                <p className="mt-4 text-lg">Join us for a week of exciting events and activities!</p>
            </div>
            <Footer />
        </div>
    );
};

export default IeeeWeek24;

