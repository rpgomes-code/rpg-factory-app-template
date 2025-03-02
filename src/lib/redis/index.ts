import { Redis } from 'ioredis';

// Check if we're in a production environment
const isProduction = process.env.NODE_ENV === 'production';

// Configure Redis client based on environment
const redisClient = new Redis(
    isProduction
        ? {
            host: process.env.REDIS_HOST || 'redis',
            port: parseInt(process.env.REDIS_PORT || '6379'),
            password: process.env.REDIS_PASSWORD,
        }
        : process.env.REDIS_URL || 'redis://localhost:6379'
);

redisClient.on('error', (err) => {
    console.error('Redis Client Error:', err);
});

export async function getCache<T>(key: string): Promise<T | null> {
    const data = await redisClient.get(key);
    if (!data) return null;
    return JSON.parse(data) as T;
}

export async function setCache<T>(
    key: string,
    data: T,
    expireInSeconds?: number
): Promise<void> {
    await redisClient.set(key, JSON.stringify(data));
    if (expireInSeconds) {
        await redisClient.expire(key, expireInSeconds);
    }
}

export async function deleteCache(key: string): Promise<void> {
    await redisClient.del(key);
}

export async function clearCache(): Promise<void> {
    await redisClient.flushall();
}

export { redisClient };