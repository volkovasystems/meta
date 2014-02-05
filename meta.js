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
			"moduleName": "meta",
			"authorName": "Richeve S. Bebedor",
			"isGlobal": true
		}
	@end-module-configuration

	@module-documentation:
		The meta function dictates strict rule in checking and applying
			meta configurations.

		It basically reads a simple rule configuration.
			{
				"ruleKey[:optional]": type[-type][|type...][:defaultValue][~linkedProperty] 
			}

			~ linked property *	 	priority 0
			! disregard property 	priority 0
			: default value *	 	priority 0
			- group of types		priority 1
			| or separator		  	priority 2
			& and separator			priority 2
			; meta mutator          priority 3
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

	/*
		isEmpty
		isNotEmpty
		isExisting
		isNotExisting
		isNumber
		isNotNumber
		isObject
		isNotObject
		isArray
		isNotArray
		isString
		isNotString
		isBoolean
		isNotBoolean
	*/
	var flags = {
		"emptyFlag": false,
		"existingFlag": false,
		"numberFlag": false,
		"objectFlag": false,
		"arrayFlag": false,
		"stringFlag": false,
		"booleanFlag": false,
		"optionalFlag": false
	};
	
};