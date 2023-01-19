import "./Accordion.scss"

const Accordion = () => {
    return <div className="Accordion">
        
        <div class="accordion accordion-flush" id="accordionFlushExample">
            
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    How do I enter Infin8 2023 as a non participant?
                    </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">You may come to IIIT Bangalore with a college identity proof (Like ID card). You will be required to pay an entrance fee of Rs. 50 at the main gate followed by which you will be given a pass/barcode which you can then you to enter campus at any other point in time during the fest.</div>
                </div>
            </div>


            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Do I need to pay the entrance fees as a participant?
                    </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">No, once you register for an event as a participant, you will not be required to pay any additional base fees at the main gate. You may walk in by scanning your profile's QR code at the main gate. The QR code can be found in the profile section on the website after logging in.</div>
                </div>
            </div>


            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    How do I make my payments for the events?
                    </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Each event page has a registration section, where you are required to pay the mentioned amount as the entry fees via UPI. Following this, you are required to upload a screenshot of your transaction, as well as share your UPI reference number/Transaction ID for the payment. This shall be verified within 24 hours and your entry will be validated.</div>
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-heading4">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse4" aria-expanded="false" aria-controls="flush-collapse4">
                    How do I register for team events?                    
                    </button>
                </h2>
                <div id="flush-collapse4" class="accordion-collapse collapse" aria-labelledby="flush-heading4" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Each team leader will have to pay the full amount for the team event. Following the verification of the same, the leader shall receive a code which is to be shared with all other team members and their personal QRs shall be automatically updated.</div>
                </div>
            </div>
            
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-heading5">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse5" aria-expanded="false" aria-controls="flush-collapse5">
                    Do I need multiple entry QR codes for multiple event participation?                    </button>
                </h2>
                <div id="flush-collapse5" class="accordion-collapse collapse" aria-labelledby="flush-heading5" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">No, you shall not require multiple QR codes. The QR associated with your profile is sufficient and shall be updated with information based on your registrations.</div>
                </div>
            
            
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-heading6">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse6" aria-expanded="false" aria-controls="flush-collapse6">
                    How do I make myself eligible for the lottery in the MAD MIX event?                    </button>
                </h2>
                <div id="flush-collapse6" class="accordion-collapse collapse" aria-labelledby="flush-heading6" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Just walk into campus on day 2 of infin8, and your name shall be added into the pool of seats. A lucky 100 of you shall win a ticket to a 1.5 hour stand up comedy show performed by 2 of the best comedians in the country. The results of the lottery shall be announced 2 hours prior to the show. The winners of all day 2 competitions, and a few lucky winners in stalls shall also receive this lottery ticket.</div>
                </div>
            
            
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-heading7">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse7" aria-expanded="false" aria-controls="flush-collapse7">
                    Do I have to pay for the events if I am a student of IIITB?                    </button>
                </h2>
                <div id="flush-collapse7" class="accordion-collapse collapse" aria-labelledby="flush-heading7" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">No, you needn't pay. Your identity shall be verified through your personal IIITB email address via an OTP. Following this, you can register for the events free of cost.</div>
                </div>
            </div>
        
        
        </div>
       </div>
}

export default Accordion;