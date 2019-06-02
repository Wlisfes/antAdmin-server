/*
 * @Author: 情雨随风
 * @Date: 2019-05-31 23:31:08
 * @LastEditors: 情雨随风
 * @LastEditTime: 2019-06-02 01:07:18
 * @Description: 
 */


axios.defaults.baseURL='http://localhost:9800'

//请求拦截器
axios.interceptors.request.use(res => res, err => Promise.reject(err))
//响应拦截器
axios.interceptors.response.use( res => res,err => err )


class HttpApi {
    constructor(vm) {
        this.vm = vm
    }
    get = async (url, param) => axios.get(url, { params: { ...param }}).then(res => res.data).catch(e => e)
    post = async (url, param) => axios.post(url, { ...param }).then(res => res.data).catch(e => e)

    //注册
    async postUser() {
        try {
            let res = await this.post(`/api/post/user`,{
                phone: 18676361342,
                password: "000000",
                nickname: "情雨随风",
                sex: 2,
                description: "项目开发者, 超级管理员！"
            })
            console.log(res)
            if(res.code === 200) 
                this.vm.$message({
                    message: res.message,
                    type: 'success'
                })
            else
                this.vm.$message.error(res.message)
        } catch (error) {
            this.vm.$message.error('server 奔溃')
        }
    }

    //登录
    async loginUser() {
        try {
            let res = await this.post(`/api/login/user`,{
                phone: 18676361342,
                password: "000000"
            })
            console.log(res)
            if(res.code === 200) 
                this.vm.$message({
                    message: res.message,
                    type: 'success'
                })
            else
                this.vm.$message.error(res.message)
        } catch (error) {
            this.vm.$message.error('server 奔溃')
        }
    }

    //获取全部用户
    async AllUser() {
        try {
            let res = await this.get('/api/all/user')
            console.log(res)
            if(res.code === 200) 
                this.vm.$message({
                    message: res.message,
                    type: 'success'
                })
            else
                this.vm.$message.error(res.message)
        } catch (error) {
            this.vm.$message.error('server 奔溃')
        }
    }

    //改密
    async updateUserPssw() {
        try {
            let res = await this.post(`/api/update/user/pssw`,{
                phone: 18676361342,
                password: "000000"
            })
            console.log(res)
            if(res.code === 200) 
                this.vm.$message({
                    message: res.message,
                    type: 'success'
                })
            else
                this.vm.$message.error(res.message)
        } catch (error) {
            this.vm.$message.error('server 奔溃')
        }
    }

    //更换手机号
    async updateUserPhone() {
        try {
            let res = await this.post(`/api/update/user/phone`,{
                uid: 1559405054382,
                phone: 18676361342
            })
            console.log(res)
            if(res.code === 200) 
                this.vm.$message({
                    message: res.message,
                    type: 'success'
                })
            else
                this.vm.$message.error(res.message)
        } catch (error) {
            this.vm.$message.error('server 奔溃')
        }
    }

    //新增标签
    async postTags() {
        try {
            let res = await this.post(`/api/post/tags`,{
                name: "Koa",
                color: "#2C93C5",
                description: "Koa是一个轻量级的Web应用框架。"
            })
            console.log(res)
            if(res.code === 200) 
                this.vm.$message({
                    message: res.message,
                    type: 'success'
                })
            else
                this.vm.$message.error(res.message)
        } catch (error) {
            this.vm.$message.error('server 奔溃')
        }
    }

    //修改标签
    async updateTags() {
        try {
            let res = await this.post(`/api/update/tags`,{
                id: 1559405521695,
                name: "Vue",
                description: `Vue是一个构建数据驱动的 web 界面的渐进式框架。Vue.js 的目标是通过尽可
                能简单的 API 实现响应的数据绑定和组合的视图组件。它不仅易于上手，还便于与第三方库或既有项目整合。`
            })
            console.log(res)
            if(res.code === 200) 
                this.vm.$message({
                    message: res.message,
                    type: 'success'
                })
            else
                this.vm.$message.error(res.message)
        } catch (error) {
            this.vm.$message.error('server 奔溃')
        }
    }

