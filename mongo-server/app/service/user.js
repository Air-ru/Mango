const Service = require('egg').Service;
class UserService extends Service {
    async register() {
        const result = await this.app.mysql.insert('user', data);
        return result;
    }
    async find(uid) {
        // 假如 我们拿到用户 id 从数据库获取用户详细信息
        const user = await this.app.mysql.get('user', { id: uid });
        return { user };
    }

    async addShippingList(data) {
        // const result = await this.app.mysql.insert('shipping_list', data);
        // return result;
    }
}
module.exports = UserService;