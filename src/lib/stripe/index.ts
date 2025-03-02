import Stripe from 'stripe';

// Initialize Stripe with the API key from environment variables
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');

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
        return await stripe.customers.create({
            email,
            name,
            metadata,
        });
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
        return await stripe.subscriptions.create({
            customer: customerId,
            items: [{price: priceId}],
            metadata,
            payment_behavior: 'default_incomplete',
            expand: ['latest_invoice.payment_intent'],
        });
    } catch (error) {
        console.error('Stripe Create Subscription Error:', error);
        throw error;
    }
}

// Retrieve a subscription
export async function getSubscription(subscriptionId: string) {
    try {
        return await stripe.subscriptions.retrieve(subscriptionId);
    } catch (error) {
        console.error('Stripe Get Subscription Error:', error);
        throw error;
    }
}

// Cancel a subscription
export async function cancelSubscription(subscriptionId: string) {
    try {
        return await stripe.subscriptions.cancel(subscriptionId);
    } catch (error) {
        console.error('Stripe Cancel Subscription Error:', error);
        throw error;
    }
}

export { stripe };