import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Hb18GAUg6L78P7pLfo3E1Yl9NNoJaEhoXKiXP4bj7nHlOYjFPs8A5g1CfcUfQU4WVd41WcbhBN4wJ70kVI7yL9J00dsRrE8ej'
    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token
            }
        }).then(response => {
            alert('succesful payment');
        })
            .catch(error => {
                console.log('Payment Error: ', error);
                alert(
                    'There was an issue with your payment! Please make sure you use the provided credit card.'
                );
            });
    }
    return (
        <StripeCheckout label='Pay Now'
            name='Fashion Fiesta Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/QSS.svg'
            description={`Your total is Rs${price}`}
            amount={priceForStripe}
            panelLabel='Pay now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton