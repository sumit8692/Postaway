import fs from 'fs';
import winston from 'winston';

const fspromise = fs.promises;

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'request-logging' },
    transports: [
        new winston.transports.File({ filename: 'logs.txt' })
    ]
});

const loggerMiddleware = async (req, res, next) => {
    // 1. Log request body.
    if (!req.url.includes('signin') || !req.url.includes('signup')) {
        const requestBody = req.body ? JSON.stringify(req.body) : "No request body";
        const logData = `${requestBody} - ${req.method} ${req.url}`;
        logger.info(logData);
    }
    next();
};

export default loggerMiddleware;
