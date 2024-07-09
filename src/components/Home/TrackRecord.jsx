import React from 'react'
import CountUp from 'react-countup'
import './home.css'
import VisibilitySensor from "react-visibility-sensor";

const TrackRecord = () => {
  return (
    <div className=" text-center py-[40px]">
        <h1 className="text-[2.1em] text-cus-brand  max-w-[100%] mb-14 ">
          Our Track Record
        </h1>
        <div className="grid-3-tests">
          <div className="brand-img">
            <h1 className="landing-h1">
              <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                {({ isVisible }) => (
                  <div>
                    {isVisible ? (
                      <CountUp delay={0} duration={3} end={700} start={500} />
                    ) : null}
                    +
                  </div>
                )}
              </VisibilitySensor>
            </h1>
            <div className="text-cus-slate-grey pt-[16px] text-[16px] leading-[24px]">
              Outlets served till now
              <br />
              <strong>"We are Trust Worthy"</strong>
            </div>
          </div>
          <div className="brand-img">
            <h1 className="landing-h1">
              <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                {({ isVisible }) => (
                  <div>
                    {isVisible ? (
                      <CountUp delay={0} duration={3.2} end={20} start={1} />
                    ) : null}{" "}
                    Crores+
                  </div>
                )}
              </VisibilitySensor>
            </h1>
            <div className="text-cus-slate-grey pt-[16px] text-[16px] leading-[24px]">
              Helped Increase Restaurant Revenue by 20 Cr+*.
              <br />
              <strong>"We are Empathetic"</strong>
            </div>
          </div>
          <div className="brand-img">
            <h1 className="landing-h1">
              <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                {({ isVisible }) => (
                  <div>
                    {isVisible ? (
                      <CountUp delay={0} duration={3} end={100} start={20} />
                    ) : null}
                    %
                  </div>
                )}
              </VisibilitySensor>
            </h1>
            <div className="text-cus-slate-grey pt-[16px] text-[16px] leading-[24px] ">
              Attendance since Day 1.
              <br />
              <strong>"We are Committed and Reliable"</strong>
            </div>
          </div>
        </div>
      </div>
  )
}

export default TrackRecord
