/**
 * Standard API response handler
 */
class ResponseHandler {
    
  
    /**
     * status codes
     */
    static getStatusMesages(statusCode){
      const statusMessages = {
        200: 'Success',
        201: 'Created',
        400: 'Bad Request',
        401: 'Unauthorized',
        403: 'Forbidden',
        404: 'Not Found',
        409: 'Conflict',
        422: 'Unprocessable Entity',
        500: 'Internal Server Error'
    };
    return statusMessages[statusCode] || "unknown status code";
    }
  
  
    /**
     * Success response
     */
    static success(res, data = null, message = 'Success', statusCode = 200) {
      return res.status(statusCode).json({
        success: true,
        message,
        data
      });
    }
  
    /**
     * Error response
     */
    static error(res, message = 'Error', statusCode = 500, errors = null) {
      return res.status(statusCode).json({
        success: false,
        message,
        errors
      });
    }
  }
  
  module.exports = { ResponseHandler };