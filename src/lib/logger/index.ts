import winston from 'winston';
import 'winston-daily-rotate-file';

const { combine, timestamp, printf, colorize, json } = winston.format;

// Define log levels
const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4,
};

// Define log level based on environment
const level = () => {
    const env = process.env.NODE_ENV || 'development';
    return env === 'development' ? 'debug' : 'info';
};

// Custom log format
const logFormat = printf(({ level, message, timestamp, ...metadata }) => {
    return `${timestamp} [${level}]: ${message} ${
        Object.keys(metadata).length ? JSON.stringify(metadata) : ''
    }`;
});

// Transports for development
const developmentTransports = [
    new winston.transports.Console({
        format: combine(
            colorize({ all: true }),
            timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
            logFormat
        ),
    }),
];

// Transports for production
const productionTransports = [
    new winston.transports.Console({
        format: combine(timestamp(), json()),
    }),
    new winston.transports.DailyRotateFile({
        filename: 'logs/application-%DATE%.log',
        datePattern: 'YYYY-MM-DD',
        zippedArchive: true,
        maxSize: '20m',
        maxFiles: '14d',
        format: combine(timestamp(), json()),
    }),
    new winston.transports.DailyRotateFile({
        level: 'error',
        filename: 'logs/error-%DATE%.log',
        datePattern: 'YYYY-MM-DD',
        zippedArchive: true,
        maxSize: '20m',
        maxFiles: '14d',
        format: combine(timestamp(), json()),
    }),
];

// Create the logger
const logger = winston.createLogger({
    level: level(),
    levels,
    format: combine(timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), json()),
    transports:
        process.env.NODE_ENV === 'production'
            ? productionTransports
            : developmentTransports,
});

export default logger;