import { useEffect } from 'react';
import './main.scss';
import Slider from "react-slick";

const Main = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3.7,
        slidesToScroll: 1,
        speed: 500,
        cssEase: "linear"
    };

    useEffect(()=>{
        const imgTitle = document.querySelector('.imgTitle');

        document.querySelectorAll('.images').forEach(image => {
            image.addEventListener('click', ()=>{
                imgTitle.src = `${image.src}`;
            })
        }); 
    },[]);
    
    return(
        <>
            <div className='main'>
                <div className="main-left">
                    <img src={require('../../Image/Group 1.png')} alt="" />
                    <p>CHOOSE YOUR WINTER <span>LOOK</span>* APPAREL</p>
                </div>
                <div className="main-rigth">
                    <img src={require(`../../Image/face6.png`)} alt="" className='imgTitle'/>
                </div>
                <div className="main-vector">
                    <img src={require('../../Image/Vector 1.png')} alt="" />
                </div>
            </div>
            <div className='looks'>
                <div className='ChooseLooks'>
                    <h1>CHOOSE LOOKS</h1>
                    <Slider {...settings} className='ChooseLooks-slider'>
                        <div className='ChooseLooks-slider-item'>
                            <img src={require('../../Image/face1.jpg')} className='images' alt="" />
                        </div>
                        <div className='ChooseLooks-slider-item'>
                            <img src={require('../../Image/face2.jpg')} className='images' alt="" />
                        </div>
                        <div className='ChooseLooks-slider-item'>
                            <img src={require('../../Image/face3.jpg')} className='images' alt="" />
                        </div>
                        <div className='ChooseLooks-slider-item'>
                            <img src={require('../../Image/face4.jpg')} className='images' alt="" />
                        </div>
                        <div className='ChooseLooks-slider-item'>
                            <img src={require('../../Image/face5.jpg')} className='images' alt="" />
                        </div>
                        <div className='ChooseLooks-slider-item'>
                            <img src={require('../../Image/face6.png')} className='images' alt="" />
                        </div>
                    </Slider>
                </div>
                <div className='MoreAboutUs'>
                    <h1>MORE ABOUT US</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed enim sed libero commodo efficitur. Suspendisse et lorem ac neque dictum pellentesque nec sit amet nisl. Fusce rutrum quis purus ut pretium. Vivamus ornare mauris non ligula egestas, accumsan faucibus quam sollicitudin. Duis efficitur lorem tellus. Aliquam non rhoncus felis, porttitor consequat quam. Morbi gravida semper mattis. Nunc ultrices justo in pulvinar convallis. Curabitur dapibus ut tellus eu condimentum. Morbi vitae convallis purus, ac finibus ipsum.</p>
                    <p>Suspendisse nec pharetra turpis. Aenean id nunc id orci aliquam pulvinar eget vitae nisl. In ligula neque, vestibulum vel arcu eu, eleifend vestibulum tortor. Duis facilisis, est et aliquam dapibus, urna mauris sagittis mi, et mattis metus magna vel tellus. Phasellus sit amet volutpat ante, ut condimentum lorem. Quisque auctor sollicitudin dui, vitae egestas nunc suscipit et. Nullam eu quam sem. Donec a nibh molestie, aliquam libero maximus, feugiat velit. Curabitur ac accumsan velit. In hac habitasse platea dictumst.</p>
                </div>
            </div>
        </>
    )
};

export default Main;