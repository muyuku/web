import Mock from 'mockjs'
		Mock.mock('/api/user/login',{   //定义请求					
				"status": 0,			//返回值
				"data": {
					"id": 12,
					"username": "admin",
					"email": "admin@51purse.com"		
				}
		});