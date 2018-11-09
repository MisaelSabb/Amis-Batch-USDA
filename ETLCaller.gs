/**
 * class to manage to sync data to the original sources
 */
var ETLCaller = new function() {
	/**
	 * call the ETL Jobs
	 * @param  {string} countryLabel label of the country
	 * @return  NO RETURN	 
	 */
	 this.runETLJob = function(bool) {
       
 	   var options={
         'method' : 'post',
         'contentType': 'application/json',         
         'payload' : JSON.stringify({"jobNameAndParameters":Config.ETLjobNameAndParameters})
       };
       
       var optionsNewSeason={
         'method' : 'post',
         'contentType': 'application/json',         
         'payload' : JSON.stringify({"jobNameAndParameters":Config.ETLjobNameAndParametersNewSeason})
       };

       var resp= bool ? UrlFetchApp.fetch( Config.ETLEndpoints, optionsNewSeason ) : UrlFetchApp.fetch( Config.ETLEndpoints, options );
       Logger.log(bool);
       Logger.log(resp.getResponseCode());       
 	};
    /**
	 * call the ETL cloud Jobs
	 * @param  {string} countryLabel label of the country
	 * @return  NO RETURN	 
	 */
	 this.runCloudETLJob = function(bool) {
      var options={
         'method' : 'post',
         'contentType': 'application/json',         
         'payload' : JSON.stringify({"jobNameAndParameters":Config.ETLjobNameAndParameters})
       };
       
       var optionsNewSeason={
         'method' : 'post',
         'contentType': 'application/json',         
         'payload' : JSON.stringify({"jobNameAndParameters":Config.ETLjobNameAndParametersNewSeason})
       };

       var resp= bool ? UrlFetchApp.fetch( Config.ETLCloudEndpoints, optionsNewSeason ) : UrlFetchApp.fetch( Config.ETLCloudEndpoints, options );
       Logger.log(bool);
       Logger.log(resp.getResponseCode());    
 	} 


};
