import { easeOut, motion } from "framer-motion";
import team1 from '../../assets/team/team1.jpg'
import team2 from '../../assets/team/team2.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <motion.img
                        src={team1}
                        animate={{ y: [0, 50, 0] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="max-w-sm w-64   rounded-t-[40px] rounded-br-[40px] 
                        border-l-8 border-b-8 border-blue-600
                        shadow-2xl" />
                    <motion.img
                        src={team2}
                        animate={{ x: [50, 100, 50] }}
                        transition={{ duration: 10, delay: 5, repeat: Infinity }}
                        className="max-w-sm w-64   rounded-t-[40px] rounded-br-[40px] 
                        border-l-8 border-b-8 border-blue-600
                        shadow-2xl" />
                </div>
                <div className='flex-1'>
                    {/* <motion.h1 className="text-5xl font-bold">Latest Jobs for You!</motion.h1> */}
                    <motion.h1
                        animate={{ x: 50 }}
                        transition={{ duration: 2, delay: 1, ease: easeOut, repeat: Infinity }}
                        className="text-5xl font-bold">Latest <motion.span

                            animate={{ color: ['#edf760', '#4decf7', '#834df7'] }}
                            transition={{ duration: 1.5, repeat: Infinity }}

                        >Jobs</motion.span> for You!</motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;