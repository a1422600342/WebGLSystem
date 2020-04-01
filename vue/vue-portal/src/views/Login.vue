<template>
    <div class="login">
        <Nav :activeIndex="'6'"/>
        <div class="login-content" :style="{backgroundImage:`url(${bgImg})`}">
            <div class="login-box">
                <h2 style="text-align: center;font-family: 宋体;color: #4486ff;margin-bottom: 15px;">登录</h2>
                <el-form :model="loginForm" :rules="rules" ref="loginForm">
                    <el-form-item prop="account">
                        <el-input type="text" placeholder="请输入账号/手机号" v-model="loginForm.account"/>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password" placeholder="请输入密码" v-model="loginForm.password"/>
                    </el-form-item>
                    <el-form-item prop="validCode">
                        <el-input type="text" placeholder="请输入验证码" v-model="loginForm.validCode" style="width: 250px;"/><span @click="refreshCode"><SIdentify id="code" :identifyCode="identifyCode" :contentHeight="30" @click="refreshCode"/></span>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
    import SIdentify from '@/components/Identify.vue'
    import Nav from '@/components/NaviTool.vue'
    import Footer from  '@/components/Footer.vue'
    export default {
        data() {
            return {
                bgImg: require("@/assets/bj.png"),
                loginForm:{
                    account: '',
                    password: '',
                    validCode: ''
                },
                rules: {
                    account: [
                        {required: true, message: '请填写账号或手机号', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请填写密码', trigger: 'blur'},
                        { min: 6, max: 12, message: '密码长度在 6 到 12 个字符', trigger: 'blur' }
                    ],
                    validCode: [
                        {required: true, message: '请填写验证码', trigger: 'blur'}
                    ]
                },
                identifyCodes: '1234567890',
                identifyCode: ''
            }
        },
        components: {
            SIdentify,Nav,Footer
        },
        methods: {
            loadCode () {
                console.log(this.$refs.logincode)
                img(this.$refs.logincode, '/VerificationCode/?date=' + Math.random())
            },
            randomNum (min, max) {
                return Math.floor(Math.random() * (max - min) + min)
            },
            refreshCode () {
                this.identifyCode = ''
                this.makeCode(this.identifyCodes, 5)
            },
            makeCode (o, l) {
                for (let i = 0; i < l; i++) {
                    this.identifyCode += this.identifyCodes[this.randomNum(0, this.identifyCodes.length)]
                }
                sessionStorage.setItem('logincode', this.identifyCode)
            }
        },
        mounted(){
            this.identifyCode = ''
            this.makeCode(this.identifyCodes, 5)
        }
    }
</script>

<style scoped lang="scss">
    .login{
        width: 100%;
        height: 100%;
    }
    .login-content{
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        overflow: hidden;
        position: relative;
    }
    .login-box{
        padding: 20px;
        width: 450px;
        position: absolute;
        top: 30%;
        left: 30%;
        border: 2px solid #fff;
        background-color: rgba(255, 255, 255,.5);
        border-radius: 5px;
        transform: translate(-50%,-50%);
    }
    #code{
        position: relative;
        top: 10px;
        left: 40px;
    }
</style>
