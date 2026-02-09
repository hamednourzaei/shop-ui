import "./Console.css"
import { Link } from 'react-router-dom';

const Console = () => {
    return (
        <div className='Console'>
            <div className='Xbox'>
                <img src="/svg/xbox.svg" alt="" className='svgConsole' />
                <Link className='HovericoneConsole'>
                    <img src="/Console/xbox.webp" alt="" />
                </Link>
            </div>
            <div className='Ps'>
                <img src="/svg/ps.svg" alt="" className='svgConsole' />
                <Link className='HovericoneConsole'>
                    <img src="/Console/console.webp" alt="" />
                </Link>
            </div>
        </div>
    );
}

export default Console;
