import React from 'react'
import "./pig.css"
const Wel = () => {
  return (
    <div className="wrapper">
    <div className="bird">
        <div className="head">
            <div className="eye eye_right">
                <div className="eye__inner eye__inner_right">
                    <div className="eye__pupil"></div>
                </div>
            </div>

            <div className="nose"></div>

            <div className="eye eye_left">
                <div className="eye__inner eye__inner_left">
                    <div className="eye__pupil"></div>
                </div>
            </div>
        </div>

        <div className="body-wrap">
            <div className="body1"></div>
            <div className="body2"></div>
            <div className="body3"></div>
        </div>

        <div className="legs">
            <div className="leg leg_left"></div>
            <div className="leg leg_right"></div>
        </div>

        <div className="tail"></div>

        <div className="pseudo-knife">
            <div className="pseudo-knife__blade"></div>
            <div className="pseudo-knife__handle"></div>
        </div>

        <div className="knife">
            <div className="knife__blade"></div>
            <div className="knife__handle"></div>
        </div>
    </div>
</div>
  )
}

export default Wel
