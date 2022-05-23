module.exports = {
	appName: 'cortesdev-api',
	path: {
	},
	log: {
		level: 'info',
		external: true
	},
	secretKey: "secretKey",
	mysql: {
		central:{
			db: {
				user: process.env.MYSQL_USER || '',
				password: process.env.MYSQL__PASS || '-',
				database: process.env.MYSQL_DB || '',
				host: process.env.MYSQL_HOST || '.cl',
				port: process.env.MYSQL_PORT || '',
				connectionLimit: 100
			}
		}	
	}
}