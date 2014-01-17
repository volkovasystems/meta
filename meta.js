/*:
	@include:
		{
			"ocf-parser":"ocfParser",
			"class-callback": "Callback"
			"arguments-to-array": "argumentsToArray"
		}
	@end-include

	@module-configuration:
		{
			"moduleName": "ocfParser",
			"authorName": "Richeve S. Bebedor",
			"isGlobal": true
		}
	@end-module-configuration

	@module-documentation:
		The meta function dictates strict rule
	@end-module-documentation
*/
meta = function meta( method, parameters, configuration ){
	/*:
		@meta-configuration:
			{
				"method":"function",
				"parameters":"Arguments",
				"configuration:optional":"object"
			}
		@end-meta-configuration
	*/
	var commands = null;
	if( meta.configuration.isExisting( ) ){
		commands = configuration;
	}else if( meta.method.isFunction( ) ){
		var rawFunction = method.toString( );
		commands = ocfParser.parseCommands( rawFunction );
	}

	if( meta.parameters.isArguments( ) ){
		parameters = argumentsToArray( parameters );
	}
};