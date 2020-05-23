import Logger from '@helpers/logger';
import stringify from 'json-stringify-safe';

export default (req, res, next) => {
	Logger.info(`method: ${req.method} url: ${req.url} headers: ${stringify(req.headers)}`);
	next();
};
