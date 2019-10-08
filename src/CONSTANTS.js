import CONSTANTS_DEV from './env/development';
import CONSTANTS_PROD from './env/production';
const CONSTANTS = process.env.REACT_APP_API_ENV === 'development' ? CONSTANTS_DEV : CONSTANTS_PROD;
export default CONSTANTS;