    //获取全部标签
    async AllTags() {
        try {
            let res = await this.get('/api/all/tags')
            console.log(res)
            if(res.code === 200) 
                this.vm.$message({
                    message: res.message,
                    type: 'success'
                })
            else
                this.vm.$message.error(res.message)
        } catch (error) {
            this.vm.$message.error('server 奔溃')
        }
    }

    //获取已开放标签
    async AllOpenTags() {
        try {
            let res = await this.get('/api/all/open/tags')
            console.log(res)
            if(res.code === 200) 
                this.vm.$message({
                    message: res.message,
                    type: 'success'
                })
            else
                this.vm.$message.error(res.message)
        } catch (error) {
            this.vm.$message.error('server 奔溃')
        }
    }

    //获取已关闭标签
    async AllDownTags() {
        try {
            let res = await this.get('/api/all/down/tags')
            console.log(res)
            if(res.code === 200) 
                this.vm.$message({
                    message: res.message,
                    type: 'success'
                })
            else
                this.vm.$message.error(res.message)
        } catch (error) {
            this.vm.$message.error('server 奔溃')
        }
    }

    //获取已删除标签
    async AllDelTags() {
        try {
            let res = await this.get('/api/all/del/tags')
            console.log(res)
            if(res.code === 200) 
                this.vm.$message({
                    message: res.message,
                    type: 'success'
                })
            else
                this.vm.$message.error(res.message)
        } catch (error) {
            this.vm.$message.error('server 奔溃')
        }
    }
    
    //查找id标签
    async idTags() {
        try {
            let res = await this.get(`/api/id/tags`,{
                id: 1559405521695
            })
            console.log(res)
            if(res.code === 200) 
                this.vm.$message({
                    message: res.message,
                    type: 'success'
                })
            else
                this.vm.$message.error(res.message)
        } catch (error) {
            this.vm.$message.error('server 奔溃')
        }
    }

    //开放标签
    async openTags() {
        try {
            let res = await this.get(`/api/open/tags`,{
                id: 1559405521695
            })
            console.log(res)
            if(res.code === 200) 
                this.vm.$message({
                    message: res.message,
                    type: 'success'
                })
            else
                this.vm.$message.error(res.message)
        } catch (error) {
            this.vm.$message.error('server 奔溃')
        }
    }

    //关闭标签
    async downTags() {
        try {
            let res = await this.get(`/api/down/tags`,{
                id: 1559405521695
            })
            console.log(res)
            if(res.code === 200) 
                this.vm.$message({
                    message: res.message,
                    type: 'success'
                })
            else
                this.vm.$message.error(res.message)
        } catch (error) {
            this.vm.$message.error('server 奔溃')
        }
    }

    //删除标签
    async delTags() {
        try {
            let res = await this.get(`/api/del/tags`,{
                id: 1559405521695
            })
            console.log(res)
            if(res.code === 200) 
                this.vm.$message({
                    message: res.message,
                    type: 'success'
                })
            else
                this.vm.$message.error(res.message)
        } catch (error) {
            this.vm.$message.error('server 奔溃')
        }
    }

    //新增文章
    async postArticle() {
        try {
            let res = await this.post(`/api/post/article`,{
                title: "第一篇文章的标题 title",
                description: "第一篇文章的描述 description",
                context: "第一篇文章的内容 context",
                picture: "第一篇文章的缩略图 picture",
                tags: [{ name: 'react', color: "#333" }]
            })
            console.log(res)
            if(res.code === 200) 
                this.vm.$message({
                    message: res.message,
                    type: 'success'
                })
            else
                this.vm.$message.error(res.message)
        } catch (error) {
            this.vm.$message.error('server 奔溃')
        }
    }

    //获取所有文章
    async AllArticle() {
        try {
            let res = await this.get('/api/all/article')
            console.log(res)
            if(res.code === 200) 
                this.vm.$message({
                    message: res.message,
                    type: 'success'
                })
            else
                this.vm.$message.error(res.message)
        } catch (error) {
            this.vm.$message.error('server 奔溃')
        }
    }

}


