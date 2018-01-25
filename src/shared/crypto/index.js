/**
 * CRYPTO HASH
 */
const config = CONFIG;
var crypto = require('crypto'),
    md5 = require('md5');

const timestamp = Math.round(new Date().getTime() / 1000);

// create
const hashToString = () => {
    var concatenatedString = timestamp + config.api.privateKey + md5(config.api.publicKey);
    var hash = crypto.createHash('md5')
        .update(concatenatedString)
        .digest('hex');
    return hash;
}

export default hashToString;
