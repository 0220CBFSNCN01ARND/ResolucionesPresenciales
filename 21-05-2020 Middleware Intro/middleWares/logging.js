const loggingMiddleware = (req, res, next) => {
    console.log(`Log Antes ${new Date().toISOString()} : ${req.originalUrl}`);
    next();
    console.log(`Log Despues ${new Date().toISOString()} : ${req.originalUrl}`);
};

module.exports = loggingMiddleware;