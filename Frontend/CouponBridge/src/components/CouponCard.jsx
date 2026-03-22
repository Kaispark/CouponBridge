import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import TimerIcon from '@mui/icons-material/Timer';
import Button from '@mui/material/Button';
import '../index.css';
import './CouponCard.css';

function CouponCard() {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <div className="card-title">
                        <div className="card-logo lg-heading">A</div>
                        <div className="card-subtitle heading">Amazon</div>
                    </div>
                    <FavoriteBorderIcon className='card-like'/>
                </div>
                <span className='card-title-discount heading'> 50% Discount</span>
                <div className="card-body sub-heading">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga quod labore dolore laudantium maiores voluptatibus porro ab expedita.
                </div>
                <div className="card-footer">
                    <div className="card-footer-details">
                        <div className="price lg-heading">$10</div>
                        <div className="expiry sub-heading">
                            <TimerIcon/>
                            <p>30d left</p>
                        </div>
                    </div>
                    <div className="card-footer-navigate sub-heading">
                        <Button variant="contained" className='add-to-cart'>
                            <AddShoppingCartIcon/>
                            Add to Cart
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CouponCard