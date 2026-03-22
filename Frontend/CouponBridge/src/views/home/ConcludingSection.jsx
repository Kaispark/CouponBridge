import './ConcludingSection.css'
import '../../index.css';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function ConcludingSection() {
    return (
        <>
            <div className="conclusion-section">
                <div className="conclusion-title section-heading">Ready to Start Saving?</div>
                <div className="conclusion-subtitle sub-heading">Join CouponBridge today and discover thousands of verified coupons from top brands.</div>
                <Button variant='contained' className='conclusion-create'>
                    <p>Create Free Account</p>
                    <ArrowForwardIcon/>
                </Button>
            </div>
        </>
    );
}


export default ConcludingSection