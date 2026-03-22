import './CouponSection.css';
import '../../App.css';
import CouponCard from '../../components/CouponCard.jsx';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function CouponSection() {
    return (
        <>
            <div className="coupon-section">
                <div className="coupon-header-section">
                    <div className="coupon-header">
                        <p className="header-title section-heading">Featured Coupons</p>
                        <p className="header-desc sub-heading">Hand-picked deals from our top sellers</p>
                    </div>
                    <div className="view-all sub-heading">
                        View All
                        <ArrowForwardIcon/>
                    </div>
                </div>
                <div className="coupon-list">
                    <CouponCard/>
                    <CouponCard/>
                    <CouponCard/>
                    <CouponCard/>
                </div>
            </div>
        </>
    );
}


export default CouponSection;