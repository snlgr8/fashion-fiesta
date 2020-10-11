import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Hb18GAUg6L78P7pLfo3E1Yl9NNoJaEhoXKiXP4bj7nHlOYjFPs8A5g1CfcUfQU4WVd41WcbhBN4wJ70kVI7yL9J00dsRrE8ej'
    const onToken = token => {
        console.log(token);
        alert('Payment successful!');
    }
    return (
        <StripeCheckout label='Pay Now'
            name='Fashion Fiesta Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/QSS.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton