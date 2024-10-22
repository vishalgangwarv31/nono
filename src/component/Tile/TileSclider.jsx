import React, { useRef } from 'react';
import './TileSlider.css';

const TileSlider = (props) => {
    const sliderRef = useRef(null);

    const handleMouseDown = (e) => {
        sliderRef.current.isDown = true;
        sliderRef.current.startX = e.pageX - sliderRef.current.offsetLeft;
        sliderRef.current.scrollLeft = sliderRef.current.scrollLeft;
    };

    const handleMouseLeaveOrUp = () => {
        sliderRef.current.isDown = false;
    };

    const handleMouseMove = (e) => {
        if (!sliderRef.current.isDown) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - sliderRef.current.startX) * 2; 
        sliderRef.current.scrollLeft -= walk;
    };

    return (
        <div className="slider-container">
            <div
                className="slider"
                ref={sliderRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeaveOrUp}
                onMouseUp={handleMouseLeaveOrUp}
                onMouseMove={handleMouseMove}
            >
                {props.data.map((tile, index) => (
                    <div className="tile" key={index}>
                        <div className="tile-content">
                            <img src={tile.icon.startsWith('/') ? tile.icon : `/assets/${tile.icon}`} alt={tile.title} className="tile-icon" />
                            <h3 className="tile-title">{tile.title}</h3>
                            {tile.items && (
                                <ul className="tile-items">
                                    {tile.items.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TileSlider;
