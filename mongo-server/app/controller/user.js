'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    // 登录
    async login() {

    }
    // 注册账号
    async register() {
        const ctx = this.ctx;
        const data = ctx.request.body;
        const result = await ctx.service.user.register(data);
        ctx.body = result;

    }
    async info() {
        const ctx = this.ctx;
        const userId = ctx.request.body.userId;
        const user = await ctx.service.user.find(userId);
        ctx.body = user;
    }
    // 找到订单
    async findShippingList() {
        const ctx = this.ctx;
        const userId = ctx.request.body.userId;
        const user = await ctx.service.user.find(userId);
        ctx.body = user;
    }
    // 添加订单
    async addShippingList() {
        const ctx = this.ctx;
        const data = ctx.request.body;
        const result = await ctx.service.user.addShippingList(data);
        ctx.body = result;
    }
}

module.exports = UserController;