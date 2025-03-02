import Stripe from 'stripe';

// Initialize Stripe with the API key from environment variables
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
    apiVersion: '2023-10-16', // Specify the Stripe API version
});

// Create payment intent for a specified amount
export async function createPaymentIntent(
    amount: number,
    currency: string = 'usd',
    metadata: Record<string, string> = {}
) {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: Math.round(amount * 100), // Stripe requires amount in cents
            currency,
            metadata,
        });

        return {
            clientSecret: paymentIntent.client_secret,
            id: paymentIntent.id,
        };
    } catch (error) {
        console.error('Stripe Payment Intent Error:', error);
        throw error;
    }
}

// Create a customer in Stripe
export async function createCustomer(
    email: string,
    name?: string,
    metadata?: Record<string, string>
) {
    try {
        const customer = await stripe.customers.create({
            email,
            name,
            metadata,
        });

        return customer;
    } catch (error) {
        console.error('Stripe Create Customer Error:', error);
        throw error;
    }
}

// Create a subscription for a customer
export async function createSubscription(
    customerId: string,
    priceId: string,
    metadata?: Record<string, string>
) {
    try {
        const subscription = await stripe.subscriptions.create({
            customer: customerId,
            items: [{ price: priceId }],
            metadata,
            payment_behavior: 'default_incomplete',
            expand: ['latest_invoice.payment_intent'],
        });

        return subscription;
    } catch (error) {
        console.error('Stripe Create Subscription Error:', error);
        throw error;
    }
}

// Retrieve a subscription
export async function getSubscription(subscriptionId: string) {
    try {
        const subscription = await stripe.subscriptions.retrieve(subscriptionId);
        return subscription;
    } catch (error) {
        console.error('Stripe Get Subscription Error:', error);
        throw error;
    }
}

// Cancel a subscription
export async function cancelSubscription(subscriptionId: string) {
    try {
        const subscription = await stripe.subscriptions.cancel(subscriptionId);
        return subscription;
    } catch (error) {
        console.error('Stripe Cancel Subscription Error:', error);
        throw error;
    }
}

export { stripe };