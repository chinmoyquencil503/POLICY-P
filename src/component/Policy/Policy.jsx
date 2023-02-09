/** @format */
import React from "react";
import rightArrow from '../../assite/images/arrow-right.svg'
import './policy.css'


const Policy = () => {
	return (
		<div className='policy-main'>
			<div className='policy-main-header'>
				<h1>Company Policies</h1>
			</div>
			<div className='policy-main-header2'>
				<h3>What are Company policies?</h3>
				<p>
					Company policies are guidelines that help employers deal with the help
					safety and accountable T of employees as well as their interactions
					with customers or client Business policies can also be used as a
					guideline for Federal or state regularity requirements, legal issues
					and other situations that can lead to severe consequences for
					employees.
				</p>
			</div>
      <div className="policy-main-card-header">
          <h3>Here's a list of company policies you may need:</h3>
        </div>
        <div className="policy-main-card-box">
          <div className="policy-main-card" >
            <p>Equal Opportunity Policy</p>
            <button>See More</button>
            <img src={rightArrow} alt='arrow' />
          </div>

          <div className="policy-main-card">
            <p>Workolace Health and Seftey</p>
            <button>See More</button>
            <img src={rightArrow} alt='arrow' />
          </div>

          <div className="policy-main-card">
            <p>Employee code of conduct policy</p>
            <button>See More</button>
            <img src={rightArrow} alt='arrow' />
          </div>

          <div className="policy-main-card">
            <p>Attendance & vacation policies</p>
            <button>See More</button>
            <img src={rightArrow} alt='arrow' />
          </div>

          <div className="policy-main-card">
            <p>Employee disciplinary action policy</p>
            <button>See More</button>
            <img src={rightArrow} alt='arrow' />
          </div>

          <div className="policy-main-card">
            <p>Employee complaint policies</p>
            <button>See More</button>
            <img src={rightArrow} alt='arrow' />
          </div>

          <div className="policy-main-card">
            <p>Substance abuse policies</p>
            <button>See More</button>
            <img src={rightArrow} alt='arrow' />
          </div>

          <div className="policy-main-card">
            <p>Workplace security policies</p>
            <button>See More</button>
            <img src={rightArrow} alt='arrow' />
          </div>

          <div className="policy-main-card">
            <p>Bring your own device policies</p>
            <button>See More</button>
            <img src={rightArrow} alt='arrow' />
          </div>

          <div className="policy-main-card">
            <p>Compensation and benifits policy</p>
            <button>See More</button>
            <img src={rightArrow} alt='arrow' />
          </div>

          <div className="policy-main-card">
            <p>Travel policies</p>
            <button>See More</button>
            <img src={rightArrow} alt='arrow' />
          </div>

          <div className="policy-main-card">
            <p>Emoloyee Fraternization policy</p>
            <button>See More</button>
            <img src={rightArrow} alt='arrow' />
          </div>

          <div className="policy-main-card">
            <p>Inclement Weather Policies</p>
            <button>See More</button>
            <img src={rightArrow} alt='arrow' />
          </div>

          <div className="policy-main-card">
            <p>Employee face Mask policy</p>
            <button>See More</button>
            <img src={rightArrow} alt='arrow' />
          </div>

          <div className="policy-main-card">
            <p>Remote work Policy</p>
            <button>See More</button>
            <img src={rightArrow} alt='arrow' />
          </div>
        </div>
		</div>
	);
};

export default Policy;
