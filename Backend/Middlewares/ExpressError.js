class ExpressError extends Error{ //inheritence with express's error class
    constructor(status,message){
        super();
        this.status = status;
        this.message = message;
    }
}

module.exports = ExpressError;